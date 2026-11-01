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

<!-- 2. MAIN HEADER - SINGLE, PROFESSIONAL, CENTERED NAV -->
<div style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; justify-content:space-between; padding:14px 4%; gap:20px; position:sticky; top:0; z-index:40;">
  
  <!-- LOGO -->
  <div style="font-weight:900; font-size:18px; letter-spacing:3px; min-width:90px;">Λ AYRA</div>

  <!-- CENTERED NAV - EXACT ORDER YOU WANTED -->
  <nav style="display:flex; align-items:center; gap:32px; font-size:13px; font-weight:600; letter-spacing:.3px; flex:1; justify-content:center;">
    <a href="#" style="color:#111; text-decoration:none; border-bottom:2px solid #111; padding-bottom:3px;">Home</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">Marketplace</a>
    <a href="#dashboard" style="color:#6b7280; text-decoration:none;">Sell a Product</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">Affiliate</a>
    <a href="#" style="color:#6b7280; text-decoration:none;">About</a>
  </nav>

  <!-- RIGHT SIDE - SEARCH + AUTH + CART -->
  <div style="display:flex; align-items:center; gap:16px; min-width:360px; justify-content:flex-end;">
    <div style="display:flex; height:36px; width:220px;">
      <input placeholder="Search..." style="flex:1; border:1px solid #e5e7eb; border-right:0; border-radius:6px 0 0 6px; padding:0 10px; font-size:12px; outline:none;" />
      <button style="width:36px; border:1px solid #111; background:#111; color:#fff; border-radius:0 6px 6px 0; cursor:pointer;">⌕</button>
    </div>
    <a href="#login" style="font-size:12px; font-weight:600; text-decoration:none; color:#111;">LOGIN</a>
    <a href="#register" style="font-size:11px; font-weight:700; text-decoration:none; color:#111; border:1px solid #111; padding:6px 14px; border-radius:4px;">REGISTER</a>
    <a href="#cart" style="font-size:12px; font-weight:700; text-decoration:none; color:#111; display:flex; gap:4px;">CART <span id="cart-count">0</span></a>
  </div>
</div>

<!-- 3. CATEGORY BAR - CLEAN, NOT COLORFUL -->
<div style="background:#fff; border-bottom:1px solid #e5e7eb; display:flex; align-items:center; gap:8px; padding:10px 4%; font-size:12px; font-weight:600; color:#374151;">
  <div style="background:#111; color:#fff; padding:7px 12px; border-radius:4px; display:flex; gap:6px; cursor:pointer;">☰ All Categories ▾</div>
  <div style="display:flex; gap:6px; margin-left:8px;">
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Electronics</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Fashion</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Beauty</span>
    <span style="background:#f3f4f6; padding:6px 10px; border-radius:4px; font-size:11px;">Phones</span>
  </div>
</div>

<!-- 4. HERO - MINIMAL, PROFESSIONAL -->
<div style="background:#fff; display:flex; flex-wrap:wrap; min-height:420px; margin:0;">
  <div style="flex:1; min-width:340px; padding:56px 4%;">
    <h1 style="font-size:44px; font-weight:900; line-height:.95; margin:0; letter-spacing:-1px;">Shop Smart.<br><span style="font-weight:400;">Live Better.</span></h1>
    <p style="color:#6b7280; font-size:14px; max-width:380px; line-height:1.6; margin:16px 0 24px;">Discover amazing products at the best prices from trusted sellers around the world.</p>
    <a href="#products" style="background:#111; color:#fff; padding:12px 24px; border-radius:4px; font-weight:700; font-size:12px; text-decoration:none; display:inline-block; letter-spacing:.5px;">SHOP NOW →</a>
  </div>
  <div style="flex:1.2; min-width:360px; position:relative; background:#f3f4f6;">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800" style="width:100%; height:100%; object-fit:cover;" />
  </div>
</div>

