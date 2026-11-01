export const Home = `
<div style="font-family:Inter,sans-serif; background:#f3f6fb;">

<!-- TOP INFO BAR - EXACT -->
<div style="background:#0a1e3f; color:#fff; display:flex; justify-content:space-between; padding:7px 3.5%; font-size:11px; font-weight:500;">
  <div style="display:flex; gap:28px;">
    <span>🚚 Free Delivery Across Cameroon</span>
    <span>🛡️ Secure Payment</span>
    <span>🎧 24/7 Support</span>
  </div>
  <span>Welcome to JARVIS DIGITAL!</span>
</div>

<!-- LOGO + SEARCH + CART - EXACT -->
<div style="background:#fff; display:flex; align-items:center; justify-content:space-between; padding:14px 3.5%; gap:20px;">
  <div style="display:flex; align-items:center; gap:10px; min-width:210px;">
    <div style="width:38px; height:38px; background:#0a1e3f; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:22px;">🛒</div>
    <div>
      <div style="font-weight:900; font-size:19px; color:#0a1e3f; line-height:1; letter-spacing:-.3px;">JARVIS DIGITAL</div>
      <div style="font-size:10.5px; font-weight:700; color:#0a1e3f; letter-spacing:.3px;">Connect. Promote. Sell.</div>
    </div>
  </div>
  <div style="flex:1; max-width:520px; display:flex; height:40px;">
    <input placeholder="Search for products..." style="flex:1; border:1px solid #d1d5db; border-right:0; border-radius:8px 0 0 8px; padding:0 14px; font-size:13px; outline:none;" />
    <button style="background:#1a56db; width:52px; border:none; border-radius:0 8px 8px 0; color:#fff; font-size:16px; cursor:pointer;">⌕</button>
  </div>
  <div style="display:flex; align-items:center; gap:18px; font-size:13px; font-weight:600; color:#0a1e3f;">
    <a href="#login" style="text-decoration:none; color:#0a1e3f; display:flex; align-items:center; gap:6px;">👤 Login / Register</a>
    <a href="#cart" style="text-decoration:none; color:#0a1e3f; display:flex; align-items:center; gap:4px;">🛒 Cart <b id="cart-count" style="background:#ff3b30; color:#fff; font-size:10px; padding:1px 5px; border-radius:10px; margin-left:2px;">2</b></a>
    <span>🌙</span>
  </div>
</div>

<!-- NAVBAR EXACT BLUE -->
<div style="background:#103a8a; display:flex; align-items:center; gap:24px; padding:0 3.5%; height:46px; color:#fff; font-size:13px; font-weight:600; overflow-x:auto;">
  <div style="background:#fbd207; color:#000; height:32px; padding:0 14px; border-radius:6px; display:flex; align-items:center; gap:8px; font-weight:800; white-space:nowrap;">☰ All Categories ▾</div>
  <span style="color:#fbd207; display:flex; align-items:center; gap:6px; white-space:nowrap;">🏠 Home</span>
  <span style="opacity:.9; display:flex; align-items:center; gap:6px; white-space:nowrap;">🛍️ Marketplace</span>
  <a href="#dashboard" style="color:#fff; text-decoration:none; opacity:.9; white-space:nowrap;">🏷️ Sell a Product</a>
  <span style="opacity:.9; white-space:nowrap;">🤝 Affiliate</span>
  <span style="opacity:.4;">|</span>
  <span style="opacity:.85;">About</span>
  <span style="opacity:.85;">Contact</span>
</div>

<!-- HERO EXACT LIKE SCREENSHOT -->
<div style="background:#fff; display:flex; flex-wrap:wrap; min-height:400px; position:relative; overflow:hidden;">
  <div style="flex:1; min-width:340px; padding:48px 3.5% 28px;">
    <h1 style="font-size:48px; font-weight:900; line-height:.95; margin:0; color:#0a1e3f;">Shop Smart.<br><span style="color:#1a56db;">Live Better.</span></h1>
    <p style="color:#334155; font-size:14px; max-width:400px; line-height:1.5; margin:16px 0 22px;">Discover amazing products at the best prices from trusted sellers around the world.</p>
    <a href="#products" style="background:#fbd207; color:#000; padding:12px 22px; border-radius:28px; font-weight:800; font-size:13px; text-decoration:none; display:inline-flex; align-items:center; gap:8px;">Shop Now →</a>
    <div style="display:flex; gap:8px; margin-top:28px;"><div style="width:22px; height:8px; background:#0a1e3f; border-radius:10px;"></div><div style="width:8px; height:8px; background:#cbd5e1; border-radius:50%;"></div><div style="width:8px; height:8px; background:#cbd5e1; border-radius:50%;"></div></div>
  </div>
  <div style="flex:1.3; min-width:360px; position:relative; background:#f8fafc;">
    <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900" style="width:100%; height:100%; object-fit:cover; opacity:.2; position:absolute; inset:0;" />
    <div style="position:absolute; right:22px; top:22px; background:#fbd207; color:#000; font-weight:900; font-size:19px; line-height:1.05; padding:18px; border-radius:50%; width:108px; height:108px; display:flex; align-items:center; justify-content:center; text-align:center; transform:rotate(8deg); box-shadow:0 8px 24px rgba(0,0,0,.18); z-index:3;">Great Deals Everyday!</div>
    <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600" style="position:absolute; right:8%; bottom:0; height:96%; z-index:2; object-fit:contain;" />
  </div>
</div>

<!-- SHOP BY CATEGORY EXACT -->
<div style="background:#fff; padding:22px 3.5% 14px;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
    <h2 style="font-size:18px; font-weight:800; color:#0a1e3f; margin:0;">Shop by Category</h2>
    <a style="color:#1a56db; font-size:12px; font-weight:700; text-decoration:none;">View All Categories →</a>
  </div>
  <div style="display:grid; grid-template-columns:repeat(8,1fr); gap:12px;">
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1588872657576-7efd1f1555ed?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Electronics</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Beauty &<br>Skincare</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Phones &<br>Accessories</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Fashion &<br>Apparel</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Home & Kitchen</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Books &<br>eBooks</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1579952363873-27f3bfad9c0d?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Sports &<br>Fitness</div></div>
    <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; padding:12px 4px; text-align:center;"><img src="https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=200" style="height:48px; object-fit:contain;" /><div style="font-size:11px; font-weight:700; margin-top:8px; color:#0a1e3f;">Automotive</div></div>
  </div>
</div>

<!-- FEATURED PRODUCTS - WILL BE FILLED BY JS -->
<div style="background:#fff; padding:18px 3.5%;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
    <h2 style="font-size:18px; font-weight:800; color:#0a1e3f; margin:0; display:flex; align-items:center; gap:6px;">⭐ Featured Products</h2>
    <a style="color:#1a56db; font-size:12px; font-weight:700;">View All Products →</a>
  </div>
  <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(188px,1fr)); gap:14px;"></div>
</div>

<!-- BANNERS -->
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; padding:0 3.5% 14px; background:#fff;">
  <div style="background:linear-gradient(90deg,#0d3fb8,#1a56db); border-radius:14px; padding:18px 18px; display:flex; justify-content:space-between; align-items:center; color:#fff;">
    <div style="display:flex; gap:12px;"><div style="width:44px; height:44px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#0d3fb8; font-size:22px;">🛡️</div><div><div style="font-weight:800; font-size:16px;">Secure & Reliable</div><div style="font-size:12px; opacity:.9; margin:4px 0 10px; max-width:200px;">Your payments and data are always protected.</div><div style="background:#fbd207; color:#000; padding:7px 12px; border-radius:20px; font-weight:800; font-size:11px; display:inline-block;">Shop with Confidence →</div></div></div><div style="font-size:52px;">💳</div>
  </div>
  <div style="background:#fbd207; border-radius:14px; padding:18px 18px; display:flex; justify-content:space-between; align-items:center; color:#000;">
    <div><div style="font-weight:900; font-size:16px;">🚚 Fast Delivery</div><div style="font-size:12px; font-weight:600; margin:4px 0 10px;">Get your order anywhere in Cameroon.</div><div style="background:#0a1e3f; color:#fff; padding:7px 12px; border-radius:20px; font-weight:800; font-size:11px; display:inline-block;">Order Now →</div></div><div style="display:flex; gap:6px; align-items:center; font-size:42px;">📦 👍</div>
  </div>
</div>

<!-- FEATURES STRIP -->
<div style="background:#fff; margin:0 3.5%; border:1px solid #eef2f7; border-left:0; border-right:0; display:grid; grid-template-columns:repeat(4,1fr);">
  <div style="display:flex; gap:10px; align-items:center; padding:14px;"><span style="font-size:20px;">🎧</span><div><div style="font-weight:800; font-size:12px;">24/7 Support</div><div style="font-size:11px; opacity:.7;">We are always here to help.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #eef2f7;"><span>🔄</span><div><div style="font-weight:800; font-size:12px;">Easy Returns</div><div style="font-size:11px; opacity:.7;">Hassle-free returns.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #eef2f7;"><span>✔️</span><div><div style="font-weight:800; font-size:12px;">Trusted Sellers</div><div style="font-size:11px; opacity:.7;">Shop with confidence.</div></div></div>
  <div style="display:flex; gap:10px; align-items:center; padding:14px; border-left:1px solid #eef2f7;"><span>🎁</span><div><div style="font-weight:800; font-size:12px;">Special Offers</div><div style="font-size:11px; opacity:.7;">Save more every day.</div></div></div>
</div>

<!-- NEWSLETTER -->
<div style="margin:14px 3.5%; background:#0a1e3f; border-radius:12px; padding:14px 18px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
  <div style="display:flex; gap:12px; align-items:center; color:#fff;"><div style="font-size:26px;">✉️</div><div><div style="font-weight:800; font-size:14px;">Subscribe to Our Newsletter</div><div style="font-size:11px; opacity:.8;">Get the latest products, offers and updates delivered to your inbox.</div></div></div>
  <div style="display:flex; gap:8px;"><input placeholder="Enter your email address" style="padding:10px 12px; border-radius:6px; border:none; width:240px; font-size:12px;" /><button style="background:#fbd207; border:none; padding:10px 14px; border-radius:6px; font-weight:800; font-size:12px;">Subscribe</button></div>
</div>

<!-- FOOTER -->
<div style="background:#07132e; color:#fff; padding:22px 3.5%; display:grid; grid-template-columns:1.4fr 1fr 1fr 1fr 1fr; gap:16px; font-size:12px;">
  <div><div style="font-weight:900; font-size:17px; display:flex; gap:8px; align-items:center;">🛒 JARVIS DIGITAL</div><div style="font-size:10px; opacity:.8;">Connect. Promote. Sell.</div><div style="opacity:.6; margin:10px 0; line-height:1.4;">Your trusted online marketplace in Cameroon and beyond.</div></div>
  <div><b>Quick Links</b><div style="opacity:.7; line-height:1.8; margin-top:8px;">Home<br>Marketplace<br>Sell a Product<br>Affiliate<br>About Us<br>Contact Us</div></div>
  <div><b>Customer Support</b><div style="opacity:.7; line-height:1.8; margin-top:8px;">FAQs<br>Shipping Info<br>Return Policy<br>Privacy Policy<br>Terms & Conditions</div></div>
  <div><b>Contact Us</b><div style="opacity:.7; line-height:1.8; margin-top:8px;">📞 +237 6 12 34 56 78<br>✉️ support@jarvisdigital.cm<br>📍 Yaoundé, Cameroon</div></div>
  <div style="color:#fbd207; font-style:italic; font-weight:700;">Shop Smart,<br>Grow with JARVIS DIGITAL!</div>
</div>
<div style="background:#07132e; border-top:1px solid rgba(255,255,255,.08); color:#fff; display:flex; justify-content:space-between; padding:10px 3.5%; font-size:11px; opacity:.6;"><span>© 2025 JARVIS DIGITAL. All rights reserved.</span><span>Designed with ❤️ in Cameroon 🇨🇲</span></div>

</div>
`

