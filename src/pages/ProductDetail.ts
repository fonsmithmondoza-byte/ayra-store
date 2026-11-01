export const ProductDetail = `
  <div id="product-detail" style="padding:40px 4%; min-height:70vh;">
    <p>Loading product...</p>
  </div>
  <div id="cart-toast" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%) translateY(100px); background:#111; color:white; padding:14px 28px; font-size:13px; letter-spacing:0.5px; border-radius:2px; opacity:0; transition: all 0.4s ease; z-index:9999; pointer-events:none; display:flex; align-items:center; gap:12px; box-shadow:0 10px 30px rgba(0,0,0,0.2);">
    <span>✓</span><span id="toast-text">Added to cart</span>
  </div>
`

export function initProductDetail(id: number) {
  const detailEl = document.getElementById('product-detail')!;
  detailEl.innerHTML = `<p>Loading product...</p>`;

  function showToast(message: string) {
    const toast = document.getElementById('cart-toast')!;
    const text = document.getElementById('toast-text')!;
    text.innerText = message;
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
      toast.style.opacity = '0';
    }, 2500);
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCountEl = document.querySelector('#cart-count');
    if (cartCountEl) cartCountEl.textContent = String(cart.length);
    // Also update header button if you have CART badge
    const cartBtn = document.querySelector('header') as HTMLElement;
    if (cartBtn) {
      const badge = document.getElementById('cart-badge');
      if (badge) badge.textContent = String(cart.length);
    }
  }

  fetch(`/products.json`)
    .then(r => {
      if (!r.ok) throw new Error("Failed to load products.json");
      return r.json()
    })
    .then((products: any[]) => {
      const p = products.find((prod: any) => String(prod.id) === String(id));
      if (!p) {
        detailEl.innerHTML = `<p style="padding:40px;">Product #${id} not found. <a href="#" style="text-decoration:underline;">Back to shop</a></p>`;
        return;
      }

      detailEl.innerHTML = `
        <div style="display:flex; gap:60px; flex-wrap:wrap;">
          <div style="flex:1; min-width:320px; background:#f6f6f6;">
            <img src="${p.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;" />
          </div>
          <div style="flex:1; min-width:320px; padding-top:20px;">
            <p style="letter-spacing:3px; font-size:11px; opacity:.6;">${p.category}</p>
            <h1 style="font-size:36px; font-weight:300; margin:12px 0;">${p.name}</h1>
            <p style="font-size:20px; font-weight:600; margin-bottom:24px;">$${p.price}</p>
            
            <p style="font-size:13px; letter-spacing:1px; margin-bottom:10px;">SIZE</p>
            <div style="display:flex; gap:8px; margin-bottom:28px;">
              <button class="size-btn" style="border:1px solid black; padding:8px 16px; cursor:pointer; background:black; color:white;">S</button>
              <button class="size-btn" style="border:1px solid #ddd; padding:8px 16px; cursor:pointer; background:white;">M</button>
              <button class="size-btn" style="border:1px solid #ddd; padding:8px 16px; cursor:pointer; background:white;">L</button>
            </div>

            <button id="addToCartBtn" style="width:100%; background:black; color:white; padding:16px; border:none; letter-spacing:2px; font-size:13px; cursor:pointer; transition: opacity 0.2s;">ADD TO CART</button>
            <button id="backBtn" style="width:100%; background:white; color:black; padding:16px; border:1px solid black; letter-spacing:2px; font-size:13px; cursor:pointer; margin-top:12px;">← BACK TO SHOP</button>
          </div>
        </div>
      `

      document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.size-btn').forEach(b => {
            (b as HTMLElement).style.background = 'white';
            (b as HTMLElement).style.color = 'black';
            (b as HTMLElement).style.border = '1px solid #ddd';
          });
          (btn as HTMLElement).style.background = 'black';
          (btn as HTMLElement).style.color = 'white';
          (btn as HTMLElement).style.border = '1px solid black';
        })
      })

      document.getElementById('addToCartBtn')!.addEventListener('click', (e) => {
        const btn = e.target as HTMLButtonElement;
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        cart.push(p)
        localStorage.setItem('cart', JSON.stringify(cart))
        
        // Professional feedback - no alert!
        btn.innerText = '✓ ADDED';
        btn.style.opacity = '0.8';
        showToast(`${p.name} added to cart • ${cart.length} items`);
        updateCartCount();

        setTimeout(() => {
          btn.innerText = 'ADD TO CART';
          btn.style.opacity = '1';
        }, 1500);
      })

      document.getElementById('backBtn')!.addEventListener('click', () => {
        window.location.hash = ''
      })
    })
    .catch(err => {
      console.error(err);
      detailEl.innerHTML = `<p style="color:red; padding:20px;">Failed to load product: ${err.message}</p>`
    })
}