export const Checkout = `
  <div style="max-width:1100px; margin:0 auto; padding:50px 4%; display:flex; gap:60px; flex-wrap:wrap;">
    <!-- LEFT FORM -->
    <div style="flex:1.2; min-width:340px;">
      <h1 style="font-size:28px; font-weight:300; margin-bottom:32px;">Checkout</h1>
      
      <div id="checkout-errors" style="display:none; background:#fff0f0; border:1px solid #ffcccc; padding:12px; font-size:12px; color:#a00; margin-bottom:20px;"></div>

      <h3 style="font-size:11px; letter-spacing:2px; margin-bottom:16px;">CONTACT</h3>
      <input id="email" placeholder="Email Address" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:20px; font-size:13px;" />

      <h3 style="font-size:11px; letter-spacing:2px; margin-bottom:16px;">SHIPPING ADDRESS</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
        <input id="firstName" placeholder="First Name" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="lastName" placeholder="Last Name" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
      </div>
      <input id="address" placeholder="Address" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:12px; font-size:13px;" />
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:28px;">
        <input id="city" placeholder="City" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="zip" placeholder="ZIP" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="country" placeholder="Country" value="USA" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
      </div>

      <div style="display:flex; gap:12px; margin-bottom:24px;">
        <input id="coupon" placeholder="Discount code" style="flex:1; padding:14px; border:1px solid #ddd; font-size:12px; letter-spacing:1px;" />
        <button id="applyCoupon" style="padding:14px 20px; border:1px solid black; background:white; font-size:11px; letter-spacing:1px; cursor:pointer;">APPLY</button>
      </div>

      <button id="payBtn" style="width:100%; background:black; color:white; padding:18px; border:none; letter-spacing:2px; font-size:12px; cursor:pointer;">PAY NOW • $<span id="payTotal">0</span></button>
      <p style="text-align:center; font-size:10px; opacity:.4; margin-top:12px; letter-spacing:1px;">SECURE CHECKOUT • SSL ENCRYPTED</p>
    </div>

    <!-- RIGHT SUMMARY -->
    <div style="flex:.8; min-width:300px; background:#fafafa; padding:28px; height:fit-content;">
      <h3 style="font-size:11px; letter-spacing:2px; margin-bottom:20px;">ORDER SUMMARY</h3>
      <div id="order-items"></div>
      <div id="order-totals" style="border-top:1px solid #eee; margin-top:20px; padding-top:16px; font-size:13px;"></div>
    </div>
  </div>
`

export function initCheckout(){
  const cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]')
  const itemsEl = document.getElementById('order-items')!
  const totalsEl = document.getElementById('order-totals')!
  const payTotalEl = document.getElementById('payTotal')!
  const errorsEl = document.getElementById('checkout-errors')!

  if(cart.length===0){
    window.location.hash = '#cart'
    return
  }

  let discount = 0
  let couponApplied = false

  function render(){
    const subtotal = cart.reduce((s:any,i:any)=> s + i.price * (i.qty||1), 0)
    const shipping = subtotal > 75 ? 0 : 8
    const total = Math.max(0, subtotal + shipping - discount)

    itemsEl.innerHTML = cart.map((i:any)=>`
      <div style="display:flex; gap:12px; margin-bottom:16px;">
        <div style="width:56px; height:70px; background:#f0f0f0; position:relative;">
          <img src="${i.image}" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; top:-6px; right:-6px; background:black; color:white; font-size:9px; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">${i.qty||1}</span>
        </div>
        <div style="flex:1;">
          <p style="font-size:12px;">${i.name}</p>
          <p style="font-size:10px; opacity:.5; margin-top:4px;">${i.selectedSize?`Size: ${i.selectedSize}`:''} ${i.selectedColor?`• ${i.selectedColor}`:''}</p>
        </div>
        <p style="font-size:12px; font-weight:600;">$${i.price * (i.qty||1)}</p>
      </div>
    `).join('')

    totalsEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; opacity:.7;"><span>Subtotal</span><span>$${subtotal}</span></div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; opacity:.7;"><span>Shipping</span><span>${shipping===0?'FREE':`$${shipping}`}</span></div>
      ${discount>0?`<div style="display:flex; justify-content:space-between; margin-bottom:8px; color:green;"><span>Discount (AYRA10)</span><span>-$${discount}</span></div>`:''}
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:15px; margin-top:12px; padding-top:12px; border-top:1px solid #eee;"><span>Total</span><span>$${total}</span></div>
    `
    payTotalEl.textContent = String(total)
  }

  render()

  document.getElementById('applyCoupon')?.addEventListener('click', ()=>{
    const code = (document.getElementById('coupon') as HTMLInputElement).value.trim().toUpperCase()
    if(code==='AYRA10' && !couponApplied){
      const subtotal = cart.reduce((s:any,i:any)=> s + i.price * (i.qty||1), 0)
      discount = Math.round(subtotal * 0.1)
      couponApplied = true
      render()
      errorsEl.style.display='block'; errorsEl.style.background='#f0fff0'; errorsEl.style.borderColor='#b2e6b2'; errorsEl.style.color='#1a7a1a'
      errorsEl.textContent = '✓ AYRA10 applied - 10% off'
    } else if(couponApplied){
      errorsEl.style.display='block'; errorsEl.textContent='Coupon already applied'
    } else {
      errorsEl.style.display='block'; errorsEl.style.background='#fff0f0'; errorsEl.style.borderColor='#ffcccc'; errorsEl.style.color='#a00'
      errorsEl.textContent='Invalid coupon. Try AYRA10'
    }
  })

  document.getElementById('payBtn')?.addEventListener('click', ()=>{
    const email = (document.getElementById('email') as HTMLInputElement).value
    const fn = (document.getElementById('firstName') as HTMLInputElement).value
    const addr = (document.getElementById('address') as HTMLInputElement).value
    const city = (document.getElementById('city') as HTMLInputElement).value

    if(!email || !fn || !addr || !city){
      errorsEl.style.display='block'; errorsEl.style.background='#fff0f0'; errorsEl.style.borderColor='#ffcccc'; errorsEl.style.color='#a00'
      errorsEl.textContent='Please fill email, first name, address, and city.'
      return
    }

    // Simulate success
    const btn = document.getElementById('payBtn') as HTMLButtonElement
    btn.textContent = 'PROCESSING...'
    btn.disabled = true
    setTimeout(()=>{
      localStorage.removeItem('cart')
      window.location.hash = '#success'
    }, 1200)
  })
}