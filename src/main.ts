import './style.css'
import { Header, updateCartCount } from './components/Header'
import { Home, initHome } from './pages/Home'
import { ProductDetail, initProductDetail } from './pages/ProductDetail'
import { Cart as CartPage, initCart } from './pages/Cart'
import { Checkout, initCheckout } from './pages/Checkout'

const app = document.querySelector<HTMLDivElement>('#app')!

// INLINE SUCCESS - no import needed
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
    itemsEl.innerHTML = `<p style="font-size:12px; opacity:.6; text-align:center;">Your order is being prepared ✨</p>`
  }
  document.getElementById('continueShopBtn')?.addEventListener('click',()=> window.location.hash='')
}

function router() {
  const hash = window.location.hash
  if (hash === '#success') {
    app.innerHTML = `${Header} ${Success}`
    updateCartCount()
    try { initSuccess() } catch(e){ console.error(e) }
    return
  }
  if (hash.startsWith('#product-')) {
    const id = parseInt(hash.replace('#product-', ''))
    app.innerHTML = `${Header} ${ProductDetail}`
    updateCartCount()
    initProductDetail(id)
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

document.addEventListener('click', (e) => {
  const card = (e.target as HTMLElement).closest('.product-card') as HTMLElement
  if (card?.dataset.id) window.location.hash = `#product-${card.dataset.id}`
})

window.addEventListener('hashchange', router)
router()