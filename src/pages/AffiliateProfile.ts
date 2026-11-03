export const AffiliateProfile = `
<style>
.aff-wrap{font-family:Inter,sans-serif; background:#f0f2f5; min-height:100vh;}
.aff-cover{position:relative; height:380px; background:#e4e6eb; overflow:hidden;}
.aff-cover img{width:100%; height:100%; object-fit:cover;}
.aff-cover-btn{position:absolute; right:16px; bottom:16px; background:#fff; border:none; padding:8px 12px; border-radius:6px; font-weight:700; font-size:12px; cursor:pointer; display:flex; gap:6px; align-items:center; box-shadow:0 2px 8px rgba(0,0,0,.15);}
.aff-profile-row{background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.1); padding:0 4%;}
.aff-avatar-wrap{position:relative; width:168px; height:168px; margin-top:-80px; border:4px solid #fff; border-radius:50%; background:#fff; overflow:hidden;}
.aff-avatar-wrap img{width:100%; height:100%; object-fit:cover;}
.aff-avatar-cam{position:absolute; right:8px; bottom:8px; width:36px; height:36px; background:#e4e6eb; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:18px;}
.aff-name{font-size:32px; font-weight:800; margin:12px 0 4px;}
.aff-bio{color:#65676b; font-size:15px; max-width:500px; line-height:1.4;}
.aff-stats{display:flex; gap:8px; margin:10px 0; font-size:14px; color:#65676b;}
.aff-actions{display:flex; gap:8px; margin:16px 0 20px; flex-wrap:wrap;}
.aff-btn{padding:8px 14px; border-radius:6px; border:none; font-weight:700; font-size:14px; cursor:pointer; display:flex; gap:6px; align-items:center;}
.aff-btn-primary{background:#0a1f60; color:#fff;}
.aff-btn-light{background:#e4e6eb; color:#111;}
.aff-body{display:grid; grid-template-columns:360px 1fr; gap:16px; padding:16px 4%; max-width:1250px; margin:0 auto;}
.aff-left, .aff-right{display:flex; flex-direction:column; gap:16px;}
.aff-card{background:#fff; border-radius:8px; box-shadow:0 1px 2px rgba(0,0,0,.1); padding:16px;}
.aff-card-title{font-weight:800; font-size:17px; margin-bottom:12px;}
.story-bar{display:flex; gap:10px; overflow-x:auto; padding-bottom:4px;}
.story-item{min-width:112px; height:198px; border-radius:10px; position:relative; overflow:hidden; cursor:pointer; background:#f0f2f5; border:1px solid #ddd;}
.story-item img{width:100%; height:100%; object-fit:cover;}
.story-create{display:flex; flex-direction:column;}
.story-create-top{height:132px; background:#f0f2f5; display:flex; align-items:center; justify-content:center;}
.story-create-bottom{padding:8px; background:#fff; text-align:center; font-size:12px; font-weight:700;}
.story-label{position:absolute; bottom:6px; left:6px; right:6px; color:#fff; font-weight:700; font-size:12px; text-shadow:0 1px 4px rgba(0,0,0,.8);}
.post-create{display:flex; gap:10px; align-items:center;}
.post-create input{flex:1; background:#f0f2f5; border:none; border-radius:20px; padding:10px 14px; font-size:14px; outline:none;}
.post-actions{display:flex; justify-content:space-around; border-top:1px solid #e4e6eb; margin-top:12px; padding-top:8px;}
.post-act{flex:1; display:flex; justify-content:center; gap:6px; padding:8px; border-radius:6px; cursor:pointer; font-weight:600; font-size:13px; color:#65676b;}
.post-act:hover{background:#f0f2f5;}
.post-card{background:#fff; border-radius:8px; box-shadow:0 1px 2px rgba(0,0,0,.1); overflow:hidden;}
.post-head{padding:12px 16px; display:flex; gap:10px; align-items:center;}
.post-body-text{padding:0 16px 12px; font-size:15px; line-height:1.4;}
.post-img{width:100%; max-height:600px; object-fit:contain; background:#f0f2f5;}
.post-stats{display:flex; justify-content:space-between; padding:10px 16px; font-size:13px; color:#65676b; border-bottom:1px solid #e4e6eb;}
.modal-bg{position:fixed; top:0; left:0; width:100%; height:100vh; background:rgba(255,255,255,.8); z-index:10000; display:none; align-items:center; justify-content:center;}
.modal-box{background:#fff; width:500px; max-width:92vw; border-radius:8px; box-shadow:0 8px 30px rgba(0,0,0,.25); overflow:hidden;}
@media(max-width:900px){
  .aff-body{grid-template-columns:1fr; padding:12px 2%;}
  .aff-avatar-wrap{width:120px; height:120px; margin-top:-60px;}
  .aff-name{font-size:24px;}
  .aff-cover{height:220px;}
}
</style>

<div class="aff-wrap">
  <!-- COVER -->
  <div class="aff-cover">
    <img id="coverImg" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200" />
    <button id="editCoverBtn" class="aff-cover-btn">📷 Edit Cover Photo</button>
    <input type="file" id="coverInput" accept="image/*" style="display:none;" />
  </div>

  <!-- PROFILE HEADER -->
  <div class="aff-profile-row">
    <div style="display:flex; gap:20px; flex-wrap:wrap; align-items:flex-end; max-width:1250px; margin:0 auto;">
      <div class="aff-avatar-wrap">
        <img id="avatarImg" src="https://ui-avatars.com/api/?name=AYRA&background=0f172a&color=fff&size=300" />
        <div id="editAvatarBtn" class="aff-avatar-cam">📷</div>
        <input type="file" id="avatarInput" accept="image/*" style="display:none;" />
      </div>
      <div style="flex:1; min-width:260px; padding-bottom:12px;">
        <div id="profileName" class="aff-name">fonsmithmondoza</div>
        <div id="profileBio" class="aff-bio">Affiliate entrepreneur | Helping you shop smart and live better with AYRA Marketplace 🛍️ Cameroon 🇨🇲</div>
        <div class="aff-stats">
          <span><b id="friendsCount">1.2K</b> friends</span> • <span><b id="followersCount">3.4K</b> followers</span> • <span><b id="followingCount">245</b> following</span>
        </div>
        <div style="display:flex; gap:6px; margin-top:8px;">
          <img src="https://i.pravatar.cc/100?img=1" style="width:32px; height:32px; border-radius:50%; border:2px solid #fff; margin-left:0;" />
          <img src="https://i.pravatar.cc/100?img=2" style="width:32px; height:32px; border-radius:50%; border:2px solid #fff; margin-left:-10px;" />
          <img src="https://i.pravatar.cc/100?img=3" style="width:32px; height:32px; border-radius:50%; border:2px solid #fff; margin-left:-10px;" />
          <span style="font-size:12px; color:#65676b; margin-left:6px; align-self:center;">and 1K others</span>
        </div>
      </div>
      <div class="aff-actions">
        <button id="addStoryBtn" class="aff-btn aff-btn-primary">➕ Add to Story</button>
        <button id="editProfileBtn" class="aff-btn aff-btn-light">✏️ Edit Profile</button>
        <button id="moreBtn" class="aff-btn aff-btn-light">•••</button>
      </div>
    </div>
    <div style="display:flex; gap:20px; border-top:1px solid #e4e6eb; margin-top:10px; max-width:1250px; margin-left:auto; margin-right:auto;">
      <div style="padding:14px 4px; font-weight:700; border-bottom:3px solid #0a1f60; color:#0a1f60; cursor:pointer;">Posts</div>
      <div style="padding:14px 4px; color:#65676b; font-weight:600; cursor:pointer;">About</div>
      <div style="padding:14px 4px; color:#65676b; font-weight:600; cursor:pointer;">Friends</div>
      <div style="padding:14px 4px; color:#65676b; font-weight:600; cursor:pointer;">Photos</div>
      <div style="padding:14px 4px; color:#65676b; font-weight:600; cursor:pointer;">Products</div>
    </div>
  </div>

  <!-- BODY -->
  <div class="aff-body">
    <div class="aff-left">
      <div class="aff-card">
        <div class="aff-card-title">Intro</div>
        <div id="introBio" style="font-size:14px; line-height:1.5; text-align:center;">Shop smart, earn more. Affiliate marketer at AYRA.<br/>📍 Yaoundé, Cameroon<br/>🔗 <span id="affLinkDisplay" style="color:#0a1f60; font-weight:700; word-break:break-all;">ayra-store.vercel.app/?ref=fonsmithmondoza</span></div>
        <button id="editIntroBtn" style="width:100%; margin-top:12px; background:#e4e6eb; border:none; padding:8px; border-radius:6px; font-weight:700; cursor:pointer;">Edit Details</button>
        <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
          <div style="display:flex; gap:8px; font-size:14px;"><span>💼</span> Affiliate at AYRA Marketplace</div>
          <div style="display:flex; gap:8px; font-size:14px;"><span>🎓</span> Studied at University of Yaoundé</div>
          <div style="display:flex; gap:8px; font-size:14px;"><span>📍</span> Lives in Yaoundé</div>
          <div style="display:flex; gap:8px; font-size:14px;"><span>🔗</span> <span id="walletInfo">Wallet: 0 FCFA</span></div>
        </div>
      </div>

      <div class="aff-card">
        <div style="display:flex; justify-content:space-between; align-items:center;"><div class="aff-card-title">Photos</div><span style="color:#0a1f60; font-size:13px; cursor:pointer;">See all photos</span></div>
        <div id="photosGrid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:4px;"></div>
      </div>

      <div class="aff-card">
        <div class="aff-card-title">Friends <span style="font-weight:400; color:#65676b; font-size:13px;">1,235 friends</span></div>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px;">
          <div style="text-align:center;"><img src="https://i.pravatar.cc/100?img=5" style="width:100%; border-radius:8px;" /><div style="font-size:11px; font-weight:600; margin-top:4px;">Marie</div></div>
          <div style="text-align:center;"><img src="https://i.pravatar.cc/100?img=6" style="width:100%; border-radius:8px;" /><div style="font-size:11px; font-weight:600; margin-top:4px;">Paul</div></div>
          <div style="text-align:center;"><img src="https://i.pravatar.cc/100?img=7" style="width:100%; border-radius:8px;" /><div style="font-size:11px; font-weight:600; margin-top:4px;">Grace</div></div>
        </div>
      </div>
    </div>

    <div class="aff-right">
      <!-- STORIES -->
      <div class="aff-card">
        <div style="display:flex; justify-content:space-between;"><div class="aff-card-title">Stories</div><span id="storyArchive" style="color:#0a1f60; font-size:13px; cursor:pointer;">Archive • Highlights</span></div>
        <div id="storiesBar" class="story-bar"></div>
      </div>

      <!-- CREATE POST -->
      <div class="aff-card">
        <div class="post-create">
          <img id="postAvatar" src="https://ui-avatars.com/api/?name=AYRA&background=0f172a&color=fff&size=100" style="width:40px; height:40px; border-radius:50%;" />
          <input id="postInput" placeholder="What's on your mind, fonsmithmondoza?" readonly style="cursor:pointer;" />
        </div>
        <div class="post-actions">
          <div id="postPhotoBtn" class="post-act">📷 Photo/Video</div>
          <div id="postLiveBtn" class="post-act">🔴 Live Video</div>
          <div id="postProductBtn" class="post-act">🛍️ Attach Product</div>
        </div>
      </div>

      <!-- POSTS FEED -->
      <div id="postsFeed" style="display:flex; flex-direction:column; gap:16px;"></div>
    </div>
  </div>
</div>

<!-- EDIT PROFILE MODAL -->
<div id="editModal" class="modal-bg">
  <div class="modal-box">
    <div style="padding:16px; border-bottom:1px solid #e4e6eb; display:flex; justify-content:space-between; align-items:center;"><div style="font-weight:800; font-size:20px; flex:1; text-align:center;">Edit Profile</div><div id="closeEditModal" style="width:32px; height:32px; background:#e4e6eb; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:900;">✕</div></div>
    <div style="padding:16px; display:flex; flex-direction:column; gap:12px;">
      <label style="font-weight:700; font-size:13px;">Name</label><input id="editName" style="border:1px solid #ccd0d5; padding:10px; border-radius:6px; font-size:14px;" />
      <label style="font-weight:700; font-size:13px;">Bio</label><textarea id="editBio" rows="3" style="border:1px solid #ccd0d5; padding:10px; border-radius:6px; font-size:14px;"></textarea>
      <label style="font-weight:700; font-size:13px;">Contact / Phone</label><input id="editContact" style="border:1px solid #ccd0d5; padding:10px; border-radius:6px; font-size:14px;" placeholder="+237 ..." />
      <label style="font-weight:700; font-size:13px;">Affiliate Code</label><input id="editAffCode" style="border:1px solid #ccd0d5; padding:10px; border-radius:6px; font-size:14px;" />
      <button id="saveProfileBtn" style="background:#0a1f60; color:#fff; border:none; padding:10px; border-radius:6px; font-weight:800; cursor:pointer; margin-top:8px;">Save Changes</button>
    </div>
  </div>
</div>

<!-- CREATE POST MODAL -->
<div id="postModal" class="modal-bg">
  <div class="modal-box">
    <div style="padding:16px; border-bottom:1px solid #e4e6eb; display:flex; justify-content:space-between; align-items:center;"><div style="font-weight:800; font-size:20px; flex:1; text-align:center;">Create Post</div><div id="closePostModal" style="width:32px; height:32px; background:#e4e6eb; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:900;">✕</div></div>
    <div style="padding:16px;">
      <div style="display:flex; gap:10px; align-items:center; margin-bottom:12px;"><img id="modalAvatar" src="https://ui-avatars.com/api/?name=AYRA&background=0f172a&color=fff&size=100" style="width:40px; height:40px; border-radius:50%;" /><div><div id="modalName" style="font-weight:700;">fonsmithmondoza</div><div style="font-size:11px; background:#e4e6eb; padding:2px 6px; border-radius:4px; display:inline-block;">🌍 Public</div></div></div>
      <textarea id="modalText" placeholder="What's on your mind?" style="width:100%; min-height:90px; border:none; font-size:18px; outline:none; resize:none;"></textarea>
      <div id="modalPreview" style="display:none; margin:10px 0; border-radius:8px; overflow:hidden; border:1px solid #e4e6eb;"></div>
      <input type="file" id="modalFileInput" accept="image/*,video/*" style="display:none;" />
      <div id="attachedProduct" style="display:none; background:#fffbeb; border:1px dashed #facc15; padding:10px; border-radius:8px; margin:10px 0; font-size:13px;"></div>
      <div style="border:1px solid #ccd0d5; border-radius:8px; padding:10px; display:flex; justify-content:space-between; align-items:center; margin-top:12px;">
        <div style="font-weight:600; font-size:13px;">Add to your post</div>
        <div style="display:flex; gap:12px; font-size:20px;">
          <span id="modalAddPhoto" style="cursor:pointer;">📷</span>
          <span id="modalAddProduct" style="cursor:pointer;">🛍️</span>
          <span style="cursor:pointer;">😊</span>
        </div>
      </div>
      <button id="publishPostBtn" style="width:100%; margin-top:14px; background:#0a1f60; color:#fff; border:none; padding:10px; border-radius:6px; font-weight:800; cursor:pointer; font-size:15px;">Post</button>
    </div>
  </div>
</div>

<!-- STORY MODAL -->
<div id="storyModal" class="modal-bg" style="background:rgba(0,0,0,.9);">
  <div style="position:relative; width:360px; max-width:92vw; height:640px; background:#000; border-radius:10px; overflow:hidden;">
    <div id="storyModalContent" style="width:100%; height:100%;"></div>
    <div id="closeStoryModal" style="position:absolute; top:12px; right:12px; width:32px; height:32px; background:rgba(255,255,255,.2); color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-weight:900;">✕</div>
  </div>
</div>
`

