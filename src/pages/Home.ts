export const Home = `
  <!-- HERO SECTION -->
  <section style="display:flex; min-height:68vh; background:#f9f7f5; padding: 0 4%; flex-wrap:wrap; overflow:hidden;">
    <div style="flex:1; min-width:320px; display:flex; flex-direction:column; justify-content:center; padding:60px 24px;">
      <p style="letter-spacing:4px; font-size:10px; margin-bottom:20px; opacity:.5; font-weight:600;">NEW COLLECTION 2025</p>
      <h1 style="font-size:clamp(38px,5vw,62px); font-weight:300; line-height:0.92; margin-bottom:20px; letter-spacing:-1.5px;">Essentials,<br><b style="font-weight:700; letter-spacing:-1px;">beautifully made.</b></h1>
      <p style="opacity:.55; max-width:400px; line-height:1.7; margin-bottom:32px; font-size:14px;">Curated minimalist pieces designed for everyday luxury. Ethical, timeless, and made to last.</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <button id="shopWomen" style="background:black; color:white; padding:16px 36px; border:none; font-size:11px; letter-spacing:2px; cursor:pointer; transition:opacity .2s;">SHOP WOMEN</button>
        <button id="shopMen" style="background:white; color:black; border:1px solid black; padding:16px 36px; font-size:11px; letter-spacing:2px; cursor:pointer; transition:all .2s;">SHOP MEN</button>
      </div>
    </div>
    <div style="flex:1.1; min-width:360px; background:url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900') center/cover; min-height:480px; position:relative;">
      <div style="position:absolute; inset:0; background:linear-gradient(to right, #f9f7f5 0%, transparent 15%);"></div>
    </div>
  </section>

  <!-- CATEGORY STRIP -->
  <section style="display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#eee; border-top:1px solid #eee; border-bottom:1px solid #eee;">
    <div class="cat-card" data-cat="Women" style="background:white; padding:20px; text-align:center; cursor:pointer; font-size:11px; letter-spacing:2px; transition:background .2s;">WOMEN</div>
    <div class="cat-card" data-cat="Men" style="background:white; padding:20px; text-align:center; cursor:pointer; font-size:11px; letter-spacing:2px; transition:background .2s;">MEN</div>
    <div class="cat-card" data-cat="Bags" style="background:white; padding:20px; text-align:center; cursor:pointer; font-size:11px; letter-spacing:2px; transition:background .2s;">BAGS</div>
    <div class="cat-card" data-cat="Home" style="background:white; padding:20px; text-align:center; cursor:pointer; font-size:11px; letter-spacing:2px; transition:background .2s;">HOME & LIVING</div>
  </section>

  <!-- PRODUCTS -->
  <section style="padding:56px 4%;">
    <div style="display:flex; justify-content:space-between; align-items:end; margin-bottom:28px;">
      <h2 style="font-weight:300; font-size:28px; letter-spacing:-0.5px;">Best Sellers</h2>
      <a id="viewAllBtn" style="font-size:11px; letter-spacing:1.5px; text-decoration:underline; cursor:pointer; opacity:.7;">VIEW ALL</a>
    </div>
    <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:28px 20px;">
    </div>
  </section>

  <section style="background:black; color:white; display:grid; grid-template-columns:repeat(3,1fr); padding:24px 4%; text-align:center; font-size:10px; letter-spacing:2px;">
    <div>✦ FREE SHIPPING OVER $75</div>
    <div>✦ FREE RETURNS 30 DAYS</div>
    <div>✦ ETHICALLY MADE</div>
  </section>

  <style>
    .product-card:hover img { transform: scale(1.06); }
    .cat-card:hover { background:#f6f6f6 !important; }
    @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
    .skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e6e6e6 37%, #f0f0f0 63%); background-size:400% 100%; animation: shimmer 1.4s infinite; }
  </style>
`

let cachedProducts: any[] = [];

