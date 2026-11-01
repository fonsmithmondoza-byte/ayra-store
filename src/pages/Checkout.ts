export const CheckoutPage = `
  <div id="checkout-page" style="padding:40px 4%; max-width:1100px; margin:0 auto; display:flex; gap:60px; flex-wrap:wrap;">
    <div style="flex:2; min-width:320px;">
      <h2 style="font-weight:300; font-size:32px; margin-bottom:8px;">Checkout</h2>
      <p style="opacity:.6; font-size:13px; margin-bottom:32px; letter-spacing:.5px;">Complete your order — demo payment, no real charge</p>
      
      <div style="display:grid; gap:16px;">
        <input id="c-name" placeholder="Full Name" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="c-email" placeholder="Email Address" type="email" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <input id="c-address" placeholder="Shipping Address" style="padding:14px; border:1px solid #ddd; font-size:13px;" />
        <div style="display:flex; gap:12px;">
          <input id="c-city" placeholder="City" style="flex:1; padding:14px; border:1px solid #ddd; font-size:13px;" />
          <input id="c-zip" placeholder="ZIP / Postal" style="flex:1; padding:14px; border:1px solid #ddd; font-size:13px;" />
        </div>
        <div style="border-top:1px solid #eee; margin:12px 0;"></div>
        <p style="font-size:12px; letter-spacing:2px;">PAYMENT</p>
        <input id="c-card" placeholder="Card Number  4242 4242 4242 4242" style="padding:14px; border:1px solid #ddd; font-size:13px; letter-spacing:1px;" />
        <div style="display:flex; gap:12px;">
          <input placeholder="MM / YY" style="flex:1; padding:14px; border:1px solid #ddd; font-size:13px;" />
          <input placeholder="CVC" style="flex:1; padding:14px; border:1px solid #ddd; font-size:13px;" />
        </div>
        <button id="payBtn" style="margin-top:12px; background:black; color:white; padding:16px; border:none; letter-spacing:2px; font-size:12px; cursor:pointer;">PAY NOW</button>
        <button id="backToCartBtn" style="background:white; color:black; padding:14px; border:1px solid black; letter-spacing:1px; font-size:11px; cursor:pointer;">← BACK TO CART</button>
      </div>
    </div>

    <div id="checkout-summary" style="flex:1; min-width:280px; background:#f9f9f9; padding:28px; height:fit-content; position:sticky; top:100px;">
    </div>
  </div>
`

export const SuccessPage = `
  <div style="padding:80px 4%; text-align:center; min-height:70vh; max-width:600px; margin:0 auto;">
    <div style="font-size:48px; margin-bottom:16px;">✓</div>
    <h2 style="font-weight:300; font-size:32px; margin-bottom:12px;">Order Successful!</h2>
    <p style="opacity:.6; font-size:14px; margin-bottom:8px;">Thank you for shopping with AYRA</p>
    <p id="success-order-id" style="font-size:12px; letter-spacing:1px; opacity:.5; margin-bottom:32px;"></p>
    <a href="#" id="continueSuccess" style="display:inline-block; background:black; color:white; padding:14px 32px; text-decoration:none; letter-spacing:1px; font-size:12px;">CONTINUE SHOPPING</a>
  </div>
`

function showToast(msg: string) {
  let t = document.getElementById('ayra-toast') as HTMLDivElement | null
  if (!t) {
    t = document.createElement('div')
    t.id = 'ayra-toast'
    t.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:12px 28px;font-size:13px;letter-spacing:.5px;z-index:99999;border-radius:4px;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:opacity .3s;'
    document.body.appendChild(t)
  }
  t.textContent = msg
  t.style.opacity = '1'
  t.style.display = 'block'
  setTimeout(() => { if (t) t.style.opacity = '0' }, 3000)
}

export function initCheckout() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const total = cart.reduce((s:number, p:any) => s + p.price, 0)
  const summary = document.getElementById('checkout-summary')!

  if (cart.length === 0) {
    window.location.hash = '#cart'
    return
  }

  summary.innerHTML = `
    <h3 style="font-size:14px; letter-spacing:2px; margin-bottom:20px;">ORDER SUMMARY</h3>
    <div style="display:grid; gap:12px; max-height:300px; overflow:auto; margin-bottom:16px;">
      ${cart.map((p:any) => `
        <div style="display:flex; gap:12px; font-size:12px;">
          <img src="${p.image}" style="width:50px; height:60px; object-fit:cover;" />
          <div style="flex:1;"><p>${p.name}</p><p style="opacity:.6;">$${p.price}</p></div>
        </div>
      `).join('')}
    </div>
    <div style="border-top:1px solid #ddd; margin:16px 0;"></div>
    <div style="display:flex; justify-content:space-between; font-size:13px; opacity:.7; margin-bottom:8px;"><span>Subtotal</span><span>$${total}</span></div>
    <div style="display:flex; justify-content:space-between; font-size:13px; opacity:.7; margin-bottom:16px;"><span>Shipping</span><span>Free</span></div>
    <div style="display:flex; justify-content:space-between; font-weight:700; font-size:16px;"><span>Total</span><span>$${total}</span></div>
  `

  document.getElementById('backToCartBtn')!.addEventListener('click', () => window.location.hash = '#cart')

  document.getElementById('payBtn')!.addEventListener('click', () => {
    const name = (document.getElementById('c-name') as HTMLInputElement).value
    const email = (document.getElementById('c-email') as HTMLInputElement).value
    const address = (document.getElementById('c-address') as HTMLInputElement).value

    if (!name || !email || !address) {
      showToast('Please fill Name, Email, and Address')
      return
    }

    // Fake payment delay
    const btn = document.getElementById('payBtn')!
    btn.textContent = 'PROCESSING...'
    ;(btn as HTMLButtonElement).disabled = true

    setTimeout(() => {
      const orderId = 'AYRA-' + Math.floor(Math.random() * 900000 + 100000)
      localStorage.setItem('lastOrderId', orderId)
      localStorage.setItem('cart', '[]')
      window.location.hash = '#success'
    }, 1200)
  })
}

export function initSuccess() {
  const orderId = localStorage.getItem('lastOrderId') || 'AYRA-000000'
  const el = document.getElementById('success-order-id')
  if (el) el.textContent = `Order ID: ${orderId} • A confirmation email has been sent`

  document.getElementById('continueSuccess')!.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.hash = ''
  })
}