export function initHome(){
  const el=document.getElementById('products')!
  async function load(){
    try{
      const r=await fetch('/products.json')
      const products=await r.json()
      el.innerHTML=products.map((p:any)=>`
        <div style="background:#fff; border:1px solid #eef2f7; border-radius:12px; overflow:hidden;">
          <div style="background:#f8fafc; height:160px; display:flex; align-items:center; justify-content:center;"><img src="${p.image}" style="width:88%; height:88%; object-fit:contain;" /></div>
          <div style="padding:10px;">
            <div style="font-size:12px; font-weight:600; color:#0a1e3f; height:30px; overflow:hidden;">${p.name}</div>
            <div style="font-weight:900; color:#1a56db; font-size:15px; margin:4px 0;">${Number(p.price).toLocaleString()} FCFA</div>
            <div style="font-size:11px; color:#475569;"><span style="color:#f59e0b;">★</span> ${p.rating} (${p.reviews})</div>
            <button class="add-cart" data-id="${p.id}" style="margin-top:8px; width:100%; background:#1a56db; color:#fff; border:none; padding:8px; border-radius:6px; font-weight:700; font-size:12px; cursor:pointer;">🛒 Add to Cart</button>
          </div>
        </div>
      `).join('')
      el.addEventListener('click',(e)=>{
        const btn=(e.target as HTMLElement).closest('.add-cart') as HTMLElement
        if(btn){
          const id=btn.getAttribute('data-id')
          const cart=JSON.parse(localStorage.getItem('cart')||'[]')
          const prod=products.find((x:any)=>x.id==id)
          const ex=cart.find((x:any)=>x.id==id)
          if(ex) ex.qty++; else cart.push({...prod,qty:1})
          localStorage.setItem('cart',JSON.stringify(cart))
          const c=document.getElementById('cart-count'); if(c) c.textContent=cart.reduce((s:any,i:any)=>s+i.qty,0)
          alert('Added to cart!')
        }
      })
    }catch(e){ el.innerHTML='Failed to load products' }
  }
  load()
}