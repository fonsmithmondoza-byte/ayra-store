export const Cart = `
  <div id="cart-page" style="max-width:900px; margin:0 auto; padding:60px 4%; min-height:70vh;">
    <h1 style="font-size:32px; font-weight:300; margin-bottom:40px;">Shopping Cart</h1>
    <div id="cart-items"></div>
    <div id="cart-summary" style="border-top:1px solid #eee; margin-top:40px; padding-top:24px;"></div>
  </div>
  <div id="cart-toast" style="position:fixed; bottom:30px; left:50%; transform:translateX(-50%) translateY(100px); background:#111; color:white; padding:14px 28px; font-size:13px; letter-spacing:0.5px; border-radius:2px; opacity:0; transition: all 0.4s ease; z-index:9999; pointer-events:none;">Removed from cart</div>
`

export function initCart() {
  const itemsEl = document.getElementById('cart-items')!
  const summaryEl = document.getElementById('cart-summary')!
  const toast = document.getElementById('cart-toast')!

  function showToast(msg:string){
    toast.innerText = msg
    toast.style.transform = 'translateX(-50%) translateY(0)'
    toast.style.opacity = '1'
    setTimeout(()=>{ toast.style.transform='translateX(-50%) translateY(100px)'; toast.style.opacity='0'}, 2000)
  }

  function getCart(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }

  function saveCart(cart:any[]){
    localStorage.setItem('cart', JSON.stringify(cart))
    const countEl = document.querySelector('#cart-count')
    if(countEl) countEl.textContent = String(cart.reduce((s,c)=>s+(c.qty||1),0))
    const badge = document.getElementById('cart-badge')
    if(badge) badge.textContent = String(cart.reduce((s,c)=>s+(c.qty||1),0))
  }

  function normalizeCart(){
    // Merge duplicates: same id + selectedSize + selectedColor => qty++
    const raw = getCart()
    const map = new Map()
    raw.forEach((item:any)=>{
      const key = `${item.id}-${item.selectedSize||''}-${item.selectedColor||''}`
      if(!map.has(key)){
        map.set(key, {...item, qty: item.qty || 1})
      } else {
        map.get(key).qty += item.qty || 1
      }
    })
    const merged = Array.from(map.values())
    saveCart(merged)
    return merged
  }

  function render(){
    let cart = normalizeCart()
    
    if(cart.length===0){
      itemsEl.innerHTML = `<div style="text-align:center; padding:80px 0;">
        <p style="opacity:.6; margin-bottom:20px;">Your cart is empty</p>
        <button id="continueShop" style="background:black; color:white; padding:14px 32px; border:none; letter-spacing:1px; cursor:pointer;">CONTINUE SHOPPING</button>
      </div>`
      summaryEl.innerHTML = ''
      document.getElementById('continueShop')?.addEventListener('click',()=> window.location.hash='')
      return
    }

    itemsEl.innerHTML = cart.map((item:any, idx:number)=>`
      <div style="display:flex; gap:20px; padding:24px 0; border-bottom:1px solid #f0f0f0; align-items:center;">
        <div style="width:96px; height:120px; background:#f6f6f6; flex-shrink:0;">
          <img src="${item.image}" style="width:100%; height:100%; object-fit:cover;" />
        </div>
        <div style="flex:1;">
          <h3 style="font-weight:400; font-size:14px; margin-bottom:6px;">${item.name}</h3>
          <p style="font-size:11px; opacity:.6; letter-spacing:.5px;">
            ${item.selectedSize ? `Size: ${item.selectedSize}` : ''} 
            ${item.selectedColor ? `• Color: ${item.selectedColor}` : ''}
            • Qty: ${item.qty}
          </p>
          <div style="display:flex; align-items:center; gap:8px; margin-top:12px;">
            <button data-dec="${idx}" style="width:28px; height:28px; border:1px solid #ddd; background:white; cursor:pointer;">−</button>
            <span style="font-size:12px; min-width:20px; text-align:center;">${item.qty}</span>
            <button data-inc="${idx}" style="width:28px; height:28px; border:1px solid #ddd; background:white; cursor:pointer;">+</button>
          </div>
        </div>
        <div style="text-align:right;">
          <p style="font-weight:600; font-size:14px;">$${item.price * item.qty}</p>
          <button data-remove="${idx}" style="background:none; border:none; text-decoration:underline; font-size:11px; opacity:.5; cursor:pointer; margin-top:8px;">Remove</button>
        </div>
      </div>
    `).join('')

    const total = cart.reduce((sum:any, i:any)=> sum + i.price * i.qty, 0)
    const count = cart.reduce((sum:any, i:any)=> sum + i.qty, 0)

    summaryEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-weight:600; margin-bottom:20px;">
        <span>Total (${count} ${count===1?'item':'items'})</span><span>$${total}</span>
      </div>
      <button id="checkoutBtn" style="width:100%; background:black; color:white; padding:18px; border:none; letter-spacing:2px; font-size:12px; cursor:pointer;">PROCEED TO CHECKOUT</button>
      <button id="continueBtn" style="width:100%; background:white; color:black; padding:16px; border:1px solid black; letter-spacing:1px; font-size:11px; cursor:pointer; margin-top:12px;">← CONTINUE SHOPPING</button>
      <p style="text-align:center; font-size:10px; opacity:.4; margin-top:16px; letter-spacing:1px;">FREE SHIPPING OVER $75 • 30-DAY RETURNS</p>
    `

    // Events
    itemsEl.querySelectorAll('[data-remove]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const i = Number((btn as HTMLElement).dataset.remove)
        cart.splice(i,1)
        saveCart(cart)
        showToast('Removed from cart')
        render()
      })
    })
    itemsEl.querySelectorAll('[data-inc]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const i = Number((btn as HTMLElement).dataset.inc)
        cart[i].qty++
        saveCart(cart)
        render()
      })
    })
    itemsEl.querySelectorAll('[data-dec]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const i = Number((btn as HTMLElement).dataset.dec)
        if(cart[i].qty>1){ cart[i].qty--; saveCart(cart); render() }
      })
    })

    document.getElementById('checkoutBtn')?.addEventListener('click', ()=> window.location.hash='#checkout')
    document.getElementById('continueBtn')?.addEventListener('click', ()=> window.location.hash='')
  }

  render()
}