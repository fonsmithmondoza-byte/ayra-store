export const ProductDetail = `
  <div id="product-detail" style="padding:40px 4%; min-height:70vh;">
    <p>Loading product...</p>
  </div>
`

export function initProductDetail(id: number) {
  fetch(`http://api/products/${id}`)
    .then(r => r.json())
    .then(p => {
      document.getElementById('product-detail')!.innerHTML = `
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

            <button id="addToCartBtn" style="width:100%; background:black; color:white; padding:16px; border:none; letter-spacing:2px; font-size:13px; cursor:pointer;">ADD TO CART</button>
            <button id="backBtn" style="width:100%; background:white; color:black; padding:16px; border:1px solid black; letter-spacing:2px; font-size:13px; cursor:pointer; margin-top:12px;">← BACK TO SHOP</button>
          </div>
        </div>
      `

      // Size selection
      document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.size-btn').forEach(b => (b as HTMLElement).style.background = 'white');
          (btn as HTMLElement).style.background = 'black';
          (btn as HTMLElement).style.color = 'white';
        })
      })

      document.getElementById('addToCartBtn')!.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]')
        cart.push(p)
        localStorage.setItem('cart', JSON.stringify(cart))
        alert(`${p.name} added to cart! Cart has ${cart.length} items`)
        window.location.hash = '#cart'
      })

      document.getElementById('backBtn')!.addEventListener('click', () => {
        window.location.hash = ''
      })
    })
}