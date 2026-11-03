export const Home = `
<style>
@media (max-width: 768px){
  #mainHeader{ padding:12px 3% !important; gap:10px !important; }
  #desktopNav{ display:none !important; }
  #headerRight{ min-width:auto !important; gap:10px !important; }
  #searchWrap{ display:none !important; }
  #loginLink, #registerLink{ display:none !important; }
  .info-extra{ display:none !important; }
  #categoryGrid{ grid-template-columns:repeat(4,1fr) !important; gap:8px !important; }
  #products{ grid-template-columns:repeat(2,1fr) !important; }
  .two-banners{ grid-template-columns:1fr !important; }
  .features-grid{ grid-template-columns:repeat(2,1fr) !important; }
  .footer-grid{ grid-template-columns:1fr !important; gap:18px !important; }
  .hero-wrap{ flex-direction:column !important; }
  .hero-left{ min-width:100% !important; padding:28px 4% !important; }
  .hero-right{ min-width:100% !important; height:300px !important; }
}
</style>

<div style="font-family:Inter,sans-serif; background:#f8f9fb; color:#111; overflow-x:hidden;">
<div style="background:#0f172a; color:#e2e8f0; display:flex; justify-content:space-between; padding:8px 4%; font-size:11px;">
  <div style="display:flex; gap:24px;">
    <span>🚚 Free Delivery Across Cameroon</span>
    <span class="info-extra">🛡️ Secure Payment</span>
    <span class="info-extra">🎧 24/7 Support</span>
  </div>
  <span style="opacity:.8;">Welcome to AYRA!</span>
</div>

<div id="mainHeader" style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; justify-content:space-between; padding:14px 4%; gap:20px; position:sticky; top:0; z-index:40;">
  <div style="font-weight:900; font-size:18px; letter-spacing:3px; min-width:90px;">Λ AYRA</div>
  <nav id="desktopNav" style="display:flex; align-items:center; gap:32px; font-size:13px; font-weight:600; flex:1; justify-content:center;">
    <a href="#" style="color:#111; text-decoration:none; border-bottom:2px solid #111; padding-bottom:3px;">Home</a>
    <a href="#" id="nav-market" style="color:#6b7280; text-decoration:none; cursor:pointer;">Marketplace</a>
    <a href="#dashboard" id="nav-sell" style="color:#6b7280; text-decoration:none; display:none;">Sell a Product</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">Affiliate</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">About</a>
  </nav>
  <div id="headerRight" style="display:flex; align-items:center; gap:14px; min-width:360px; justify-content:flex-end;">
    <div id="searchWrap" style="display:flex; height:36px; width:220px;">
      <input id="searchInput" placeholder="Search..." style="flex:1; border:1px solid #e5e7eb; border-right:0; border-radius:6px 0 0 6px; padding:0 10px; font-size:12px; outline:none;" />
      <button id="searchBtn" style="width:36px; border:1px solid #111; background:#111; color:#fff; border-radius:0 6px 6px 0; cursor:pointer;">⌕</button>
    </div>
    <a href="#login" id="loginLink" style="font-size:12px; font-weight:600; text-decoration:none; color:#111;">LOGIN</a>
    <a href="#register" id="registerLink" style="font-size:11px; font-weight:700; text-decoration:none; color:#111; border:1px solid #111; padding:6px 14px; border-radius:4px;">REGISTER</a>
    <span id="userBox" style="display:none; font-size:12px; font-weight:700;"></span>
    <a href="#cart" style="font-size:12px; font-weight:700; text-decoration:none; color:#111; display:flex; gap:4px;">CART <span id="cart-count">0</span></a>
    <div id="hamburgerBtn" style="width:38px; height:38px; display:flex; flex-direction:column; justify-content:center; gap:5px; cursor:pointer; padding:6px 7px; border:1.8px solid #111; border-radius:6px; background:#fff;">
      <span style="display:block; height:3.5px; background:#111; border-radius:2px; width:100%;"></span>
      <span style="display:block; height:3.5px; background:#111; border-radius:2px; width:100%;"></span>
      <span style="display:block; height:3.5px; background:#111; border-radius:2px; width:100%;"></span>
    </div>
  </div>
</div>

<div style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; gap:8px; padding:10px 4%; font-size:12px; font-weight:600; overflow-x:auto; white-space:nowrap;">
  <div style="background:#111; color:#fff; padding:7px 12px; border-radius:4px;">☰ All Categories ▾</div>
  <div style="display:flex; gap:6px; margin-left:8px;">
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Electronics</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Fashion</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Beauty</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Phones</span>
  </div>
</div>

<div class="hero-wrap" style="background:#fff; display:flex; flex-wrap:wrap; min-height:420px;">
  <div class="hero-left" style="flex:1; min-width:340px; padding:56px 4%;">
    <h1 style="font-size:44px; font-weight:900; line-height:.95; margin:0;">Shop Smart.<br><span style="font-weight:400;">Live Better.</span></h1>
    <p style="color:#6b7280; font-size:14px; max-width:380px; line-height:1.6; margin:16px 0 24px;">Discover amazing products at the best prices from trusted sellers.</p>
    <a href="#products" style="background:#111; color:#fff; padding:12px 24px; border-radius:4px; font-weight:700; font-size:12px; text-decoration:none; display:inline-block;">SHOP NOW →</a>
  </div>
  <div class="hero-right" style="flex:1.2; min-width:360px; background:#f3f4f6;"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800" style="width:100%; height:100%; object-fit:cover;" /></div>
</div>

<div style="background:#fff; padding:28px 4% 18px; margin-top:1px;">
  <div style="display:flex; justify-content:space-between; margin-bottom:16px;"><h2 style="font-size:15px; font-weight:800; margin:0;">SHOP BY CATEGORY</h2><a id="viewAllCats" style="font-size:11px; font-weight:700; color:#6b7280; cursor:pointer;">VIEW ALL →</a></div>
  <div id="categoryGrid" style="display:grid; grid-template-columns:repeat(8,1fr); gap:12px;"></div>
</div>

<div style="background:#fff; padding:24px 4% 32px; border-top:1px solid #f3f4f6;">
  <div style="display:flex; justify-content:space-between; margin-bottom:16px;"><h2 style="font-size:15px; font-weight:800; margin:0;">FEATURED PRODUCTS</h2><span id="viewAllBtn" style="font-size:11px; font-weight:700; color:#6b7280; cursor:pointer;">VIEW ALL →</span></div>
  <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:16px;"></div>
</div>

<div class="two-banners" style="display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:0 4% 14px; background:#fff;">
  <div style="background:#111; border-radius:8px; padding:18px; display:flex; justify-content:space-between; align-items:center; color:#fff;"><div><div style="font-weight:800; font-size:14px;">Secure & Reliable</div><div style="font-size:11px; opacity:.7; margin:4px 0 8px;">Your payments and data are always protected.</div></div><div style="font-size:40px;">💳</div></div>
  <div style="background:#f3f4f6; border:1px solid #e5e7eb; border-radius:8px; padding:18px; display:flex; justify-content:space-between; align-items:center;"><div><div style="font-weight:800; font-size:14px;">🚚 Fast Delivery</div><div style="font-size:11px; opacity:.7;">Get your order anywhere in Cameroon.</div></div><div style="font-size:40px;">📦</div></div>
</div>

<div class="features-grid" style="background:#fff; margin:0 4%; border:1px solid #e5e7eb; border-left:0; border-right:0; display:grid; grid-template-columns:repeat(4,1fr); font-size:11px;">
  <div style="display:flex; gap:10px; align-items:center; padding:14px;"><span>🎧</span><div><div style="font-weight:800;">24/7 Support</div><div style="opacity:.6;">Always here to help</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>🔄</span><div><div style="font-weight:800;">Easy Returns</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>✔️</span><div><div style="font-weight:800;">Trusted Sellers</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #e5e7eb;"><span>🎁</span><div><div style="font-weight:800;">Special Offers</div></div></div>
</div>

<div class="footer-grid" style="background:#111; color:#fff; padding:32px 4% 18px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1.5fr; gap:24px; font-size:12px; margin-top:20px;">
  <div><div style="font-weight:900; letter-spacing:3px; font-size:16px;">Λ AYRA</div><div style="opacity:.6; margin:10px 0;">Your trusted marketplace in Cameroon and beyond.</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Quick Links</div><div style="opacity:.6; line-height:2;">Home<br>Marketplace<br>Sell a Product<br>Affiliate<br>About</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Support</div><div style="opacity:.6; line-height:2;">FAQs<br>Shipping<br>Returns<br>Privacy Policy</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Contact Us</div><div style="opacity:.6; line-height:2;">📞 +237 6 12 34 56 78<br>✉️ support@ayra.cm<br>📍 Yaoundé, Cameroon</div></div>
</div>
</div>

<div id="drawerOverlay" style="position:fixed; top:0; left:0; width:100%; height:100vh; background:rgba(0,0,0,.45); z-index:9998; display:none;"></div>
<div id="ayraDrawer" style="position:fixed; top:0; right:-100%; width:330px; max-width:85vw; height:100vh; background:#fff; z-index:9999; box-shadow:-12px 0 40px rgba(0,0,0,.25); transition:right 0.32s ease; display:flex; flex-direction:column; font-family:Inter,sans-serif; overflow-y:auto;">
  <div style="background:#0f172a; color:#fff; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; position:sticky; top:0;">
    <div style="font-weight:900; letter-spacing:1px;">Λ AYRA</div>
    <div id="closeDrawer" style="font-size:18px; cursor:pointer; background:#fff; color:#0f172a; width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900;">✕</div>
  </div>
  <div style="padding:16px;">
    <div style="background:#f1f5f9; padding:12px; border-radius:10px; display:flex; gap:10px; align-items:center; margin-bottom:14px;">
      <div style="width:42px; height:42px; background:#0f172a; border-radius:50%; color:#fff; display:flex; align-items:center; justify-content:center; font-weight:900;">A</div>
      <div><div id="drawerUserName" style="font-weight:800; font-size:14px;">Guest</div><div style="font-size:11px; color:#64748b;">Affiliate Member</div></div>
    </div>
    <div style="display:flex; flex-direction:column; gap:4px;">
      <div class="drawer-link" data-go="home" style="padding:12px 14px; border-radius:8px; cursor:pointer; display:flex; gap:12px; font-size:14px; font-weight:600; background:#f8fafc;">🏠 Home</div>
      <div class="drawer-link" data-go="profile" style="padding:12px 14px; border-radius:8px; cursor:pointer; display:flex; gap:12px; font-size:14px; font-weight:600;">👤 Affiliate Profile</div>
      <div class="drawer-link" data-go="dashboard" style="padding:12px 14px; border-radius:8px; cursor:pointer; display:flex; gap:12px; font-size:14px; font-weight:600;">📊 Dashboard</div>
      <div class="drawer-link" data-go="wallet" style="padding:12px 14px; border-radius:8px; cursor:pointer; display:flex; gap:12px; font-size:14px; font-weight:600;">💰 Wallet & Payouts</div>
      <div class="drawer-link" data-go="settings" style="padding:12px 14px; border-radius:8px; cursor:pointer; display:flex; gap:12px; font-size:14px; font-weight:600;">⚙️ Settings</div>
    </div>
    <div style="margin-top:18px; padding:14px; background:#fffbeb; border:1.8px dashed #facc15; border-radius:12px;">
      <div style="font-weight:900; font-size:13px; margin-bottom:8px;">🔗 Your Affiliate Link</div>
      <div id="affLinkText" style="font-size:11px; background:#fff; padding:10px; border-radius:8px; border:1px solid #e2e8f0; word-break:break-all;">https://ayra-store.vercel.app/?ref=guest</div>
      <button id="copyAffLink" style="margin-top:10px; width:100%; background:#0f172a; color:#fff; border:none; padding:10px; border-radius:8px; font-weight:800; cursor:pointer; font-size:12px;">Copy Affiliate Link</button>
    </div>
    <button id="drawerLogout" style="margin-top:18px; width:100%; background:#111; color:#fff; border:none; padding:12px; border-radius:8px; font-weight:800; cursor:pointer; font-size:13px; display:none;">Log Out</button>
    <a href="#login" id="drawerLogin" style="margin-top:18px; width:100%; background:#111; color:#fff; border:none; padding:12px; border-radius:8px; font-weight:800; cursor:pointer; font-size:13px; display:block; text-align:center; text-decoration:none;">LOGIN</a>
  </div>
</div>
`

