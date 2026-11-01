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

      const sizes = p.sizes || ["One Size"];
      const colors = p.colors || [];
      const stock = p.stock ?? 10;
      const isLow = stock <= 5;
      const isOut = stock <= 0;

      let selectedSize = sizes[0];
      let selectedColor = colors[0]?.name || "";

      detailEl.innerHTML = `
        <div style="display:flex; gap:60px; flex-wrap:wrap; max-width:1100px; margin:0 auto;">
          <div style="flex:1; min-width:320px; background:#f6f6f6; position:relative;">
            <img src="${p.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;" />
            ${isLow && !isOut ? `<div style="position:absolute; top:12px; left:12px; background:#111; color:white; font-size:10px; letter-spacing:1px; padding:6px 10px;">ONLY ${stock} LEFT</div>` : ``}
            ${isOut ? `<div style="position:absolute; top:12px; left:12px; background:#ff3b30; color:white; font-size:10px; letter-spacing:1px; padding:6px 10px;">SOLD OUT</div>` : ``}
          </div>
          <div style="flex:1; min-width:320px; padding-top:10px;">
            <p style="letter-spacing:3px; font-size:11px; opacity:.6;">${p.category} • ${isOut ? 'Out of Stock' : `${stock} in stock`}</p>
            <h1 style="font-size:36px; font-weight:300; margin:12px 0; line-height:1.1;">${p.name}</h1>
            <p style="font-size:20px; font-weight:600; margin-bottom:12px;">$${p.price}</p>
            <p style="opacity:.6; font-size:13px; line-height:1.6; margin-bottom:28px; max-width:420px;">${p.description || ''}</p>
            
            <p style="font-size:11px; letter-spacing:2px; margin-bottom:10px;">SIZE</p>
            <div id="sizeWrap" style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:24px;">
              ${sizes.map((s:string, i:number) => `
                <button data-size="${s}" class="size-btn" style="border:${i===0?'1px solid black':'1px solid #ddd'}; padding:8px 16px; cursor:pointer; background:${i===0?'black':'white'}; color:${i===0?'white':'black'}; font-size:12px; min-width:44px;">${s}</button>
              `).join('')}
            </div>

            ${colors.length ? `
            <p style="font-size:11px; letter-spacing:2px; margin-bottom:10px;">COLOR: <span id="colorLabel" style="opacity:.6;">${colors[0]?.name}</span></p>
            <div id="colorWrap" style="display:flex; gap:10px; margin-bottom:28px;">
              ${colors.map((c:any, i:number) => `
                <button data-color="${c.name}" title="${c.name}" class="color-btn" style="width:32px; height:32px; border-radius:50%; background:${c.hex}; border:${i===0?'2px solid black':'1px solid #ddd'}; cursor:pointer; outline:${i===0?'2px solid white':'none'}; outline-offset:${i===0?'-4px':'0'};"></button>
              `).join('')}
            </div>
            ` : ''}

            <button id="addToCartBtn" ${isOut?'disabled':''} style="width:100%; background:${isOut?'#ccc':'black'}; color:white; padding:16px; border:none; letter-spacing:2px; font-size:13px; cursor:${isOut?'not-allowed':'pointer'}; transition: opacity 0.2s;">${isOut?'SOLD OUT':'ADD TO CART'}</button>
            <button id="backBtn" style="width:100%; background:white; color:black; padding:16px; border:1px solid black; letter-spacing:1px; font-size:11px; cursor:pointer; margin-top:12px;">← BACK TO SHOP</button>
            <p style="text-align:center; font-size:11px; opacity:0.5; margin-top:16px;">Free shipping • 30-day returns</p>
          </div>
        </div>
      `

      // Size select
      detailEl.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          detailEl.querySelectorAll('.size-btn').forEach(b => {
            (b as HTMLElement).style.background = 'white';
            (b as HTMLElement).style.color = 'black';
            (b as HTMLElement).style.border = '1px solid #ddd';
          });
          (btn as HTMLElement).style.background = 'black';
          (btn as HTMLElement).style.color = 'white';
          (btn as HTMLElement).style.border = '1px solid black';
          selectedSize = (btn as HTMLElement).dataset.size!;
        })
      })

      // Color select
      detailEl.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          detailEl.querySelectorAll('.color-btn').forEach(b => {
            (b as HTMLElement).style.border = '1px solid #ddd';
            (b as HTMLElement).style.outline = 'none';
          });
          (btn as HTMLElement).style.border = '2px solid black';
          (btn as HTMLElement).style.outline = '2px solid white';
          (btn as HTMLElement).style.outlineOffset = '-4px';
          selectedColor = (btn as HTMLElement).dataset.color!;
          const label = document.getElementById('colorLabel');
          if(label) label.textContent = selectedColor;
        })
      })

      document.getElementById('addToCartBtn')!.addEventListener('click', (e) => {
        if(isOut) return;
        const btn = e.target as HTMLButtonElement;
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        // push with selected options
        cart.push({...p, selectedSize, selectedColor, cartId: Date.now()})
        localStorage.setItem('cart', JSON.stringify(cart))
        
        btn.innerText = '✓ ADDED';
        btn.style.opacity = '0.8';
        showToast(`${p.name} • ${selectedSize}${selectedColor?` / ${selectedColor}`:''} added`);
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