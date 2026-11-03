import './style.css'
import { Home, initHome } from './pages/Home.ts'
import { LoginPage, RegisterPage, initAuth } from './pages/Auth.ts'

function router(){
  const app = document.getElementById('app')!
  const hash = location.hash
  if(hash === '#login'){
    app.innerHTML = LoginPage
    initAuth()
  } else if(hash === '#register'){
    app.innerHTML = RegisterPage
    initAuth()
  } else {
    app.innerHTML = Home
    initHome()
  }
}
window.addEventListener('hashchange', router)
window.addEventListener('load', router)