let cachedProducts: any[] = []

export function initHome(){
  const catEl = document.getElementById('categoryGrid')!
  const prodEl = document.getElementById('products')!
  const cartCount = document.getElementById('cart-count')!
  const user = JSON.parse(localStorage.getItem('ayra_user')||'null')

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

  const hamb = document.getElementById('hamburgerBtn')
  const drawer = document.getElementById('ayraDrawer')
  const overlay = document.getElementById('drawerOverlay')
  const close = document.getElementById('closeDrawer')
  const drawerName = document.getElementById('drawerUserName')
  const affText = document.getElementById('affLinkText')
  const logoutBtn = document.getElementById('drawerLogout')
  const loginBtnDrawer = document.getElementById('drawerLogin')

  function openDrawer(){ if(drawer) drawer.style.right='0'; if(overlay) overlay.style.display='block'; }
  function closeDrawer(){ if(drawer) drawer.style.right='-100%'; if(overlay) overlay.style.display='none'; }

  hamb?.addEventListener('click', openDrawer)
  close?.addEventListener('click', closeDrawer)
  overlay?.addEventListener('click', closeDrawer)

  if(user){
    if(drawerName) drawerName.textContent = user.name || user.email || 'fonsmithmondoza'
    if(affText){
      const ref = (user.name || user.email || 'fonsmithmondoza').toString().replace(/\s+/g,'').toLowerCase()
      affText.textContent = 'https://ayra-store.vercel.app/?ref=' + ref
    }
    if(logoutBtn) logoutBtn.style.display='block'
    if(loginBtnDrawer) loginBtnDrawer.style.display='none'
  }else{
    if(drawerName) drawerName.textContent = 'Guest'
    if(logoutBtn) logoutBtn.style.display='none'
    if(loginBtnDrawer) loginBtnDrawer.style.display='block'
  }

  document.getElementById('copyAffLink')?.addEventListener('click', ()=>{
    const txt = document.getElementById('affLinkText')?.textContent || ''
    navigator.clipboard.writeText(txt)
    alert('Affiliate link copied!')
  })

  document.getElementById('drawerLogout')?.addEventListener('click', ()=>{
    localStorage.removeItem('ayra_user')
    location.reload()
  })

  // FIXED: NOW OPENS AFFILIATE PROFILE
  document.querySelectorAll('.drawer-link').forEach(el=>{
    el.addEventListener('click', ()=>{
      const go = (el as HTMLElement).getAttribute('data-go')
      closeDrawer()
      if(go==='home'){ location.hash=''; window.scrollTo({top:0, behavior:'smooth'}) }
      if(go==='dashboard') location.hash='#dashboard'
      if(go==='profile') location.hash='#affiliate-profile'
      if(go==='wallet') location.hash='#affiliate-profile'
      if(go==='settings') location.hash='#affiliate-profile'
    })
  })
}