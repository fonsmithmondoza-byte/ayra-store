export const Header = `
  <header style="position:sticky; top:0; z-index:50; background:white; border-bottom:1px solid #070000;">
    <div style="background:#111; color:white; text-align:center; padding:6px; font-size:11px; letter-spacing:1px;">Free shipping on orders over $75 • Earth Day Edit: Thoughtfully made, responsibly sourced</div>
    <div style="display:flex; justify-content:space-between; align-items:center; padding:16px 4%;">
      <a href="#" id="logo" style="font-weight:700; letter-spacing:4px; font-size:20px; text-decoration:none; color:black;">Λ AYRA</a>
      <nav style="display:flex; gap:20px; font-size:13px; letter-spacing:1px;">
        <a href="#" class="nav-link" data-cat="Women" style="text-decoration:none; color:black;">Women</a>
        <a href="#" class="nav-link" data-cat="Men" style="text-decoration:none; color:black;">Men</a>
        <a href="#" class="nav-link" data-cat="Home" style="text-decoration:none; color:black;">Home</a>
        <a href="#" class="nav-link" data-cat="Bags" style="text-decoration:none; color:black;">Bags</a>
      </nav>
      <div style="display:flex; gap:16px; align-items:center;">
        <a href="#cart" style="position:relative; text-decoration:none; color:black; font-size:13px; border:1px solid black; padding:6px 14px; border-radius:20px;">
          CART <span id="cart-count" style="background:black; color:white; border-radius:50%; padding:2px 6px; font-size:10px; margin-left:4px;">0</span>
        </a>
      </div>
    </div>
  </header>
`

export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const el = document.getElementById('cart-count')
  if (el) {
    el.textContent = cart.length.toString()
    el.style.display = cart.length === 0 ? 'none' : 'inline-block'
  }
}