export function initHome() {
  const productsEl = document.getElementById('products')!

  function skeletonLoader() {
    productsEl.innerHTML = Array(8).fill(0).map(()=>`
      <div>
        <div class="skeleton" style="aspect-ratio:3/4; background-color:#f0f0f0;"></div>
        <div class="skeleton" style="height:12px; margin:12px 0 8px; width:70%;"></div>
        <div class="skeleton" style="height:12px; width:30%;"></div>
      </div>
    `).join('')
  }

  function renderProducts(products: any[]) {
    if (products.length === 0) {
      productsEl.innerHTML = "<p style='opacity:.6;'>No products in this category — <span id='resetFilter' style='text-decoration:underline; cursor:pointer;'>show all</span></p>"
      document.getElementById('resetFilter')?.addEventListener('click',()=>loadProducts())
      return;
    }
    productsEl.innerHTML = products.map(p => {
      const low = p.stock !== undefined && p.stock <= 5 && p.stock > 0;
      const out = p.stock === 0;
      return `
      <div class="product-card" data-id="${p.id}" style="cursor:pointer; group">
        <div style="background:#f6f6f6; aspect-ratio:3/4; overflow:hidden; position:relative;">
          <img src="${p.image}" loading="lazy" style="width:100%; height:100%; object-fit:cover; transition:transform .6s cubic-bezier(.2,.8,.2,1);" />
          ${low ? `<span style="position:absolute; top:10px; left:10px; background:#111; color:white; font-size:9px; letter-spacing:1px; padding:5px 8px;">ONLY ${p.stock} LEFT</span>` : ``}
          ${out ? `<span style="position:absolute; top:10px; left:10px; background:#ff3b30; color:white; font-size:9px; letter-spacing:1px; padding:5px 8px;">SOLD OUT</span>` : ``}
          <div style="position:absolute; bottom:10px; right:10px; display:flex; gap:4px;">
            ${(p.colors||[]).slice(0,3).map((c:any)=>`<span style="width:14px; height:14px; border-radius:50%; background:${c.hex}; border:1px solid rgba(0,0,0,.1); display:inline-block;"></span>`).join('')}
          </div>
        </div>
        <div style="padding:14px 0 4px;">
          <h3 style="font-weight:400; font-size:12.5px; letter-spacing:.2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</h3>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
            <p style="font-weight:600; font-size:13px;">$${p.price}</p>
            <p style="opacity:.45; font-size:10px; letter-spacing:1px;">${p.category.toUpperCase()}</p>
          </div>
        </div>
      </div>
    `}).join('')

    // click to detail
    document.querySelectorAll('.product-card').forEach(card=>{
      card.addEventListener('click',()=>{
        const id = (card as HTMLElement).dataset.id
        window.location.hash = `#product-${id}`
      })
    })
  }

  function loadProducts(category?: string) {
    skeletonLoader()
    const url = `/products.json`

    if (cachedProducts.length > 0) {
      let filtered = cachedProducts;
      if (category) filtered = cachedProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
      setTimeout(()=>renderProducts(filtered), 250) // tiny delay for skeleton feel
      return;
    }

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error("Failed to fetch " + r.status)
        return r.json()
      })
      .then((products:any[]) => {
        cachedProducts = products;
        let filtered = products;
        if (category) filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderProducts(filtered);
      })
      .catch(err => {
        console.error(err)
        productsEl.innerHTML = `<p style="color:red; padding:20px;">Failed to load products: ${err.message}</p>`
      })
  }

  loadProducts()

  document.querySelectorAll('.cat-card').forEach(el => {
    el.addEventListener('click', () => {
      const cat = (el as HTMLElement).dataset.cat!
      loadProducts(cat)
      window.scrollTo({ top: 620, behavior: 'smooth' })
    })
  })

  document.getElementById('shopWomen')?.addEventListener('click', () => { loadProducts('Women'); window.scrollTo({ top: 620, behavior: 'smooth' }) })
  document.getElementById('shopMen')?.addEventListener('click', () => { loadProducts('Men'); window.scrollTo({ top: 620, behavior: 'smooth' }) })
  document.getElementById('viewAllBtn')?.addEventListener('click', () => loadProducts())
}