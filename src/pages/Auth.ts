export function AuthPage(mode:'login'|'register' = 'login'){
  return `
  <div style="max-width:400px;margin:80px auto;padding:24px">
    <h1 style="font-size:24px;font-weight:bold;margin-bottom:20px">${mode==='login'?'Login':'Create Account'} — AYRA</h1>
    <input id="name" placeholder="Full name" style="width:100%;padding:12px;margin-bottom:12px;border:1px solid #ddd;display:${mode==='login'?'none':'block'}" />
    <input id="email" placeholder="Email" style="width:100%;padding:12px;margin-bottom:12px;border:1px solid #ddd" />
    <input id="password" type="password" placeholder="Password" style="width:100%;padding:12px;margin-bottom:12px;border:1px solid #ddd" />
    <button id="submit" style="width:100%;padding:12px;background:black;color:white">${mode==='login'?'Login':'Register'}</button>
    <p style="margin-top:12px"><a href="#${mode==='login'?'register':'login'}">${mode==='login'?'Need account? Register':'Have account? Login'}</a></p>
    <p id="msg" style="color:red;margin-top:10px"></p>
  </div>`
}
export function initAuth(mode:'login'|'register'){
  document.getElementById('submit')?.addEventListener('click', async ()=>{
    const email=(document.getElementById('email') as HTMLInputElement).value
    const password=(document.getElementById('password') as HTMLInputElement).value
    const name=(document.getElementById('name') as HTMLInputElement)?.value || ''
    const res=await fetch(`/api/auth/${mode}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password,name})})
    const data=await res.json()
    if(!res.ok){(document.getElementById('msg') as any).innerText=data.error; return}
    localStorage.setItem('ayra_token',data.token)
    localStorage.setItem('ayra_user',JSON.stringify(data.user))
    location.hash='#dashboard'
  })
}