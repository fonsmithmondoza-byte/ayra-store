import './style.css'
import { Home, initHome } from './pages/Home'
import { AuthPage, initAuth } from './pages/Auth'
import { DashboardPage, initDashboard } from './pages/Dashboard'

const Checkout = `
  <main style="max-width:600px; margin:0 auto; padding:48px 4%;">
    <h1>Checkout</h1>
    <form id="checkout-form">
      <label style="display:block; margin:16px 0;">Name<input name="name" autocomplete="name" required style="display:block; width:100%; padding:12px; box-sizing:border-box;"></label>
      <label style="display:block; margin:16px 0;">Email<input name="email" type="email" autocomplete="email" required style="display:block; width:100%; padding:12px; box-sizing:border-box;"></label>
      <label style="display:block; margin:16px 0;">Address<input name="address" autocomplete="street-address" required style="display:block; width:100%; padding:12px; box-sizing:border-box;"></label>
      <button type="submit" style="background:black; color:white; padding:14px 28px; border:0; cursor:pointer;">PLACE ORDER</button>
    </form>
  </main>
`

function initCheckout() {
  document.getElementById('checkout-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    try {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      if (!Array.isArray(cart) || cart.length === 0) {
        window.location.hash = '#cart'
        return
      }
      sessionStorage.setItem('lastCart', JSON.stringify(cart))
      localStorage.removeItem('cart')
      window.location.hash = '#success'
    } catch {
      window.location.hash = '#cart'
    }
  })
}

const CartPage = `
  <main class="cart-page" style="max-width:900px; margin:0 auto; padding:48px 4%;">
    <h1>Your Cart</h1>
    <div id="cart-items"></div>
    <a href="#checkout" id="cart-checkout" style="display:inline-block; margin-top:24px;">PROCEED TO CHECKOUT</a>
  </main>
`

function initCart() {
  const itemsEl = document.getElementById('cart-items')
  if (!itemsEl) return

  try {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (!Array.isArray(cart) || cart.length === 0) {
      itemsEl.textContent = 'Your cart is empty.'
      return
    }

    const rows = cart.map((item: { name?: string; price?: number; qty?: number }) => {
      const row = document.createElement('div')
      row.style.cssText = 'display:flex; justify-content:space-between; padding:16px 0; border-bottom:1px solid #eee;'
      const name = document.createElement('span')
      name.textContent = `${item.name || 'Item'} × ${Number(item.qty) || 0}`
      const price = document.createElement('span')
      price.textContent = `$${((Number(item.price) || 0) * (Number(item.qty) || 0)).toFixed(2)}`
      row.append(name, price)
      return row
    })
    itemsEl.replaceChildren(...rows)
  } catch {
    itemsEl.textContent = 'Your cart is empty.'
  }
}

const Header = `
  <header class="site-header">
    <a href="#" aria-label="Ayra home">AYRA</a>
    <nav aria-label="Main navigation">
      <a href="#">Home</a>
      <a href="#cart">Cart <span id="cart-count">0</span></a>
    </nav>
  </header>
`

function updateCartCount() {
  const countEl = document.getElementById('cart-count')
  if (!countEl) return

  try {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = Array.isArray(cart)
      ? cart.reduce((total: number, item: { qty?: number }) => total + (Number(item.qty) || 0), 0)
      : 0
    countEl.textContent = String(count)
  } catch {
    countEl.textContent = '0'
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!

const Success = `
  <div style="max-width:600px; margin:0 auto; padding:80px 4%; text-align:center;">
    <div style="width:60px; height:60px; background:black; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:26px;">✓</div>
    <h1 style="font-size:32px; font-weight:300;">Order Confirmed</h1>
    <p style="opacity:.6; font-size:13px; margin:16px 0 32px;">ORDER #<span id="orderId"></span></p>
    <div id="success-items" style="background:#fafafa; padding:20px; text-align:left; margin-bottom:24px;"></div>
    <button id="continueShopBtn" style="background:black; color:white; padding:14px 28px; border:none; font-size:11px; cursor:pointer; letter-spacing:1px;">CONTINUE SHOPPING</button>
  </div>
`
function initSuccess(){
  const el = document.getElementById('orderId')
  if(el) el.textContent = 'AYRA-' + Math.floor(100000 + Math.random()*900000)
  const lastCart = JSON.parse(sessionStorage.getItem('lastCart')||'[]')
  const itemsEl = document.getElementById('success-items')
  if(!itemsEl) return
  if(lastCart.length){
    const total = lastCart.reduce((s:any,i:any)=>s+i.price*i.qty,0)
    itemsEl.innerHTML = lastCart.map((i:any)=>`<div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:12px;"><span>${i.name} x${i.qty}</span><span>$${i.price*i.qty}</span></div>`).join('') + `<div style="display:flex; justify-content:space-between; font-weight:700; border-top:1px solid #eee; padding-top:10px; margin-top:10px;"><span>Total</span><span>$${total}</span></div>`
  } else {
    itemsEl.innerHTML = `<p style="font-size:12px; opacity:.6; text-align:center;">Your order is being prepared</p>`
  }
  document.getElementById('continueShopBtn')?.addEventListener('click',()=> window.location.hash='')
}

function router() {
  const hash = window.location.hash
  if (hash === '#login') {
    app.innerHTML = `${Header} ${AuthPage('login')}`
    updateCartCount()
    initAuth('login')
    return
  }
  if (hash === '#register') {
    app.innerHTML = `${Header} ${AuthPage('register')}`
    updateCartCount()
    initAuth('register')
    return
  }
  if (hash === '#dashboard') {
    const html = DashboardPage()
    if(html.includes('Redirect')) return
    app.innerHTML = `${Header} ${html}`
    updateCartCount()
    initDashboard()
    return
  }
  if (hash === '#success') {
    app.innerHTML = `${Header} ${Success}`
    updateCartCount()
    try { initSuccess() } catch(e){ console.error(e) }
    return
  }
  if (hash === '#cart') {
    app.innerHTML = `${Header} ${CartPage}`
    updateCartCount()
    initCart()
    return
  }
  if (hash === '#checkout') {
    app.innerHTML = `${Header} ${Checkout}`
    updateCartCount()
    initCheckout()
    return
  }
  app.innerHTML = `${Header} ${Home}`
  updateCartCount()
  initHome()
}

window.addEventListener('hashchange', router)
router()