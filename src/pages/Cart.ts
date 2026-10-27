export const CartPage = `
  <div id="cart-page" style="padding:40px 4%; min-height:70vh; max-width:1200px; margin:0 auto;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
      <h2 style="font-weight:300; font-size:32px; letter-spacing:1px;">Your Cart</h2>
      <span id="cart-items-count" style="font-size:13px; opacity:.6; letter-spacing:1px;"></span>
    </div>
    <div id="cart-items"></div>
  </div>
`

export function initCart() {
  const container = document.getElementById('cart-items')!
  const countEl = document.getElementById('cart-items-count')!
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')

  if (countEl) countEl.textContent = `${cart.length} ${cart.length === 1 ? 'ITEM' : 'ITEMS'}`

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:80px 20px; border:1px dashed #ddd;">
        <p style="font-size:18px; font-weight:300; margin-bottom:12px;">Your cart is empty</p>
        <p style="opacity:.6; font-size:13px; margin-bottom:24px;">Add some essentials to get started</p>
        <a href="#" id="continueShop" style="display:inline-block; background:black; color:white; padding:12px 28px; text-decoration:none; letter-spacing:1px; font-size:12px;">CONTINUE SHOPPING</a>
      </div>
    `
    document.getElementById('continueShop')?.addEventListener('click', (e) => {
      e.preventDefault()
      window.location.hash = ''
    })
    return
  }

  let total = cart.reduce((s:number, p:any) => s + p.price, 0)

  container.innerHTML = `
    <div style="display:flex; gap:60px; flex-wrap:wrap;">
      <div style="flex:2; min-width:320px; display:grid; gap:20px;">
        ${cart.map((p:any, i:number) => `
          <div style="display:flex; gap:20px; padding:20px; background:#fafafa; border:1px solid #f0f0f0;">
            <img src="${p.image}" style="width:110px; height:140px; object-fit:cover; background:white;" />
            <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between;">
              <div>
                <p style="font-size:11px; letter-spacing:2px; opacity:.5; margin-bottom:4px;">${p.category}</p>
                <p style="font-weight:400; font-size:15px; letter-spacing:.5px;">${p.name}</p>
                <p style="font-size:12px; opacity:.6; margin-top:6px;">Size: M • Qty: 1</p>
              </div>
              <p style="font-weight:600; font-size:14px;">$${p.price}</p>
            </div>
            <button data-index="${i}" class="remove-btn" style="background:none; border:none; font-size:11px; letter-spacing:1px; text-decoration:underline; cursor:pointer; align-self:flex-start; opacity:.6;">REMOVE</button>
          </div>
        `).join('')}
      </div>
      
      <div style="flex:1; min-width:280px; background:#f9f9f9; padding:28px; height:fit-content; position:sticky; top:100px;">
        <h3 style="font-size:14px; letter-spacing:2px; margin-bottom:20px;">ORDER SUMMARY</h3>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:12px; opacity:.7;"><span>Subtotal</span><span>$${total}</span></div>
        <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:12px; opacity:.7;"><span>Shipping</span><span>Free</span></div>
        <div style="border-top:1px solid #ddd; margin:16px 0;"></div>
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:16px; margin-bottom:24px;"><span>Total</span><span>$${total}</span></div>
        <button id="checkoutBtn" style="width:100%; background:black; color:white; padding:16px; border:none; letter-spacing:2px; font-size:12px; cursor:pointer;">PROCEED TO CHECKOUT</button>
        <button id="backShopBtn" style="width:100%; background:white; color:black; padding:14px; border:1px solid black; letter-spacing:1px; font-size:11px; cursor:pointer; margin-top:12px;">← CONTINUE SHOPPING</button>
        <p style="font-size:11px; opacity:.5; text-align:center; margin-top:16px; letter-spacing:.5px;">Free shipping • 30-day returns</p>
      </div>
    </div>
  `

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt((btn as HTMLElement).dataset.index!)
      cart.splice(idx, 1)
      localStorage.setItem('cart', JSON.stringify(cart))
      initCart()
      // Update header badge live
      const headerBadge = document.getElementById('cart-count')
      if (headerBadge) headerBadge.textContent = cart.length.toString()
    })
  })

  document.getElementById('backShopBtn')!.addEventListener('click', () => window.location.hash = '')
  document.getElementById('checkoutBtn')!.addEventListener('click', () => {
    alert(`Checkout $${total} - Ready to build Payment page next!`)
    window.location.hash = '#checkout'
  })
}