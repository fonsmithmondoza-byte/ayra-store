import './style.css'
import { Home, initHome } from './pages/Home.ts'

const app = document.getElementById('app')!
app.innerHTML = Home
initHome()