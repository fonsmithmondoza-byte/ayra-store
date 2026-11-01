export const Home = `
<div style="font-family:Inter,sans-serif; background:#f8f9fb; color:#111;">

<!-- 1. INFO BAR -->
<div style="background:#0f172a; color:#e2e8f0; display:flex; justify-content:space-between; padding:8px 4%; font-size:11px; letter-spacing:.2px;">
  <div style="display:flex; gap:24px;">
    <span>🚚 Free Delivery Across Cameroon</span>
    <span>🛡️ Secure Payment</span>
    <span>🎧 24/7 Support</span>
  </div>
  <span style="opacity:.8;">Welcome to AYRA!</span>
</div>

<!-- 2. MAIN HEADER - SINGLE PROFESSIONAL CENTERED -->
<div style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; justify-content:space-between; padding:14px 4%; gap:20px; position:sticky; top:0; z-index:40;">
  <div style="font-weight:900; font-size:18px; letter-spacing:3px; min-width:90px;">Λ AYRA</div>
  
  <nav style="display:flex; align-items:center; gap:32px; font-size:13px; font-weight:600; letter-spacing:.3px; flex:1; justify-content:center;">
    <a href="#" style="color:#111; text-decoration:none; border-bottom:2px solid #111; padding-bottom:3px;">Home</a>
    <a href="#" id="nav-market" style="color:#6b7280; text-decoration:none; cursor:pointer;">Marketplace</a>
    <a href="#dashboard" id="nav-sell" style="color:#6b7280; text-decoration:none; display:none;">Sell a Product</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">Affiliate</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">About</a>
  </nav>

  <div style="display:flex; align-items:center; gap:14px; min-width:360px; justify-content:flex-end;">
    <div style="display:flex; height:36px; width:220px;">
      <input id="searchInput" placeholder="Search..." style="flex:1; border:1px solid #e5e7eb; border-right:0; border-radius:6px 0 0 6px; padding:0 10px; font-size:12px; outline:none;" />
      <button id="searchBtn" style="width:36px; border:1px solid #111; background:#111; color:#fff; border-radius:0 6px 6px 0; cursor:pointer;">⌕</button>
    </div>
    <a href="#login" id="loginLink" style="font-size:12px; font-weight:600; text-decoration:none; color:#111;">LOGIN</a>
    <a href="#register" id="registerLink" style="font-size:11px; font-weight:700; text-decoration:none; color:#111; border:1px solid #111; padding:6px 14px; border-radius:4px;">REGISTER</a>
    <span id="userBox" style="display:none; font-size:12px; font-weight:700;"></span>
    <a href="#cart" style="font-size:12px; font-weight:700; text-decoration:none; color:#111; display:flex; gap:4px;">CART <span id="cart-count">0</span></a>
  </div>
</div>

<!-- 3. CATEGORY BAR -->
<div style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; gap:8px; padding:10px 4%; font-size:12px; font-weight:600; color:#374151;">
  <div style="background:#111; color:#fff; padding:7px 12px; border-radius:4px; display:flex; gap:6px;">☰ All Categories ▾</div>
  <div style="display:flex; gap:6px; margin-left:8px;">
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Electronics</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Fashion</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Beauty</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Phones</span>
  </div>
</div>

<!-- 4. HERO -->
<div style="background:#fff; display:flex; flex-wrap:wrap; min-height:420px;">
  <div style="flex:1; min-width:340px; padding:56px 4%;">
    <h1 style="font-size:44px; font-weight:900; line-height:.95; margin:0; letter-spacing:-1px;">Shop Smart.<br><span style="font-weight:400;">Live Better.</span></h1>
    <p style="color:#6b7280; font-size:14px; max-width:380px; line-height:1.6; margin:16px 0 24px;">Discover amazing products at the best prices from trusted sellers around the world.</p>
    <a href="#products" style="background:#111; color:#fff; padding:12px 24px; border-radius:4px; font-weight:700; font-size:12px; text-decoration:none; display:inline-block;">SHOP NOW →</a>
  </div>
  <div style="flex:1.2; min-width:360px; background:#f3f4f6;">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800" style="width:100%; height:100%; object-fit:cover;" />
  </div>
</div>

<!-- 5. SHOP BY CATEGORY -->
<div style="background:#fff; padding:28px 4% 18px; margin-top:1px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
    <h2 style="font-size:15px; font-weight:800; margin:0; letter-spacing:.5px;">SHOP BY CATEGORY</h2>
    <a style="font-size:11px; font-weight:700; color:#6b7280; cursor:pointer;" id="viewAllCats">VIEW ALL →</a>
  </div>
  <div id="categoryGrid" style="display:grid; grid-template-columns:repeat(8,1fr); gap:12px;"></div>
</div>

<!-- 6. FEATURED PRODUCTS -->
<div style="background:#fff; padding:24px 4% 32px; border-top:1px solid #f3f4f6;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
    <h2 style="font-size:15px; font-weight:800; margin:0; letter-spacing:.5px;">FEATURED PRODUCTS</h2>
    <span id="viewAllBtn" style="font-size:11px; font-weight:700; color:#6b7280; cursor:pointer;">VIEW ALL →</span>
  </div>
  <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:16px;"></div>
</div>

<!-- 7. TWO BANNERS -->
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:0 4% 14px; background:#fff;">
  <div style="background:#111; border-radius:8px; padding:18px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
    <div><div style="font-weight:800; font-size:14px;">Secure & Reliable</div><div style="font-size:11px; opacity:.7; margin:4px 0 8px;">Your payments and data are always protected.</div><div style="background:#fff; color:#000; padding:6px 12px; border-radius:4px; font-weight:800; font-size:11px; display:inline-block;">Shop with Confidence</div></div><div style="font-size:40px;">💳</div>
  </div>
  <div style="background:#f3f4f6; border:1px solid #e5e7eb; border-radius:8px; padding:18px; display:flex; justify-content:space-between; align-items:center;">
    <div><div style="font-weight:800; font-size:14px;">🚚 Fast Delivery</div><div style="font-size:11px; opacity:.7; margin:4px 0 8px;">Get your order anywhere in Cameroon.</div><div style="background:#111; color:#fff; padding:6px 12px; border-radius:4px; font-weight:800; font-size:11px; display:inline-block;">Order Now</div></div><div style="font-size:40px;">📦</div>
  </div>
</div>

<!-- 8. FEATURES -->
<div style="background:#fff; margin:0 4%; border:1px solid #e5e7eb; border-left:0; border-right:0; display:grid; grid-template-columns:repeat(4,1fr); font-size:11px;">
  <div style="display:flex; gap:10px; align-items:center; padding:14px;"><span>🎧</span><div><div style="font-weight:800;">24/7 Support</div><div style="opacity:.6;">Always here to help</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>🔄</span><div><div style="font-weight:800;">Easy Returns</div><div style="opacity:.6;">Hassle-free returns</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>✔️</span><div><div style="font-weight:800;">Trusted Sellers</div><div style="opacity:.6;">Shop with confidence</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>🎁</span><div><div style="font-weight:800;">Special Offers</div><div style="opacity:.6;">Save more every day</div></div></div>
</div>

<!-- FOOTER WITH CONTACT -->
<div style="background:#111; color:#fff; padding:32px 4% 18px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1.5fr; gap:24px; font-size:12px; margin-top:20px;">
  <div><div style="font-weight:900; letter-spacing:3px; font-size:16px;">Λ AYRA</div><div style="opacity:.6; margin:10px 0;">Your trusted marketplace in Cameroon and beyond.</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Quick Links</div><div style="opacity:.6; line-height:2;">Home<br>Marketplace<br>Sell a Product<br>Affiliate<br>About</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Support</div><div style="opacity:.6; line-height:2;">FAQs<br>Shipping<br>Returns<br>Privacy Policy</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Contact Us</div><div style="opacity:.6; line-height:2;">📞 +237 6 12 34 56 78<br>✉️ support@ayra.cm<br>📍 Yaoundé, Cameroon</div></div>
</div>
<div style="background:#111; border-top:1px solid #222; color:#666; display:flex; justify-content:space-between; padding:12px 4%; font-size:11px;">
  <span>© 2025 AYRA. All rights reserved.</span><span>Designed in Cameroon 🇨🇲</span>
</div>

</div>
`

