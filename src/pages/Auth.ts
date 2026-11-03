export const LoginPage = `
<div style="min-height:100vh; background:#eef3ff; display:flex; align-items:center; justify-content:center; padding:20px; font-family:Inter,sans-serif;">
<div style="display:flex; width:100%; max-width:980px; border-radius:16px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,.2); border:3px solid #1e3a8a;">

<div style="flex:1; background:linear-gradient(to bottom, rgba(10,40,120,.6), #0a1f60), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800'); background-size:cover; background-position:center; padding:0; display:flex; flex-direction:column; color:#fff; position:relative;">
  <div style="background:#0a2a7a; padding:14px 20px; display:flex; align-items:center; gap:8px;">
    <div style="font-size:28px;">🛒</div>
    <div style="font-weight:900; font-size:18px;">Λ AYRA</div>
    <div style="margin-left:auto; display:flex; gap:16px; font-size:12px; opacity:.9;"><span>🏠 Home</span><span>|</span><span>⊞ Marketplace</span></div>
  </div>
  <div style="padding:28px 24px; flex:1; display:flex; flex-direction:column; justify-content:flex-end;">
    <h1 style="font-size:44px; line-height:.9; margin:0; font-weight:900;">Welcome<br><span style="color:#ffde59;">Back!</span></h1>
    <p style="font-size:13px; margin:16px 0; line-height:1.5;">Login to your AYRA account and enjoy a better shopping experience.</p>
    <div style="display:flex; flex-direction:column; gap:10px; font-size:13px; font-weight:600;">
      <div style="display:flex; gap:8px; align-items:center;"><span style="background:#ffde59; color:#000; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Shop Smart</div>
      <div style="display:flex; gap:8px; align-items:center;"><span style="background:#ffde59; color:#000; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Get Exclusive Deals</div>
      <div style="display:flex; gap:8px; align-items:center;"><span style="background:#ffde59; color:#000; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Track Your Orders</div>
    </div>
    <div style="margin-top:20px; font-family:cursive; font-size:22px;"><span>Connect.</span> <span style="color:#ffde59; font-weight:700;">Promote. Sell.</span></div>
  </div>
</div>

<div style="flex:1; background:#fff; padding:28px; display:flex; flex-direction:column; justify-content:center;">
  <h2 style="margin:0; text-align:center; font-size:20px; font-weight:900; color:#0a1f60;">Login to AYRA</h2>
  <p style="text-align:center; font-size:12px; color:#64748b; margin:4px 0 18px;">Enter your details to continue</p>
  <div style="display:flex; flex-direction:column; gap:12px;">
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; display:flex; align-items:center; padding:10px 12px; gap:10px;"><span>📧</span><input id="loginEmail" placeholder="Email Address" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; display:flex; align-items:center; padding:10px 12px; gap:10px;"><span>🔒</span><input id="loginPass" type="password" placeholder="Password" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="display:flex; justify-content:space-between; font-size:11px;"><label><input type="checkbox"/> Remember Me</label><a style="color:#1d4ed8;">Forgot Password?</a></div>
    <button id="loginBtn" style="background:#1d4ed8; color:#fff; border:none; border-radius:10px; padding:12px; font-weight:800; cursor:pointer;">➡️ Login</button>
    <div style="display:flex; align-items:center; gap:12px; font-size:11px; color:#64748b; justify-content:center;"><span style="flex:1; height:1px; background:#e2e8f0;"></span>OR<span style="flex:1; height:1px; background:#e2e8f0;"></span></div>
    <button style="border:1.5px solid #e2e8f0; background:#fff; border-radius:10px; padding:10px; font-weight:600;">Continue with Google</button>
    <button style="border:1.5px solid #e2e8f0; background:#fff; border-radius:10px; padding:10px; font-weight:600;">Continue with Facebook</button>
    <div style="text-align:center; font-size:11px;">Don't have an account? <a href="#register" style="color:#1d4ed8; font-weight:800; text-decoration:none;">Register Now</a></div>
  </div>
</div>

</div>
</div>
`

