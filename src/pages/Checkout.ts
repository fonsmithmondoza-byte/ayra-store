export const Checkout = `
  <div style="max-width:1100px; margin:0 auto; padding:40px 4%; display:flex; gap:60px; flex-wrap:wrap;">
    <div style="flex:1.3; min-width:340px;">
      <h1 style="font-size:32px; font-weight:300; margin-bottom:8px;">Checkout</h1>
      <p style="opacity:.6; font-size:13px; margin-bottom:32px;">Complete your order — demo payment, no real charge</p>
      
      <div id="checkout-errors" style="display:none; padding:12px; font-size:12px; margin-bottom:20px; border:1px solid;"></div>

      <input id="fullName" placeholder="Full Name" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:14px; font-size:13px;" />
      <input id="email" placeholder="Email Address" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:14px; font-size:13px;" />
      <input id="address" placeholder="Shipping Address" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:14px; font-size:13px;" />
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
        <input id="city" placeholder="City" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="zip" placeholder="ZIP / Postal" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
      </div>

      <div style="border-top:1px solid #eee; padding-top:24px; margin-bottom:20px;">
        <p style="font-size:11px; letter-spacing:2px; margin-bottom:16px;">PAYMENT</p>
        <input value="4242 4242 4242 4242" style="width:100%; padding:14px; border:1px solid #ddd; margin-bottom:12px; font-size:13px;" />
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <input placeholder="MM / YY" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
          <input placeholder="CVC" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        </div>
        <div style="display:flex; gap:8px; margin-bottom:20px;">
          <input id="coupon" placeholder="Coupon AYRA10" style="flex:1; padding:12px; border:1px solid #ddd; font-size:11px;" />
          <button id="applyCoupon" style="padding:12px 16px; border:1px solid black; background:white; font-size:10px; letter-spacing:1px; cursor:pointer;">APPLY</button>
        </div>
      </div>

      <button id="payBtn" style="width:100%; background:black; color:white; padding:18px; border:none; letter-spacing:2px; font-size:12px; cursor:pointer;">PAY NOW • $<span id="payTotal">0</span></button>
    </div>

    <div style="flex:.7; min-width:300px; background:#fafafa; padding:28px; height:fit-content;">
      <h3 style="font-size:11px; letter-spacing:2px; margin-bottom:20px; font-weight:600;">ORDER SUMMARY</h3>
      <div id="order-items"></div>
      <div id="order-totals" style="border-top:1px solid #e5e5e5; margin-top:20px; padding-top:16px; font-size:13px;"></div>
    </div>
  </div>
`

export function initCheckout(){
  function getMergedCart(){
    const raw = JSON.parse(localStorage.getItem('cart') || '[]')
    const map = new Map()
    raw.forEach((item:any)=>{
      const key = `${item.id}` // FIX: merge by ID only - fixes old cart data
      if(!map.has(key)){
        map.set(key, {...item, qty: item.qty || 1})
      } else {
        const ex = map.get(key)
        ex.qty += item.qty || 1
        if(!ex.selectedSize && item.selectedSize) ex.selectedSize = item.selectedSize
        if(!ex.selectedColor && item.selectedColor) ex.selectedColor = item.selectedColor
      }
    })
    return Array.from(map.values())
  }

  const cart = getMergedCart()
  localStorage.setItem('cart', JSON.stringify(cart))

  const itemsEl = document.getElementById('order-items')!
  const totalsEl = document.getElementById('order-totals')!
  const payTotalEl = document.getElementById('payTotal')!
  const errorsEl = document.getElementById('checkout-errors')!

  if(cart.length===0){ window.location.hash='#cart'; return }

  let discount = 0

  function render(){
    const subtotal = cart.reduce((s:any,i:any)=> s + i.price * (i.qty||1), 0)
    const shipping = subtotal > 75 ? 0 : 8
    const total = Math.max(0, subtotal + shipping - discount)

    itemsEl.innerHTML = cart.map((i:any)=>`
      <div style="display:flex; gap:12px; margin-bottom:18px;">
        <div style="width:56px; height:70px; background:#f0f0f0; position:relative; flex-shrink:0;">
          <img src="${i.image}" style="width:100%; height:100%; object-fit:cover;" />
          <span style="position:absolute; top:-6px; right:-6px; background:black; color:white; font-size:9px; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">${i.qty}</span>
        </div>
        <div style="flex:1;">
          <p style="font-size:12.5px; line-height:1.3;">${i.name}</p>
          <p style="font-size:10.5px; opacity:.5; margin-top:4px;">${i.selectedSize?`Size: ${i.selectedSize}`:''} ${i.selectedColor?`• ${i.selectedColor}`:''} • Qty ${i.qty}</p>
        </div>
        <p style="font-size:12px; font-weight:600;">$${i.price * i.qty}</p>
      </div>
    `).join('')

    totalsEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; opacity:.7;"><span>Subtotal</span><span>$${subtotal}</span></div>
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; opacity:.7;"><span>Shipping</span><span>${shipping===0?'Free':`$${shipping}`}</span></div>
      ${discount>0?`<div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#0a7a0a;"><span>Discount AYRA10</span><span>-$${discount}</span></div>`:''}
      <div style="display:flex; justify-content:space-between; font-weight:700; font-size:14px; margin-top:12px; padding-top:12px; border-top:1px solid #e5e5e5;"><span>Total</span><span>$${total}</span></div>
    `
    payTotalEl.textContent = String(total)
  }

  render()

  document.getElementById('applyCoupon')?.addEventListener('click', ()=>{
    const code = (document.getElementById('coupon') as HTMLInputElement).value.trim().toUpperCase()
    if(code==='AYRA10'){
      const subtotal = cart.reduce((s:any,i:any)=> s + i.price * i.qty, 0)
      discount = Math.round(subtotal*0.1)
      render()
      errorsEl.style.display='block'; errorsEl.style.background='#f0fff0'; errorsEl.style.borderColor='#b2e6b2'; errorsEl.style.color='#1a7a1a'
      errorsEl.textContent='✓ AYRA10 applied -10%'
    } else {
      errorsEl.style.display='block'; errorsEl.style.background='#fff0f0'; errorsEl.style.borderColor='#ffcccc'; errorsEl.style.color='#a00'
      errorsEl.textContent='Invalid code. Try AYRA10'
    }
  })

  document.getElementById('payBtn')?.addEventListener('click', ()=>{
    const fullName = (document.getElementById('fullName') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    if(!fullName || !email){
      errorsEl.style.display='block'; errorsEl.style.background='#fff0f0'; errorsEl.style.borderColor='#ffcccc'; errorsEl.style.color='#a00'
      errorsEl.textContent='Please fill Full Name and Email.'
      return
    }
    const btn = document.getElementById('payBtn') as HTMLButtonElement
    btn.textContent='PROCESSING...'
    setTimeout(()=>{ localStorage.removeItem('cart'); window.location.hash='#success' }, 1000)
  })
}