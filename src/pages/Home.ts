export const Home = `
  <!-- HERO SECTION -->
  <section style="display:flex; min-height:68vh; background:#f9f7f5; padding: 0 4%; flex-wrap:wrap;">
    <div style="flex:1; min-width:320px; display:flex; flex-direction:column; justify-content:center; padding:40px 20px;">
      <p style="letter-spacing:4px; font-size:11px; margin-bottom:16px; opacity:.6;">NEW COLLECTION 2025</p>
      <h1 style="font-size:56px; font-weight:300; line-height:0.95; margin-bottom:20px; letter-spacing:-1px;">Essentials,<br><b style="font-weight:600;">beautifully made.</b></h1>
      <p style="opacity:.6; max-width:380px; line-height:1.6; margin-bottom:28px; font-size:14px;">Curated minimalist pieces designed for everyday luxury. Ethical, timeless, and made to last.</p>
      <div style="display:flex; gap:12px;">
        <button id="shopWomen" style="background:black; color:white; padding:14px 32px; border:none; font-size:13px; letter-spacing:1px; cursor:pointer;">SHOP WOMEN</button>
        <button id="shopMen" style="background:white; color:black; border:1px solid black; padding:14px 32px; font-size:13px; letter-spacing:1px; cursor:pointer;">SHOP MEN</button>
      </div>
    </div>
    <div style="flex:1; min-width:320px; background:url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800') center/cover; min-height:420px;"></div>
  </section>

  <!-- CATEGORY STRIP -->
  <section style="display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#eee; border-top:1px solid #eee; border-bottom:1px solid #eee;">
    <div class="cat-card" data-cat="Women" style="background:white; padding:18px; text-align:center; cursor:pointer; font-size:13px; letter-spacing:1px;">WOMEN</div>
    <div class="cat-card" data-cat="Men" style="background:white; padding:18px; text-align:center; cursor:pointer; font-size:13px; letter-spacing:1px;">MEN</div>
    <div class="cat-card" data-cat="Bags" style="background:white; padding:18px; text-align:center; cursor:pointer; font-size:13px; letter-spacing:1px;">BAGS</div>
    <div class="cat-card" data-cat="Home" style="background:white; padding:18px; text-align:center; cursor:pointer; font-size:13px; letter-spacing:1px;">HOME & LIVING</div>
  </section>

  <!-- PRODUCTS FROM PYTHON -->
  <section style="padding:50px 4%;">
    <div style="display:flex; justify-content:space-between; align-items:end; margin-bottom:24px;">
      <h2 style="font-weight:300; font-size:28px;">Best Sellers</h2>
      <a id="viewAllBtn" style="font-size:12px; letter-spacing:1px; text-decoration:underline; cursor:pointer;">VIEW ALL</a>
    </div>
    <div id="products" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(250px,1fr)); gap:28px;">
      <p>Loading curated pieces from Python...</p>
    </div>
  </section>

  <section style="background:black; color:white; display:grid; grid-template-columns:repeat(3,1fr); padding:22px 4%; text-align:center; font-size:11px; letter-spacing:2px;">
    <div>✦ FREE SHIPPING OVER $75</div>
    <div>✦ FREE RETURNS 30 DAYS</div>
    <div>✦ ETHICALLY MADE</div>
  </section>
`

export function initHome() {
  const productsEl = document.getElementById('products')!

    function loadProducts(category?: string) {
    productsEl.innerHTML = "<p>Loading...</p>"
    const url = category ? `http://"/products.json"?category=${category}` : `/products.json`
    console.log("Fetching:", url);
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error("Python returned " + r.status)
        return r.json()
      })
      .then((products:any[]) => {
        console.log("Got products:", products.length);
        if (products.length === 0) {
          productsEl.innerHTML = "<p>No products in this category</p>"
          return;
        }
        productsEl.innerHTML = products.map(p => `
          <div class="product-card" data-id="${p.id}" style="cursor:pointer;">
            <div style="background:#f6f6f6; aspect-ratio:3/4; overflow:hidden;">
              <img src="${p.image}" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div style="padding:12px 0;">
              <h3 style="font-weight:400; font-size:13px;">${p.name} • ${p.category}</h3>
              <p style="font-weight:600; font-size:13px; margin-top:4px;">$${p.price}</p>
            </div>
          </div>
        `).join('')
      })
      .catch(err => {
        console.error(err)
        productsEl.innerHTML = `<p style="color:red; padding:20px;">❌ Cannot connect to Python at ${url}<br>Error: ${err.message}<br><br>Make sure <b>python app.py</b> is running in a separate terminal.</p>`
      })
  }

  loadProducts() // initial load

  // CATEGORY BAR WORKING
  document.querySelectorAll('.cat-card').forEach(el => {
    el.addEventListener('click', () => {
      const cat = (el as HTMLElement).dataset.cat!
      loadProducts(cat)
      window.scrollTo({ top: 600, behavior: 'smooth' })
    })
  })

  // SHOP WOMEN / MEN BUTTONS WORKING
  document.getElementById('shopWomen')?.addEventListener('click', () => loadProducts('Women'))
  document.getElementById('shopMen')?.addEventListener('click', () => loadProducts('Men'))
  document.getElementById('viewAllBtn')?.addEventListener('click', () => loadProducts())
}