export const RegisterPage = `
<div style="min-height:100vh; background:#eef3ff; display:flex; align-items:center; justify-content:center; padding:20px; font-family:Inter,sans-serif;">
<div style="display:flex; width:100%; max-width:980px; border-radius:16px; overflow:hidden; box-shadow:0 20px 60px rgba(0,0,0,.2); border:3px solid #1e3a8a;">

<div style="flex:1; background:linear-gradient(180deg, #0a2a7a, #0a1f60); padding:0; display:flex; flex-direction:column; color:#fff;">
  <div style="background:#0a2a7a; padding:14px 20px; display:flex; align-items:center; gap:8px;">
    <div style="font-size:28px;">🛒</div>
    <div style="font-weight:900; font-size:18px;">Λ AYRA</div>
  </div>
  <div style="padding:28px 24px; flex:1;">
    <h2 style="font-size:20px; margin:0;">Join AYRA</h2>
    <h1 style="font-size:48px; margin:0; line-height:.9; font-weight:900; color:#ffde59;">Today!</h1>
    <p style="font-size:14px; margin:14px 0; font-weight:600;">Create your account and start shopping.</p>
    <div style="display:flex; flex-direction:column; gap:12px; margin:20px 0; font-size:13px; font-weight:600;">
      <div style="display:flex; gap:10px;"><span style="background:#ffde59; color:#000; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Shop Online Easily</div>
      <div style="display:flex; gap:10px;"><span style="background:#ffde59; color:#000; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Earn with Affiliate Marketing</div>
      <div style="display:flex; gap:10px;"><span style="background:#ffde59; color:#000; width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center;">✓</span> Get the Best Deals</div>
    </div>
  </div>
  <div style="background:#ffde59; height:100px; display:flex; align-items:center; justify-content:center; font-size:50px;">🛒🛍️</div>
</div>

<div style="flex:1; background:#fff; padding:22px 28px;">
  <h2 style="margin:0; text-align:center; font-size:20px; font-weight:900; color:#0a1f60;">Create Your Account</h2>
  <p style="text-align:center; font-size:12px; color:#64748b; margin:4px 0 14px;">Join our growing community</p>
  <div style="display:flex; flex-direction:column; gap:10px;">
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:9px 12px; display:flex; gap:10px;"><span>👤</span><input id="regName" placeholder="Full Name" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:9px 12px; display:flex; gap:10px;"><span>📧</span><input id="regEmail" placeholder="Email Address" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:9px 12px; display:flex; gap:10px;"><span>📞</span><span style="font-size:11px;">🇨🇲 +237</span><input id="regPhone" placeholder="Phone Number" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:9px 12px; display:flex; gap:10px;"><span>🔒</span><input id="regPass" type="password" placeholder="Password" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <div style="border:1.5px solid #e2e8f0; border-radius:10px; padding:9px 12px; display:flex; gap:10px;"><span>🔒</span><input id="regConfirm" type="password" placeholder="Confirm Password" style="border:none; outline:none; flex:1; font-size:13px;" /></div>
    <button id="registerBtn" style="background:#ffcc00; color:#000; border:none; border-radius:10px; padding:12px; font-weight:900; cursor:pointer;">Register</button>
    <div style="display:flex; align-items:center; gap:12px; font-size:11px; color:#64748b; justify-content:center;"><span style="flex:1; height:1px; background:#e2e8f0;"></span>OR<span style="flex:1; height:1px; background:#e2e8f0;"></span></div>
    <button style="border:1.5px solid #e2e8f0; background:#fff; border-radius:10px; padding:9px; font-weight:600;">Continue with Google</button>
    <button style="border:1.5px solid #e2e8f0; background:#fff; border-radius:10px; padding:9px; font-weight:600;">Continue with Facebook</button>
    <div style="text-align:center; font-size:11px;">Already have an account? <a href="#login" style="color:#1d4ed8; font-weight:800; text-decoration:none;">Login Here</a></div>
  </div>
</div>

</div>
</div>
`

export function initAuth(){
  const loginBtn = document.getElementById('loginBtn')
  if(loginBtn){
    loginBtn.addEventListener('click',()=>{
      const email = (document.getElementById('loginEmail') as HTMLInputElement).value
      if(!email){ alert('Enter email'); return }
      localStorage.setItem('ayra_user', JSON.stringify({email, name: email.split('@')[0]}))
      location.hash = '#'
      location.reload()
    })
  }
  const regBtn = document.getElementById('registerBtn')
  if(regBtn){
    regBtn.addEventListener('click',()=>{
      const name = (document.getElementById('regName') as HTMLInputElement).value
      const email = (document.getElementById('regEmail') as HTMLInputElement).value
      const phone = (document.getElementById('regPhone') as HTMLInputElement).value
      const pass = (document.getElementById('regPass') as HTMLInputElement).value
      const confirm = (document.getElementById('regConfirm') as HTMLInputElement).value
      if(!name || !email || !phone || !pass){ alert('Fill all fields'); return }
      if(pass !== confirm){ alert('Passwords not match'); return }
      localStorage.setItem('ayra_user', JSON.stringify({email, name, phone}))
      location.hash = '#'
      location.reload()
    })
  }
}