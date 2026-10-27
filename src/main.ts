import './style.css'
import { Header, updateCartCount } from './components/Header'
import { Home, initHome } from './pages/Home'
import { ProductDetail, initProductDetail } from './pages/ProductDetail'
import { CartPage, initCart } from './pages/Cart'
import { CheckoutPage, SuccessPage, initCheckout, initSuccess } from './pages/Checkout'

const app = document.querySelector<HTMLDivElement>('#app')!

function router() {
  const hash = window.location.hash

  if (hash.startsWith('#product-')) {
    const id = parseInt(hash.replace('#product-', ''))
    app.innerHTML = `${Header} ${ProductDetail}`
    updateCartCount()
    initProductDetail(id)
  } else if (hash === '#cart') {
    app.innerHTML = `${Header} ${CartPage}`
    updateCartCount()
    initCart()
  } else if (hash === '#checkout') {
    app.innerHTML = `${Header} ${CheckoutPage}`
    updateCartCount()
    initCheckout()
  } else if (hash === '#success') {
    app.innerHTML = `${Header} ${SuccessPage}`
    updateCartCount()
    initSuccess()
  } else {
    app.innerHTML = `${Header} ${Home}`
    updateCartCount()
    initHome()
    setTimeout(() => {
      document.addEventListener('click', (e) => {
        const card = (e.target as HTMLElement).closest('.product-card') as HTMLElement
        if (card && card.dataset.id) {
          window.location.hash = `#product-${card.dataset.id}`
        }
      })
    }, 500)
  }
}

window.addEventListener('hashchange', router)
router()