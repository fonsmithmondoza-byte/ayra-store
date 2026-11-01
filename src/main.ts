import './style.css'
import { Header, updateCartCount } from './components/Header'
import { Home, initHome } from './pages/Home'
import { ProductDetail, initProductDetail } from './pages/ProductDetail'
import { Cart as CartPage, initCart } from './pages/Cart'
import { Checkout, initCheckout } from './pages/Checkout'
import { Success, initSuccess } from './pages/Success'

const app = document.querySelector<HTMLDivElement>('#app')!

function router() {
  const hash = window.location.hash

  if (hash === '#success') {
    app.innerHTML = `${Header} ${Success}`
    updateCartCount()
    initSuccess()
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

  // Home
  app.innerHTML = `${Header} ${Home}`
  updateCartCount()
  initHome()
}

// Single global listener - not inside router
document.addEventListener('click', (e) => {
  const card = (e.target as HTMLElement).closest('.product-card') as HTMLElement
  if (card?.dataset.id) {
    window.location.hash = `#product-${card.dataset.id}`
  }
})

window.addEventListener('hashchange', router)
router()