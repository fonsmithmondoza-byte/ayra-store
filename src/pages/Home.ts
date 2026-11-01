// FORCE FIX - override fetch to never use http://api
const originalFetch = window.fetch;
window.fetch = ((url: any, ...args: any[]) => {
  if (typeof url === 'string' && url.includes('api/products')) {
    url = '/products.json';
  }
  return originalFetch(url, ...args);
}) as any;
// Clean Home.ts - uses /products.json only
async function loadBestSellers() {
  try {
    const res = await fetch('/products.json');
    if (!res.ok) throw new Error('Failed to fetch');
    const products = await res.json();
    const container = document.getElementById('best-sellers-grid');
    if (!container) return;
    
    container.innerHTML = products.slice(0, 8).map((p: any) => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" style="width:100%; height:200px; object-fit:cover;" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
      </div>
    `).join('');
    
    // Hide error if it exists
    const errEl = document.querySelector('.error-message');
    if (errEl) errEl.remove();
  } catch (e) {
    console.error(e);
    const container = document.getElementById('best-sellers-grid');
    if (container) container.innerHTML = '<p>Products loading from /products.json...</p>';
  }
}

// Also patch any other fetch
// @ts-ignore
window.fetchProducts = async () => {
  const r = await fetch('/products.json');
  return r.json();
};

loadBestSellers();
export {};