let cachedProducts: any[] = []

export function initHome(){
  const catEl = document.getElementById('categoryGrid')!
  const prodEl = document.getElementById('products')!
  const cartCount = document.getElementById('cart-count')!
  const user = JSON.parse(localStorage.getItem('ayra_user')||'null')

  // Show/hide auth based on login - DASHBOARD ONLY WHEN LOGGED IN
  const loginLink = document.getElementById('loginLink')
  const registerLink = document.getElementById('registerLink')
  const userBox = document.getElementById('userBox')
  const navSell = document.getElementById('nav-sell')

  if(user){
    if(loginLink) loginLink.style.display='none'
    if(registerLink) registerLink.style.display='none'
    if(userBox){ userBox.style.display='inline'; userBox.textContent = 'Hi, ' + (user.name||user.email) }
    if(navSell) navSell.style.display='inline'
  }else{
    if(navSell) navSell.style.display='none'
  }

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    cartCount.textContent = cart.reduce((s:any,i:any)=>s+i.qty,0)
  }
  updateCart()

  const cats=[
    {n:'Electronics', img:'https://images.unsplash.com/photo-1498049794561-7780e7231666?w=200'},
    {n:'Beauty', img:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200'},
    {n:'Phones', img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200'},
    {n:'Fashion', img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200'},
    {n:'Home', img:'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200'},
    {n:'Books', img:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200'},
    {n:'Sports', img:'https://images.unsplash.com/photo-1579952363873-27f3bfad9c0d?w=200'},
    {n:'Auto', img:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200'},
  ]
  catEl.innerHTML=cats.map(c=>`
    <div class="cat-card" data-cat="${c.n}" style="border:1px solid #e5e7eb; border-radius:8px; padding:10px; text-align:center; background:#fff; cursor:pointer;">
      <img src="${c.img}" style="height:42px; object-fit:contain;" />
      <div style="font-size:10px; font-weight:700; margin-top:8px;">${c.n}</div>
    </div>
  `).join('')

  function renderProducts(list:any[]){
    if(!list.length){ prodEl.innerHTML='<p style="opacity:.6; font-size:13px;">No products</p>'; return }
    prodEl.innerHTML=list.map((p:any)=>`
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
        <div style="height:170px; background:#f9fafb; display:flex; align-items:center; justify-content:center;"><img src="${p.image}" style="width:85%; height:85%; object-fit:contain;" /></div>
        <div style="padding:12px;">
          <div style="font-size:12px; font-weight:600; height:32px; overflow:hidden;">${p.name}</div>
          <div style="font-weight:800; font-size:14px; margin:6px 0;">${Number(p.price).toLocaleString()} FCFA</div>
          <div style="font-size:11px; color:#6b7280;">★ ${p.rating||'4.6'} (${p.reviews||60})</div>
          <button class="add-cart" data-id="${p.id}" style="margin-top:10px; width:100%; background:#111; color:#fff; border:none; padding:8px; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;">ADD TO CART</button>
        </div>
      </div>
    `).join('')
  }

  async function loadProducts(filter?:string){
    prodEl.innerHTML = Array(8).fill(0).map(()=>`<div style="height:220px; background:#f3f4f6; border-radius:8px;"></div>`).join('')
    try{
      const r = await fetch('/products.json')
      const products = await r.json()
      cachedProducts = products.map((p:any)=>({...p, price: p.price < 5000 ? p.price*650 : p.price}))
      let filtered = cachedProducts
      if(filter) filtered = cachedProducts.filter((p:any)=> p.name.toLowerCase().includes(filter.toLowerCase()) || p.category.toLowerCase().includes(filter.toLowerCase()))
      renderProducts(filtered)
    }catch(e){ prodEl.innerHTML='Failed to load products' }
  }
  loadProducts()

  // events
  catEl.addEventListener('click',(e)=>{
    const c = (e.target as HTMLElement).closest('.cat-card') as HTMLElement
    if(c?.dataset.cat) loadProducts(c.dataset.cat)
  })
  document.getElementById('viewAllCats')?.addEventListener('click',()=>loadProducts())
  document.getElementById('viewAllBtn')?.addEventListener('click',()=>loadProducts())
  document.getElementById('nav-market')?.addEventListener('click',()=>loadProducts())
  document.getElementById('searchBtn')?.addEventListener('click',()=>{
    const q = (document.getElementById('searchInput') as HTMLInputElement).value
    loadProducts(q)
  })
  prodEl.addEventListener('click',(e)=>{
    const btn = (e.target as HTMLElement).closest('.add-cart') as HTMLElement
    if(btn){
      const id = btn.getAttribute('data-id')
      const cart = JSON.parse(localStorage.getItem('cart')||'[]')
      const prod = cachedProducts.find((x:any)=>x.id==id)
      const ex = cart.find((x:any)=>x.id==id)
      if(ex) ex.qty++; else cart.push({...prod,qty:1})
      localStorage.setItem('cart',JSON.stringify(cart))
      updateCart()
      alert('Added to cart')
    }
  })
}