<!-- 5. SHOP BY CATEGORY -->
<div style="background:#fff; padding:28px 4% 18px; margin-top:1px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
    <h2 style="font-size:15px; font-weight:800; margin:0; letter-spacing:.5px;">SHOP BY CATEGORY</h2>
    <a style="font-size:11px; font-weight:700; color:#6b7280; text-decoration:none;">VIEW ALL →</a>
  </div>
  <div id="categoryGrid" style="display:grid; grid-template-columns:repeat(8,1fr); gap:12px;"></div>
</div>

<!-- 6. FEATURED PRODUCTS -->
<div style="background:#fff; padding:24px 4% 32px; border-top:1px solid #f3f4f6;">
  <h2 style="font-size:15px; font-weight:800; margin:0 0 16px; letter-spacing:.5px;">FEATURED PRODUCTS</h2>
  <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(190px,1fr)); gap:16px;"></div>
</div>

<!-- FOOTER - NOW INCLUDES CONTACT -->
<div style="background:#111; color:#fff; padding:32px 4% 18px; display:grid; grid-template-columns:1.5fr 1fr 1fr 1.5fr; gap:24px; font-size:12px; margin-top:20px;">
  <div>
    <div style="font-weight:900; letter-spacing:3px; font-size:16px;">Λ AYRA</div>
    <div style="opacity:.6; margin:10px 0; line-height:1.5;">Your trusted marketplace in Cameroon and beyond.</div>
  </div>
  <div><div style="font-weight:700; margin-bottom:12px;">Quick Links</div><div style="opacity:.6; line-height:2;">Home<br>Marketplace<br>Sell a Product<br>Affiliate<br>About</div></div>
  <div><div style="font-weight:700; margin-bottom:12px;">Support</div><div style="opacity:.6; line-height:2;">FAQs<br>Shipping<br>Returns<br>Privacy Policy</div></div>
  <div>
    <div style="font-weight:700; margin-bottom:12px;">Contact Us</div>
    <div style="opacity:.6; line-height:2;">
      📞 +237 6 12 34 56 78<br>
      ✉️ support@ayra.cm<br>
      📍 Yaoundé, Cameroon<br><br>
      <span style="opacity:.9; color:#fff;">Contact page moved here as you requested.</span>
    </div>
  </div>
</div>
<div style="background:#111; border-top:1px solid #222; color:#666; display:flex; justify-content:space-between; padding:12px 4%; font-size:11px;">
  <span>© 2025 AYRA. All rights reserved.</span>
  <span>Designed in Cameroon 🇨🇲</span>
</div>

</div>
`

export function initHome(){
  const catEl=document.getElementById('categoryGrid')!
  const prodEl=document.getElementById('products')!

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
    <div style="border:1px solid #e5e7eb; border-radius:8px; padding:10px; text-align:center; background:#fff;">
      <img src="${c.img}" style="height:42px; object-fit:contain;" />
      <div style="font-size:10px; font-weight:700; margin-top:8px;">${c.n}</div>
    </div>
  `).join('')

  async function load(){
    const r=await fetch('/products.json')
    const products=await r.json()
    prodEl.innerHTML=products.map((p:any)=>`
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
        <div style="height:170px; background:#f9fafb; display:flex; align-items:center; justify-content:center;"><img src="${p.image}" style="width:85%; height:85%; object-fit:contain;" /></div>
        <div style="padding:12px;">
          <div style="font-size:12px; font-weight:600; height:32px; overflow:hidden;">${p.name}</div>
          <div style="font-weight:800; font-size:14px; margin:6px 0;">${Number(p.price).toLocaleString()} FCFA</div>
          <div style="font-size:11px; color:#6b7280;">★ ${p.rating} (${p.reviews})</div>
          <button class="add-cart" data-id="${p.id}" style="margin-top:10px; width:100%; background:#111; color:#fff; border:none; padding:8px; border-radius:4px; font-size:11px; font-weight:700; cursor:pointer;">ADD TO CART</button>
        </div>
      </div>
    `).join('')
  }
  load()
}