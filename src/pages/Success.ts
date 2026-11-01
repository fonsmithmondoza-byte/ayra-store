export const Success = `
  <div style="max-width:600px; margin:0 auto; padding:80px 4%; text-align:center;">
    <div style="width:60px; height:60px; background:black; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:26px;">✓</div>
    <h1 style="font-size:32px; font-weight:300;">Order Confirmed</h1>
    <p style="opacity:.6; font-size:13px; margin:16px 0 32px;">ORDER #<span id="orderId"></span> • Thank you for shopping AYRA</p>
    <div id="success-items" style="background:#fafafa; padding:20px; text-align:left; margin-bottom:24px;"></div>
    <button id="continueShopBtn" style="background:black; color:white; padding:14px 28px; border:none; letter-spacing:1px; font-size:11px; cursor:pointer;">CONTINUE SHOPPING</button>
  </div>
`
export function initSuccess(){
  document.getElementById('orderId')!.textContent = 'AYRA-' + Math.floor(100000 + Math.random()*900000)
  const lastCart = JSON.parse(sessionStorage.getItem('lastCart')||'[]')
  const el = document.getElementById('success-items')!
  if(lastCart.length){
    const total = lastCart.reduce((s:any,i:any)=>s+i.price*i.qty,0)
    el.innerHTML = lastCart.map((i:any)=>`<div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:12px;"><span>${i.name} x${i.qty}</span><span>$${i.price*i.qty}</span></div>`).join('') + `<div style="display:flex; justify-content:space-between; font-weight:700; border-top:1px solid #eee; padding-top:10px;"><span>Total</span><span>$${total}</span></div>`
  }
  document.getElementById('continueShopBtn')?.addEventListener('click',()=> window.location.hash='')
}