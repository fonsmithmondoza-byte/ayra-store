export const Cart = `
  <div id="cart-page" style="padding:40px 4%; min-height:70vh; max-width:900px; margin:0 auto;">
    <h1 style="font-size:28px; font-weight:300; margin-bottom:30px;">Shopping Cart</h1>
    <div id="cart-items"></div>
    <div id="cart-summary" style="margin-top:40px; border-top:1px solid #eee; padding-top:30px;"></div>
  </div>
  <div id="cart-toast" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%) translateY(100px); background:#111; color:white; padding:14px 28px; font-size:13px; letter-spacing:0.5px; border-radius:2px; opacity:0; transition: all 0.4s ease; z-index:9999; pointer-events:none;"></div>
`

export function initCart() {
  const itemsEl = document.getElementById('cart-items')!;
  const summaryEl = document.getElementById('cart-summary')!;
  const toastEl = document.getElementById('cart-toast')!;

  function showToast(msg: string) {
    toastEl.innerText = msg;
    toastEl.style.transform = 'translateX(-50%) translateY(0)';
    toastEl.style.opacity = '1';
    setTimeout(() => {
      toastEl.style.transform = 'translateX(-50%) translateY(100px)';
      toastEl.style.opacity = '0';
    }, 2500);
  }

  function render() {
    let cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if (cart.length === 0) {
      itemsEl.innerHTML = `<p style="padding:40px 0; opacity:0.6;">Your cart is empty. <a href="#" style="text-decoration:underline;">Continue shopping</a></p>`;
      summaryEl.innerHTML = '';
      return;
    }

    let total = 0;
    itemsEl.innerHTML = cart.map((p: any, i: number) => {
      total += Number(p.price);
      return `
        <div style="display:flex; gap:20px; padding:20px 0; border-bottom:1px solid #f0f0f0; align-items:center;">
          <img src="${p.image}" style="width:80px; height:100px; object-fit:cover; background:#f6f6f6;" />
          <div style="flex:1;">
            <h3 style="font-size:14px; font-weight:400;">${p.name}</h3>
            <p style="font-size:12px; opacity:0.6; margin-top:4px;">Size: M • Qty: 1</p>
            <p style="font-size:14px; font-weight:600; margin-top:8px;">$${p.price}</p>
          </div>
          <button data-remove="${i}" style="border:none; background:none; font-size:12px; text-decoration:underline; cursor:pointer; opacity:0.6;">Remove</button>
        </div>
      `;
    }).join('');

    summaryEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-weight:600; margin-bottom:20px;">
        <span>Total</span><span>$${total}</span>
      </div>
      <button id="checkoutBtn" style="width:100%; background:black; color:white; padding:16px; border:none; letter-spacing:2px; font-size:13px; cursor:pointer;">PROCEED TO CHECKOUT</button>
      <button id="continueBtn" style="width:100%; background:white; color:black; padding:16px; border:1px solid black; letter-spacing:1px; font-size:13px; cursor:pointer; margin-top:12px;">← CONTINUE SHOPPING</button>
      <p style="text-align:center; font-size:11px; opacity:0.5; margin-top:16px;">Free shipping • 30-day returns</p>
    `;

    // Remove handlers
    document.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number((btn as HTMLElement).dataset.remove);
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast('Item removed');
        render();
      });
    });

    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
      // NO ALERT - professional navigation
      if (cart.length === 0) return;
      showToast(`Proceeding to checkout • $${total}`);
      setTimeout(() => {
        window.location.hash = '#checkout';
      }, 400);
    });

    document.getElementById('continueBtn')?.addEventListener('click', () => {
      window.location.hash = '';
    });
  }

  render();
}