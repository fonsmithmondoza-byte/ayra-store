export const Header = `
<header style="position:sticky; top:0; z-index:50; background:white; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center; padding:14px 4%;">
  <a href="#" style="font-weight:800; letter-spacing:4px; font-size:18px; text-decoration:none; color:black;">Λ AYRA</a>
  <nav style="display:flex; gap:18px; align-items:center; font-size:11px; letter-spacing:1px;">
    <a href="#login" style="text-decoration:none; color:black;">LOGIN</a>
    <a href="#register" style="text-decoration:none; color:black; border:1px solid black; padding:6px 12px;">REGISTER</a>
    <a href="#dashboard" style="text-decoration:none; color:black;">DASHBOARD</a>
    <a href="#cart" style="text-decoration:none; color:black; font-weight:700;">CART <span id="cart-count">0</span></a>
  </nav>
</header>
`

export function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem('cart')||'[]')
  const count = cart.reduce((s:any,i:any)=>s+i.qty,0)
  const el = document.getElementById('cart-count')
  if(el) el.textContent = count
  const user = JSON.parse(localStorage.getItem('ayra_user')||'null')
  if(user){
    const loginLink = document.querySelector('a[href="#login"]') as HTMLElement
    if(loginLink) loginLink.textContent = user.name.toUpperCase()
  }
}