export function initAffiliateProfile(){
  const user = JSON.parse(localStorage.getItem('ayra_user')||'null')
  const userName = user?.name || user?.email || 'fonsmithmondoza'
  const refCode = userName.replace(/\\s+/g,'').toLowerCase()
  const affLink = \`https://ayra-store.vercel.app/?ref=\${refCode}\`

  // PROFILE DEFAULTS
  let profile = JSON.parse(localStorage.getItem('ayra_profile')||'null') || {
    name: userName,
    bio: 'Affiliate entrepreneur | Helping you shop smart and live better with AYRA Marketplace 🛍️ Cameroon 🇨🇲',
    contact: '+237 6 XX XX XX XX',
    cover: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200',
    avatar: \`https://ui-avatars.com/api/?name=\${encodeURIComponent(userName)}&background=0f172a&color=fff&size=300\`,
    affCode: refCode
  }

  const $ = (id:string)=>document.getElementById(id)!

  // Load
  $('profileName').textContent = profile.name
  $('modalName').textContent = profile.name
  $('profileBio').textContent = profile.bio
  $('introBio').innerHTML = \`\${profile.bio}<br/>📍 Yaoundé, Cameroon<br/>🔗 <span style="color:#0a1f60; font-weight:700; word-break:break-all;">\${affLink}</span>\`
  $('affLinkDisplay').textContent = affLink
  $('coverImg').setAttribute('src', profile.cover)
  $('avatarImg').setAttribute('src', profile.avatar)
  $('postAvatar').setAttribute('src', profile.avatar)
  $('modalAvatar').setAttribute('src', profile.avatar)
  $('postInput').setAttribute('placeholder', \`What's on your mind, \${profile.name}?\`)

  // SAVE PROFILE
  function saveProfile(){ localStorage.setItem('ayra_profile', JSON.stringify(profile)) }

  // COVER UPLOAD
  $('editCoverBtn').addEventListener('click', ()=> $('coverInput').click())
  $('coverInput').addEventListener('change', (e:any)=>{
    const file = e.target.files[0]; if(!file) return
    const reader = new FileReader(); reader.onload = (ev:any)=>{ profile.cover = ev.target.result; $('coverImg').setAttribute('src', profile.cover); saveProfile() }; reader.readAsDataURL(file)
  })

  // AVATAR UPLOAD
  $('editAvatarBtn').addEventListener('click', ()=> $('avatarInput').click())
  $('avatarInput').addEventListener('change', (e:any)=>{
    const file = e.target.files[0]; if(!file) return
    const reader = new FileReader(); reader.onload = (ev:any)=>{ profile.avatar = ev.target.result; $('avatarImg').setAttribute('src', profile.avatar); $('postAvatar').setAttribute('src', profile.avatar); $('modalAvatar').setAttribute('src', profile.avatar); saveProfile() }; reader.readAsDataURL(file)
  })

  // EDIT MODAL
  const editModal = $('editModal')
  function openEdit(){ $('editName').value = profile.name; $('editBio').value = profile.bio; $('editContact').value = profile.contact; $('editAffCode').value = profile.affCode; editModal.style.display='flex' }
  function closeEdit(){ editModal.style.display='none' }
  $('editProfileBtn').addEventListener('click', openEdit)
  $('editIntroBtn').addEventListener('click', openEdit)
  $('closeEditModal').addEventListener('click', closeEdit)
  editModal.addEventListener('click', (e:any)=>{ if(e.target.id==='editModal') closeEdit() })
  $('saveProfileBtn').addEventListener('click', ()=>{
    profile.name = ($('editName') as HTMLInputElement).value || profile.name
    profile.bio = ($('editBio') as HTMLTextAreaElement).value || profile.bio
    profile.contact = ($('editContact') as HTMLInputElement).value || profile.contact
    profile.affCode = ($('editAffCode') as HTMLInputElement).value || profile.affCode
    saveProfile(); location.reload()
  })

  // STORIES
  let stories = JSON.parse(localStorage.getItem('ayra_stories')||'[]') as any[]
  // cleanup 24h
  const now = Date.now()
  stories = stories.filter((s:any)=> now - s.time < 24*60*60*1000)
  localStorage.setItem('ayra_stories', JSON.stringify(stories))

  function renderStories(){
    const bar = $('storiesBar')
    const createHtml = \`
      <div id="createStoryCard" class="story-item story-create">
        <div class="story-create-top"><img src="\${profile.avatar}" style="width:100%; height:100%; object-fit:cover;" /></div>
        <div style="position:absolute; left:50%; top:118px; transform:translateX(-50%); width:32px; height:32px; background:#0a1f60; border:3px solid #fff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:900;">+</div>
        <div class="story-create-bottom">Create Story</div>
      </div>
    \`
    const others = stories.map((s:any,i:number)=>\`
      <div class="story-item" data-story="\${i}">
        <img src="\${s.image}" />
        <div class="story-label">\${s.label || 'My Story'}</div>
      </div>
    \`).join('')
    const highlights = \`
      <div class="story-item" style="background:#e4e6eb; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:6px;"><div style="font-size:24px;">✈️</div><div style="font-weight:700; font-size:12px;">Travel</div></div>
      <div class="story-item" style="background:#fffbeb; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:6px;"><div style="font-size:24px;">💡</div><div style="font-weight:700; font-size:12px;">Business Tips</div></div>
      <div class="story-item" style="background:#f0fdf4; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:6px;"><div style="font-size:24px;">🛍️</div><div style="font-weight:700; font-size:12px;">My Products</div></div>
    \`
    bar.innerHTML = createHtml + others + highlights

    $('createStoryCard')?.addEventListener('click', ()=>{
      const input = document.createElement('input'); input.type='file'; input.accept='image/*,video/*'
      input.onchange = (e:any)=>{
        const file = e.target.files[0]; if(!file) return
        const r = new FileReader(); r.onload = (ev:any)=>{
          stories.unshift({ image: ev.target.result, label: 'My Story', time: Date.now() })
          localStorage.setItem('ayra_stories', JSON.stringify(stories)); renderStories()
        }; r.readAsDataURL(file)
      }; input.click()
    })

    bar.querySelectorAll('[data-story]').forEach((el:any)=>{
      el.addEventListener('click', ()=>{
        const idx = el.getAttribute('data-story')
        const s = stories[idx]
        $('storyModalContent').innerHTML = \`<img src="\${s.image}" style="width:100%; height:100%; object-fit:contain; background:#000;" />\`
        $('storyModal').style.display='flex'
      })
    })
  }
  renderStories()
  $('closeStoryModal').addEventListener('click', ()=> $('storyModal').style.display='none')
  $('storyModal').addEventListener('click', (e:any)=>{ if(e.target.id==='storyModal') $('storyModal').style.display='none' })

  // POSTS
  let posts = JSON.parse(localStorage.getItem('ayra_posts')||'[]') as any[]
  let attachedProduct: any = null
  let modalImage: string | null = null

  function savePosts(){ localStorage.setItem('ayra_posts', JSON.stringify(posts)) }

  function renderPosts(){
    const feed = $('postsFeed')
    const photosGrid = $('photosGrid')
    if(!posts.length){
      feed.innerHTML = \`<div style="background:#fff; padding:40px; border-radius:8px; text-align:center; color:#65676b;">No posts yet. Share your first product! 🛍️</div>\`
      photosGrid.innerHTML = ''
      return
    }
    feed.innerHTML = posts.map((p:any, idx:number)=>\`
      <div class="post-card">
        <div class="post-head">
          <img src="\${profile.avatar}" style="width:40px; height:40px; border-radius:50%;" />
          <div style="flex:1;"><div style="font-weight:700; font-size:14px;">\${profile.name}</div><div style="font-size:11px; color:#65676b;">\${new Date(p.time).toLocaleString()} • 🌍</div></div>
          <div style="cursor:pointer;">•••</div>
        </div>
        \${p.text ? \`<div class="post-body-text">\${p.text}</div>\` : ''}
        \${p.image ? \`<img class="post-img" src="\${p.image}" />\` : ''}
        \${p.product ? \`<div style="padding:12px 16px; display:flex; gap:10px; background:#f8fafc; border-top:1px solid #e4e6eb; align-items:center;"><img src="\${p.product.image}" style="width:60px; height:60px; object-fit:contain; background:#fff; border-radius:6px; border:1px solid #e4e6eb;" /><div style="flex:1;"><div style="font-weight:700; font-size:13px;">\${p.product.name}</div><div style="font-weight:800; color:#0a1f60;">\${Number(p.product.price).toLocaleString()} FCFA</div><a href="\${p.product.affLink}" target="_blank" style="font-size:11px; color:#fff; background:#0a1f60; padding:4px 8px; border-radius:4px; text-decoration:none; display:inline-block; margin-top:4px;">Buy via my link ↗</a></div></div>\` : ''}
        <div class="post-stats"><span>👍 \${p.likes || 0} likes</span><span>\${p.comments?.length || 0} comments • \${p.shares || 0} shares</span></div>
        <div style="display:flex; border-top:1px solid #e4e6eb;">
          <div class="post-act like-btn" data-idx="\${idx}" style="\${p.liked ? 'color:#0a1f60;' : ''}">👍 Like</div>
          <div class="post-act comment-btn" data-idx="\${idx}">💬 Comment</div>
          <div class="post-act share-btn" data-idx="\${idx}">↗ Share</div>
        </div>
        <div style="padding:8px 16px; background:#f0f2f5; display:flex; gap:8px;"><img src="\${profile.avatar}" style="width:28px; height:28px; border-radius:50%;" /><input class="comment-input" data-idx="\${idx}" placeholder="Write a comment..." style="flex:1; border:none; background:#fff; border-radius:16px; padding:8px 12px; font-size:13px; outline:none;" /></div>
        \${(p.comments||[]).map((c:any)=>\`<div style="padding:6px 16px 6px 52px; font-size:13px; display:flex; gap:6px;"><b>\${c.name}:</b> <span>\${c.text}</span></div>\`).join('')}
      </div>
    \`).join('')

    const allImgs = posts.filter((p:any)=>p.image).slice(0,9).map((p:any)=>\`<img src="\${p.image}" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:6px;" />\`).join('')
    photosGrid.innerHTML = allImgs || '<div style="color:#65676b; font-size:12px;">No photos yet</div>'

    feed.querySelectorAll('.like-btn').forEach((el:any)=>{
      el.addEventListener('click', ()=>{
        const i = Number(el.getAttribute('data-idx')); const post = posts[i]
        if(post.liked){ post.likes--; post.liked=false } else { post.likes = (post.likes||0)+1; post.liked=true }
        savePosts(); renderPosts()
      })
    })
    feed.querySelectorAll('.share-btn').forEach((el:any)=>{
      el.addEventListener('click', ()=>{
        const i = Number(el.getAttribute('data-idx')); posts[i].shares = (posts[i].shares||0)+1; savePosts(); renderPosts()
        const shareLink = posts[i].product ? posts[i].product.affLink : affLink
        navigator.clipboard.writeText(shareLink); alert('Affiliate link copied! Share it to earn commission 🔗')
      })
    })
    feed.querySelectorAll('.comment-input').forEach((el:any)=>{
      el.addEventListener('keydown', (ev:KeyboardEvent)=>{
        if(ev.key==='Enter'){
          const i = Number(el.getAttribute('data-idx')); const text = (el as HTMLInputElement).value.trim(); if(!text) return
          posts[i].comments = posts[i].comments || []; posts[i].comments.push({ name: profile.name, text }); (el as HTMLInputElement).value=''; savePosts(); renderPosts()
        }
      })
    })
  }
  renderPosts()

  // POST MODAL
  const postModal = $('postModal')
  function openPostModal(){ postModal.style.display='flex'; ($('modalText') as HTMLTextAreaElement).focus() }
  function closePostModal(){ postModal.style.display='none'; ($('modalText') as HTMLTextAreaElement).value=''; $('modalPreview').style.display='none'; $('modalPreview').innerHTML=''; $('attachedProduct').style.display='none'; attachedProduct=null; modalImage=null }
  $('postInput').addEventListener('click', openPostModal)
  $('postPhotoBtn').addEventListener('click', openPostModal)
  $('closePostModal').addEventListener('click', closePostModal)
  postModal.addEventListener('click', (e:any)=>{ if(e.target.id==='postModal') closePostModal() })
  $('modalAddPhoto').addEventListener('click', ()=> $('modalFileInput').click())
  $('postPhotoBtn').addEventListener('click', ()=> setTimeout(()=> $('modalFileInput').click(), 100))

  $('modalFileInput').addEventListener('change', (e:any)=>{
    const file = e.target.files[0]; if(!file) return
    const r = new FileReader(); r.onload = (ev:any)=>{
      modalImage = ev.target.result
      $('modalPreview').style.display='block'
      $('modalPreview').innerHTML = file.type.startsWith('video') ? \`<video src="\${modalImage}" controls style="width:100%; max-height:400px;"></video>\` : \`<img src="\${modalImage}" style="width:100%; max-height:400px; object-fit:contain;" />\`
    }; r.readAsDataURL(file)
  })

  async function pickProduct(){
    try{
      const res = await fetch('/products.json'); const prods = await res.json()
      const choice = prompt('Enter product number to attach (0-' + (prods.length-1) + '):\\n' + prods.slice(0,10).map((p:any,i:number)=> i + ': ' + p.name).join('\\n'))
      if(choice===null) return; const idx = Number(choice); if(isNaN(idx) || !prods[idx]) return alert('Invalid product')
      const prod = prods[idx]
      attachedProduct = { ...prod, price: prod.price < 5000 ? prod.price*650 : prod.price, affLink: affLink + '&product=' + prod.id }
      $('attachedProduct').style.display='block'
      $('attachedProduct').innerHTML = \`<div style="display:flex; gap:8px; align-items:center;"><img src="\${prod.image}" style="width:50px; height:50px; object-fit:contain; background:#fff; border-radius:6px;" /><div><b>\${prod.name}</b><br/><span style="color:#0a1f60; font-weight:800;">\${Number(attachedProduct.price).toLocaleString()} FCFA</span><br/><span style="font-size:11px; color:#65676b;">Affiliate link: \${attachedProduct.affLink}</span></div><span id="removeProd" style="margin-left:auto; cursor:pointer; background:#fee; padding:4px 8px; border-radius:4px;">✕</span></div>\`
      $('removeProd')?.addEventListener('click', ()=>{ attachedProduct=null; $('attachedProduct').style.display='none' })
    }catch{ alert('Failed to load products.json') }
  }
  $('postProductBtn').addEventListener('click', ()=>{ openPostModal(); setTimeout(pickProduct, 300) })
  $('modalAddProduct').addEventListener('click', pickProduct)

  $('publishPostBtn').addEventListener('click', ()=>{
    const text = ($('modalText') as HTMLTextAreaElement).value.trim()
    if(!text && !modalImage && !attachedProduct) return alert('Write something or add photo/product')
    const newPost = { text, image: modalImage, product: attachedProduct, time: Date.now(), likes:0, liked:false, shares:0, comments:[] }
    posts.unshift(newPost); savePosts(); renderPosts(); closePostModal()
  })

  $('addStoryBtn').addEventListener('click', ()=> $('createStoryCard')?.click())
}