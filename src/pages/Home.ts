export const Home = `
<div style="font-family:Inter,system-ui,sans-serif; background:#f5f7fb;">

<!-- TOP BAR -->
<div style="background:#0a1f44; color:white; display:flex; justify-content:space-between; align-items:center; padding:8px 4%; font-size:11px; letter-spacing:.2px; flex-wrap:wrap; gap:8px;">
  <div style="display:flex; gap:24px; align-items:center;">
    <span style="display:flex; align-items:center; gap:6px;">🚚 Free Delivery Across Cameroon</span>
    <span style="display:flex; align-items:center; gap:6px;">🛡️ Secure Payment</span>
    <span style="display:flex; align-items:center; gap:6px;">🎧 24/7 Support</span>
  </div>
  <div style="opacity:.9;">Welcome to JARVIS DIGITAL!</div>
</div>

<!-- HEADER -->
<div style="background:white; display:flex; align-items:center; justify-content:space-between; padding:12px 4%; gap:16px; flex-wrap:wrap;">
  <div style="display:flex; align-items:center; gap:10px;">
    <div style="font-size:32px;">🛒</div>
    <div>
      <div style="font-weight:900; font-size:22px; line-height:1; color:#0a1f44; letter-spacing:-.5px;">JARVIS DIGITAL</div>
      <div style="font-size:11px; font-weight:700; letter-spacing:.5px; color:#0a1f44;">Connect. Promote. Sell.</div>
    </div>
  </div>
  <div style="flex:1; max-width:520px; display:flex; margin:0 12px;">
    <input id="searchInput" placeholder="Search for products..." style="flex:1; padding:12px 14px; border:1px solid #d1d5db; border-right:none; border-radius:8px 0 0 8px; outline:none; font-size:13px;" />
    <button id="searchBtn" style="background:#2563eb; color:white; border:none; padding:0 16px; border-radius:0 8px 8px 0; cursor:pointer;">🔍</button>
  </div>
  <div style="display:flex; align-items:center; gap:18px; font-size:13px;">
    <a href="#login" style="text-decoration:none; color:#0a1f44; display:flex; align-items:center; gap:6px; font-weight:600;">👤 Login / Register</a>
    <a href="#cart" style="text-decoration:none; color:#0a1f44; display:flex; align-items:center; gap:4px; font-weight:600; position:relative;">🛒 Cart <span id="cart-count" style="position:absolute; top:-8px; right:-10px; background:#ef4444; color:white; font-size:10px; padding:1px 5px; border-radius:10px;">0</span></a>
    <span style="cursor:pointer;">🌙</span>
  </div>
</div>

<!-- NAV -->
<div style="background:#0e3a8a; color:white; display:flex; align-items:center; padding:0 4%; gap:22px; font-size:13px; font-weight:600; flex-wrap:wrap;">
  <div style="background:#facc15; color:#111; padding:10px 14px; border-radius:6px; display:flex; align-items:center; gap:6px; margin:8px 0; cursor:pointer;">☰ All Categories ▾</div>
  <a href="#" style="color:#facc15; text-decoration:none; display:flex; gap:6px; align-items:center;">🏠 Home</a>
  <a href="#" style="color:white; text-decoration:none; display:flex; gap:6px; align-items:center; opacity:.9;">👜 Marketplace</a>
  <a href="#dashboard" style="color:white; text-decoration:none; display:flex; gap:6px; align-items:center; opacity:.9;">🏷️ Sell a Product</a>
  <a href="#" style="color:white; text-decoration:none; display:flex; gap:6px; align-items:center; opacity:.9;">🤝 Affiliate</a>
  <span style="opacity:.3;">|</span>
  <a href="#" style="color:white; text-decoration:none; opacity:.8;">About</a>
  <a href="#" style="color:white; text-decoration:none; opacity:.8;">Contact</a>
</div>

<!-- HERO -->
<div style="position:relative; background:white; margin:0; overflow:hidden;">
  <div style="display:flex; min-height:380px; flex-wrap:wrap;">
    <div style="flex:1; min-width:320px; padding:46px 4% 30px; display:flex; flex-direction:column; justify-content:center; background:linear-gradient(90deg, white 0%, #f8fafc 100%);">
      <h1 style="font-size:clamp(36px,4.5vw,52px); font-weight:900; line-height:.95; color:#0a1f44; margin:0;">Shop Smart.<br><span style="color:#2563eb;">Live Better.</span></h1>
      <p style="margin:14px 0 22px; color:#334155; font-size:14.5px; max-width:420px; line-height:1.5;">Discover amazing products at the best prices from trusted sellers around the world.</p>
      <button id="shopNowBtn" style="background:#facc15; color:#111; border:none; padding:12px 22px; border-radius:24px; font-weight:800; font-size:14px; cursor:pointer; width:fit-content; display:flex; align-items:center; gap:8px;">Shop Now →</button>
      <div style="display:flex; gap:8px; margin-top:22px;"><span style="width:26px; height:8px; background:white; border:1px solid #ddd; border-radius:10px; background:#0a1f44;"></span><span style="width:8px; height:8px; background:#cbd5e1; border-radius:50%;"></span><span style="width:8px; height:8px; background:#cbd5e1; border-radius:50%;"></span></div>
    </div>
    <div style="flex:1.2; min-width:360px; position:relative; background:url('https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200') center/cover; min-height:380px;">
      <div style="position:absolute; right:12px; top:18px; background:#facc15; color:#111; font-weight:900; font-size:20px; padding:18px 18px; border-radius:50%; transform:rotate(6deg); text-align:center; line-height:1.1; box-shadow:0 6px 20px rgba(0,0,0,.2); width:110px; height:110px; display:flex; align-items:center; justify-content:center;">Great Deals Everyday!</div>
      <img src="https://i.ibb.co/5XyG8wK0/african-girl.png" onerror="this.style.display='none'" style="position:absolute; bottom:0; right:20%; height:100%; object-fit:contain;" />
      <!-- fallback girl using unsplash if above fails -->
      <div style="position:absolute; inset:0; display:flex; justify-content:flex-end; align-items:end; padding-right:4%;">
        <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600" style="height:94%; object-fit:contain; border-radius:0; mask-image: linear-gradient(to bottom, black 80%, transparent);" />
      </div>
    </div>
  </div>
</div>

<!-- SHOP BY CATEGORY -->
<div style="background:white; padding:18px 4% 10px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <h2 style="font-size:18px; font-weight:800; color:#0a1f44; margin:0;">Shop by Category</h2>
    <a id="viewCats" style="color:#2563eb; font-size:12px; font-weight:700; text-decoration:none; cursor:pointer;">View All Categories →</a>
  </div>
  <div id="categoryGrid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:12px;">
  </div>
</div>

<!-- FEATURED PRODUCTS -->
<div style="background:white; padding:18px 4% 10px; margin-top:8px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <h2 style="font-size:18px; font-weight:800; color:#0a1f44; margin:0; display:flex; align-items:center; gap:6px;">⭐ Featured Products</h2>
    <a id="viewAllBtn" style="color:#2563eb; font-size:12px; font-weight:700; cursor:pointer; text-decoration:none;">View All Products →</a>
  </div>
  <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:14px;">
  </div>
</div>

<!-- TWO BANNERS -->
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:18px 4%; background:white;">
  <div style="background:linear-gradient(90deg,#0e3a8a,#2563eb); color:white; border-radius:12px; padding:18px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
    <div style="display:flex; gap:12px; align-items:start;">
      <div style="background:white; color:#0e3a8a; width:42px; height:42px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:22px;">🛡️</div>
      <div><div style="font-weight:800; font-size:16px;">Secure & Reliable</div><div style="font-size:12px; opacity:.9; max-width:220px; margin:4px 0 10px;">Your payments and data are always protected.</div><button style="background:#facc15; border:none; padding:8px 14px; border-radius:20px; font-weight:800; font-size:12px; cursor:pointer;">Shop with Confidence →</button></div>
    </div>
    <div style="font-size:54px; opacity:.9;">💳🔒</div>
  </div>
  <div style="background:#facc15; color:#111; border-radius:12px; padding:18px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
    <div><div style="font-weight:900; font-size:16px; display:flex; align-items:center; gap:8px;">🚚 Fast Delivery</div><div style="font-size:12px; max-width:220px; margin:4px 0 10px; font-weight:600;">Get your order anywhere in Cameroon.</div><button style="background:#0a1f44; color:white; border:none; padding:8px 14px; border-radius:20px; font-weight:800; font-size:12px; cursor:pointer;">Order Now →</button></div>
    <div style="display:flex; align-items:center; gap:8px;"><div style="font-size:48px;">📦</div><div style="font-size:36px;">👍</div></div>
  </div>
</div>

<!-- FEATURES STRIP -->
<div style="background:white; display:grid; grid-template-columns:repeat(4,1fr); gap:1px; border-top:1px solid #e5e7eb; border-bottom:1px solid #e5e7eb; padding:0; margin:0 4%;">
  <div style="display:flex; gap:10px; align-items:center; padding:16px 12px;"><div style="font-size:22px; color:#0a1f44;">🎧</div><div><div style="font-weight:800; font-size:12px; color:#0a1f44;">24/7 Support</div><div style="font-size:11px; opacity:.7;">We are always here to help.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:16px 12px; border-left:1px solid #e5e7eb;"><div style="font-size:22px;">🔄</div><div><div style="font-weight:800; font-size:12px; color:#0a1f44;">Easy Returns</div><div style="font-size:11px; opacity:.7;">Hassle-free returns.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:16px 12px; border-left:1px solid #e5e7eb;"><div style="font-size:22px;">✔️</div><div><div style="font-weight:800; font-size:12px; color:#0a1f44;">Trusted Sellers</div><div style="font-size:11px; opacity:.7;">Shop with confidence.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:16px 12px; border-left:1px solid #e5e7eb;"><div style="font-size:22px;">🎁</div><div><div style="font-weight:800; font-size:12px; color:#0a1f44;">Special Offers</div><div style="font-size:11px; opacity:.7;">Save more every day.</div></div></div>
</div>

<!-- NEWSLETTER -->
<div style="margin:16px 4%; background:#0a1f44; color:white; border-radius:12px; display:flex; align-items:center; justify-content:space-between; padding:16px 18px; gap:12px; flex-wrap:wrap;">
  <div style="display:flex; gap:12px; align-items:center;"><div style="font-size:28px;">✉️</div><div><div style="font-weight:800; font-size:14px;">Subscribe to Our Newsletter</div><div style="font-size:11px; opacity:.8;">Get the latest products, offers and updates delivered to your inbox.</div></div></div>
  <div style="display:flex; gap:8px; align-items:center;"><input id="newsEmail" placeholder="Enter your email address" style="padding:10px 12px; border-radius:6px; border:none; min-width:220px; font-size:12px;" /><button id="subscribeBtn" style="background:#facc15; border:none; padding:10px 16px; border-radius:6px; font-weight:800; font-size:12px; cursor:pointer;">Subscribe</button><span style="font-size:24px; margin-left:8px;">✈️</span></div>
</div>

<!-- FOOTER -->
<div style="background:#081938; color:white; padding:24px 4% 12px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1fr 1fr; gap:18px; font-size:12px;">
  <div>
    <div style="display:flex; gap:8px; align-items:center; font-weight:900; font-size:18px;"><span style="font-size:26px;">🛒</span> JARVIS DIGITAL<br><span style="font-size:10px; font-weight:600; letter-spacing:.5px;">Connect. Promote. Sell.</span></div>
    <div style="opacity:.7; margin:10px 0 12px; line-height:1.5;">Your trusted online marketplace in Cameroon and beyond.</div>
    <div style="display:flex; gap:8px;"><span style="background:#1877f2; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;">f</span><span style="background:#25d366; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;">w</span><span style="background:red; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;">▶</span><span style="background:black; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center;">♪</span></div>
  </div>
  <div><div style="font-weight:800; margin-bottom:10px;">Quick Links</div><div style="opacity:.8; line-height:1.9;"><a style="color:white; text-decoration:none;">Home</a><br>Marketplace<br>Sell a Product<br>Affiliate<br>About Us<br>Contact Us</div></div>
  <div><div style="font-weight:800; margin-bottom:10px;">Customer Support</div><div style="opacity:.8; line-height:1.9;">FAQs<br>Shipping Info<br>Return Policy<br>Privacy Policy<br>Terms & Conditions</div></div>
  <div><div style="font-weight:800; margin-bottom:10px;">Contact Us</div><div style="opacity:.8; line-height:1.9;">📞 +237 6 12 34 56 78<br>✉️ support@jarvisdigital.cm<br>📍 Yaoundé, Cameroon</div></div>
  <div style="font-style:italic; color:#facc15; font-weight:700; font-size:14px;">Shop Smart,<br>Grow with JARVIS DIGITAL<br><span style="display:inline-block; width:60px; height:3px; background:#facc15; border-radius:10px; margin-top:4px;"></span></div>
</div>
<div style="background:#081938; border-top:1px solid rgba(255,255,255,.1); color:white; display:flex; justify-content:space-between; padding:10px 4%; font-size:11px; opacity:.7;">
  <div>© 2025 JARVIS DIGITAL. All rights reserved.</div>
  <div>Designed with ❤️ in Cameroon 🇨🇲</div>
</div>

</div>
`

