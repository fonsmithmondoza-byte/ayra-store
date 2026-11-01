export function DashboardPage(){
  const user=JSON.parse(localStorage.getItem('ayra_user')||'null')
  if(!user) {location.hash='#login'; return '<p>Redirect...</p>'}
  return `
  <div style="max-width:900px;margin:40px auto;padding:20px">
    <div style="display:flex;justify-content:space-between"><h1>Dashboard — Hi ${user.name} (${user.role})</h1><button id="logout">Logout</button></div>
    <div style="border:1px solid #eee;padding:16px;margin:20px 0">
      <h3>Add Product</h3>
      <input id="pname" placeholder="Product name" style="padding:8px;width:200px;margin-right:8px"/>
      <input id="pprice" type="number" placeholder="Price" style="padding:8px;width:100px;margin-right:8px"/>
      <input id="pimage" placeholder="Image URL" style="padding:8px;width:300px;margin-right:8px"/>
      <input id="pcat" placeholder="Category: bags/women/men" style="padding:8px;width:150px"/>
      <button id="add" style="padding:8px 16px;background:black;color:white;margin-top:10px">Add</button>
      <p id="dmsg"></p>
    </div>
    <h3>My Products</h3>
    <div id="myprods">Loading...</div>
  </div>`
}
export async function initDashboard(){
  const token=localStorage.getItem('ayra_token')
  if(!token) return
  document.getElementById('logout')?.addEventListener('click',()=>{localStorage.clear(); location.hash='#login'})
  const load=async()=>{
    const r=await fetch('/api/products/my',{headers:{Authorization:`Bearer ${token}`}})
    const prods=await r.json()
    const el=document.getElementById('myprods')!
    el.innerHTML=prods.map((p:any)=>`<div style="display:flex;justify-content:space-between;padding:8px;border-bottom:1px solid #eee"><span>${p.name} - $${p.price}</span><button data-id="${p.id}" class="del">Delete</button></div>`).join('')
    el.querySelectorAll('.del').forEach(b=>b.addEventListener('click',async(e:any)=>{
      const id=e.target.dataset.id
      await fetch('/api/products/'+id,{method:'DELETE',headers:{Authorization:`Bearer ${token}`}})
      load()
    }))
  }
  load()
  document.getElementById('add')?.addEventListener('click',async()=>{
    const name=(document.getElementById('pname') as HTMLInputElement).value
    const price=(document.getElementById('pprice') as HTMLInputElement).value
    const image=(document.getElementById('pimage') as HTMLInputElement).value
    const category=(document.getElementById('pcat') as HTMLInputElement).value
    const r=await fetch('/api/products',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${token}`},body:JSON.stringify({name,price,image,category})})
    const d=await r.json()
    if(r.ok){(document.getElementById('dmsg') as any).innerText='Added!'; load()} else {(document.getElementById('dmsg') as any).innerText=d.error}
  })
}