let cachedProducts: any[] = [];

export function initHome(){
  const productsEl = document.getElementById('products')!
  const catEl = document.getElementById('categoryGrid')!

  const categories = [
    {name:'Electronics', icon:'💻', id:'electronics'},
    {name:'Beauty & Skincare', icon:'🧴', id:'beauty'},
    {name:'Phones & Accessories', icon:'📱', id:'phones'},
    {name:'Fashion Apparel', icon:'👕', id:'fashion'},
    {name:'Home & Kitchen', icon:'🍳', id:'home'},
    {name:'Books & eBooks', icon:'📚', id:'books'},
    {name:'Sports & Fitness', icon:'⚽', id:'sports'},
    {name:'Automotive', icon:'🛞', id:'auto'},
  ]

  catEl.innerHTML = categories.map(c=>`
    <div class="cat-card" data-cat="${c.id}" style="background:#f8fafc; border:1px solid #eef2ff; border-radius:12px; padding:14px 6px; text-align:center; cursor:pointer; transition:.2s;">
      <div style="font-size:32px;">${c.icon}</div>
      <div style="font-size:11px; font-weight:700; color:#0a1f44; margin-top:6px; line-height:1.2;">${c.name}</div>
    </div>
  `).join('')

  function renderProducts(products:any[]){
    if(!products.length){ productsEl.innerHTML = "<p style='opacity:.6; font-size:13px;'>No products found</p>"; return }
    productsEl.innerHTML = products.map(p=>`
      <div class="product-card" data-id="${p.id}" style="background:white; border:1px solid #eef2ff; border-radius:12px; overflow:hidden; cursor:pointer; display:flex; flex-direction:column;">
        <div style="background:#f8fafc; aspect-ratio:1/1; display:flex; align-items:center; justify-content:center; overflow:hidden;">
          <img src="${p.image}" style="width:90%; height:90%; object-fit:contain;" />
        </div>
        <div style="padding:10px 10px 12px;">
          <div style="font-size:12px; font-weight:600; color:#0a1f44; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
          <div style="font-weight:900; color:#2563eb; font-size:14px; margin:4px 0;">${p.price.toLocaleString()} FCFA</div>
          <div style="display:flex; align-items:center; gap:4px; font-size:11px; color:#334155;"><span style="color:#f59e0b;">★</span> ${p.rating||'4.6'} (${p.reviews||'60'})</div>
          <button class="add-cart-btn" data-id="${p.id}" style="margin-top:8px; width:100%; background:#2563eb; color:white; border:none; padding:8px; border-radius:6px; font-weight:700; font-size:12px; cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px;">🛒 Add to Cart</button>
        </div>
      </div>
    `).join('')
  }

  async function loadProducts(cat?:string){
    productsEl.innerHTML = Array(5).fill(0).map(()=>`<div style="background:white; border-radius:12px; height:220px; border:1px solid #eef2ff;"></div>`).join('')
    try{
      let products:any[]=[]
      try{
        const r=await fetch('/api/products')
        if(r.ok) products=await r.json()
      }catch{}
      if(!products.length){
        const r=await fetch('/products.json')
        if(r.ok) products=await r.json()
      }
      // normalize price to FCFA display
      products = products.map((p:any)=>({...p, price: p.price < 5000 ? p.price*650 : p.price, rating: p.rating|| (4 + Math.random()).toFixed(1), reviews: p.reviews|| Math.floor(40+Math.random()*100)}))
      cachedProducts=products
      let filtered=products
      if(cat) filtered=products.filter((p:any)=> (p.category||'').toLowerCase().includes(cat.toLowerCase()))
      renderProducts(filtered)
    }catch(e:any){
      productsEl.innerHTML = "<p style='color:red; font-size:12px;'>Failed to load</p>"
    }
  }

  loadProducts()

  catEl.addEventListener('click',(e)=>{
    const card=(e.target as HTMLElement).closest('.cat-card') as HTMLElement
    if(card?.dataset.cat) loadProducts(card.dataset.cat)
  })

  document.getElementById('viewAllBtn')?.addEventListener('click',()=>loadProducts())
  document.getElementById('viewCats')?.addEventListener('click',()=>loadProducts())
  document.getElementById('shopNowBtn')?.addEventListener('click',()=>{ document.getElementById('products')?.scrollIntoView({behavior:'smooth'}) })
  document.getElementById('searchBtn')?.addEventListener('click',()=>{
    const q=(document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase()
    if(!q) return loadProducts()
    const filtered=cachedProducts.filter(p=>p.name.toLowerCase().includes(q))
    renderProducts(filtered)
  })
}