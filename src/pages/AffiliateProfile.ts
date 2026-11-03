export const AffiliateProfile = `
<style>
.aff-wrap{font-family:Inter,sans-serif; background:#f0f2f5; min-height:100vh;}
.aff-cover{position:relative; height:380px; background:#e4e6eb; overflow:hidden;}
.aff-cover img{width:100%; height:100%; object-fit:cover;}
.aff-cover-btn{position:absolute; right:16px; bottom:16px; background:#fff; border:none; padding:8px 12px; border-radius:6px; font-weight:700; font-size:12px; cursor:pointer; box-shadow:0 2px 8px rgba(0,0,0,.15);}
.aff-profile-row{background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.1); padding:0 4%;}
.aff-avatar-wrap{position:relative; width:168px; height:168px; margin-top:-80px; border:4px solid #fff; border-radius:50%; background:#fff; overflow:hidden;}
.aff-avatar-wrap img{width:100%; height:100%; object-fit:cover;}
.aff-avatar-cam{position:absolute; right:8px; bottom:8px; width:36px; height:36px; background:#e4e6eb; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:18px;}
.aff-name{font-size:32px; font-weight:800; margin:12px 0 4px;}
.aff-bio{color:#65676b; font-size:15px; max-width:500px; line-height:1.4;}
.aff-body{display:grid; grid-template-columns:360px 1fr; gap:16px; padding:16px 4%; max-width:1250px; margin:0 auto;}
.aff-card{background:#fff; border-radius:8px; box-shadow:0 1px 2px rgba(0,0,0,.1); padding:16px;}
.aff-card-title{font-weight:800; font-size:17px; margin-bottom:12px;}
.story-bar{display:flex; gap:10px; overflow-x:auto;}
.story-item{min-width:112px; height:198px; border-radius:10px; position:relative; overflow:hidden; cursor:pointer; background:#f0f2f5; border:1px solid #ddd;}
.story-item img{width:100%; height:100%; object-fit:cover;}
.story-label{position:absolute; bottom:6px; left:6px; right:6px; color:#fff; font-weight:700; font-size:12px; text-shadow:0 1px 4px rgba(0,0,0,.8);}
.post-create{display:flex; gap:10px; align-items:center;}
.post-create input{flex:1; background:#f0f2f5; border:none; border-radius:20px; padding:10px 14px; font-size:14px; outline:none;}
.post-act{flex:1; display:flex; justify-content:center; gap:6px; padding:8px; border-radius:6px; cursor:pointer; font-weight:600; font-size:13px; color:#65676b;}
.post-card{background:#fff; border-radius:8px; box-shadow:0 1px 2px rgba(0,0,0,.1); overflow:hidden; margin-bottom:16px;}
.modal-bg{position:fixed; top:0; left:0; width:100%; height:100vh; background:rgba(255,255,255,.8); z-index:10000; display:none; align-items:center; justify-content:center;}
.modal-box{background:#fff; width:500px; max-width:92vw; border-radius:8px; box-shadow:0 8px 30px rgba(0,0,0,.25); overflow:hidden;}
@media(max-width:900px){.aff-body{grid-template-columns:1fr; padding:12px 2%;}.aff-avatar-wrap{width:120px; height:120px; margin-top:-60px;}.aff-name{font-size:24px;}.aff-cover{height:220px;}}
</style>

<div class="aff-wrap">
  <div class="aff-cover">
    <img id="coverImg" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200" />
    <button id="editCoverBtn" class="aff-cover-btn">Edit Cover Photo</button>
    <input type="file" id="coverInput" accept="image/*" style="display:none;" />
  </div>
  <div class="aff-profile-row">
    <div style="display:flex; gap:20px; flex-wrap:wrap; align-items:flex-end; max-width:1250px; margin:0 auto;">
      <div class="aff-avatar-wrap">
        <img id="avatarImg" src="" />
        <div id="editAvatarBtn" class="aff-avatar-cam">Cam</div>
        <input type="file" id="avatarInput" accept="image/*" style="display:none;" />
      </div>
      <div style="flex:1; min-width:260px; padding-bottom:12px;">
        <div id="profileName" class="aff-name">Loading...</div>
        <div id="profileBio" class="aff-bio"></div>
        <div style="margin-top:8px; font-size:14px; color:#65676b;"><b id="followersCount">3.4K</b> followers • <b>1.2K</b> friends</div>
      </div>
      <div style="display:flex; gap:8px; margin:16px 0 20px;">
        <button id="addStoryBtn" style="background:#0a1f60; color:#fff; border:none; padding:8px 14px; border-radius:6px; font-weight:700; cursor:pointer;">Add to Story</button>
        <button id="editProfileBtn" style="background:#e4e6eb; border:none; padding:8px 14px; border-radius:6px; font-weight:700; cursor:pointer;">Edit Profile</button>
      </div>
    </div>
  </div>
  <div class="aff-body">
    <div>
      <div class="aff-card"><div class="aff-card-title">Intro</div><div id="introBio" style="font-size:14px; line-height:1.5;"></div><div id="affLinkDisplay" style="color:#0a1f60; font-weight:700; font-size:12px; word-break:break-all; margin-top:8px;"></div><div id="photosGrid" style="display:grid; grid-template-columns:repeat(3,1fr); gap:4px; margin-top:12px;"></div></div>
    </div>
    <div>
      <div class="aff-card"><div class="aff-card-title">Stories</div><div id="storiesBar" class="story-bar"></div></div>
      <div class="aff-card" style="margin-top:16px;"><div class="post-create"><img id="postAvatar" src="" style="width:40px; height:40px; border-radius:50%;" /><input id="postInput" placeholder="Whats on your mind?" readonly style="cursor:pointer;" /></div><div style="display:flex; margin-top:12px; border-top:1px solid #e4e6eb; padding-top:8px;"><div id="postPhotoBtn" class="post-act">Photo/Video</div><div id="postProductBtn" class="post-act">Attach Product</div></div></div>
      <div id="postsFeed" style="margin-top:16px;"></div>
    </div>
  </div>
</div>

<div id="editModal" class="modal-bg"><div class="modal-box"><div style="padding:16px; display:flex; justify-content:space-between;"><b>Edit Profile</b><span id="closeEditModal" style="cursor:pointer; font-weight:900;">X</span></div><div style="padding:16px; display:flex; flex-direction:column; gap:10px;"><input id="editName" placeholder="Name" style="padding:10px; border:1px solid #ccc; border-radius:6px;" /><textarea id="editBio" placeholder="Bio" style="padding:10px; border:1px solid #ccc; border-radius:6px;"></textarea><input id="editContact" placeholder="Contact" style="padding:10px; border:1px solid #ccc; border-radius:6px;" /><input id="editAffCode" placeholder="Affiliate Code" style="padding:10px; border:1px solid #ccc; border-radius:6px;" /><button id="saveProfileBtn" style="background:#0a1f60; color:#fff; border:none; padding:10px; border-radius:6px; font-weight:800; cursor:pointer;">Save</button></div></div></div>

<div id="postModal" class="modal-bg"><div class="modal-box"><div style="padding:16px; display:flex; justify-content:space-between;"><b>Create Post</b><span id="closePostModal" style="cursor:pointer; font-weight:900;">X</span></div><div style="padding:16px;"><textarea id="modalText" placeholder="Whats on your mind?" style="width:100%; min-height:90px; border:none; font-size:18px; outline:none;"></textarea><div id="modalPreview" style="display:none; margin:10px 0;"></div><input type="file" id="modalFileInput" accept="image/*,video/*" style="display:none;" /><div id="attachedProduct" style="display:none; background:#fffbeb; border:1px dashed #facc15; padding:10px; border-radius:8px; margin:10px 0;"></div><button id="publishPostBtn" style="width:100%; margin-top:10px; background:#0a1f60; color:#fff; border:none; padding:10px; border-radius:6px; font-weight:800; cursor:pointer;">Post</button><div style="display:flex; gap:12px; margin-top:12px;"><span id="modalAddPhoto" style="cursor:pointer;">Photo</span><span id="modalAddProduct" style="cursor:pointer;">Product</span></div></div></div></div>

<div id="storyModal" class="modal-bg" style="background:rgba(0,0,0,.9);"><div style="width:360px; height:640px; background:#000; border-radius:10px; overflow:hidden; position:relative;"><div id="storyModalContent" style="width:100%; height:100%;"></div><div id="closeStoryModal" style="position:absolute; top:10px; right:10px; color:#fff; background:rgba(255,255,255,.2); width:30px; height:30px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">X</div></div></div>
`

export function initAffiliateProfile(){
  const user = JSON.parse(localStorage.getItem('ayra_user') || 'null')
  const userName = user ? (user.name || user.email) : 'fonsmithmondoza'
  const ref = userName.replace(/\s+/g,'').toLowerCase()
  const affLink = 'https://ayra-store.vercel.app/?ref=' + ref

  let profile: any = JSON.parse(localStorage.getItem('ayra_profile') || 'null')
  if(!profile){
    profile = {
      name: userName,
      bio: 'Affiliate entrepreneur at AYRA Marketplace Cameroon',
      contact: '+237 6 XX XX XX XX',
      cover: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200',
      avatar: 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName) + '&background=0f172a&color=fff&size=300',
      affCode: ref
    }
  }

  function $(id: string){ return document.getElementById(id)! }

  $('profileName').textContent = profile.name
  $('profileBio').textContent = profile.bio
  $('introBio').textContent = profile.bio
  $('affLinkDisplay').textContent = affLink
  ;( $('coverImg') as HTMLImageElement).src = profile.cover
  ;( $('avatarImg') as HTMLImageElement).src = profile.avatar
  ;( $('postAvatar') as HTMLImageElement).src = profile.avatar
  ;( $('postInput') as HTMLInputElement).placeholder = "Whats on your mind, " + profile.name + "?"

  function saveProfile(){ localStorage.setItem('ayra_profile', JSON.stringify(profile)) }

  $('editCoverBtn').addEventListener('click', function(){ $('coverInput').click() })
  $('coverInput').addEventListener('change', function(e: any){
    var file = e.target.files[0]; if(!file) return
    var r = new FileReader()
    r.onload = function(ev: any){
      profile.cover = ev.target.result
      ;( $('coverImg') as HTMLImageElement).src = profile.cover
      saveProfile()
    }
    r.readAsDataURL(file)
  })

  $('editAvatarBtn').addEventListener('click', function(){ $('avatarInput').click() })
  $('avatarInput').addEventListener('change', function(e: any){
    var file = e.target.files[0]; if(!file) return
    var r = new FileReader()
    r.onload = function(ev: any){
      profile.avatar = ev.target.result
      ;( $('avatarImg') as HTMLImageElement).src = profile.avatar
      ;( $('postAvatar') as HTMLImageElement).src = profile.avatar
      saveProfile()
    }
    r.readAsDataURL(file)
  })

  var editModal = $('editModal')
  function openEdit(){
    ;( $('editName') as HTMLInputElement).value = profile.name
    ;( $('editBio') as HTMLTextAreaElement).value = profile.bio
    ;( $('editContact') as HTMLInputElement).value = profile.contact
    ;( $('editAffCode') as HTMLInputElement).value = profile.affCode
    editModal.style.display = 'flex'
  }
  function closeEdit(){ editModal.style.display = 'none' }
  $('editProfileBtn').addEventListener('click', openEdit)
  $('closeEditModal').addEventListener('click', closeEdit)
  $('saveProfileBtn').addEventListener('click', function(){
    profile.name = ( $('editName') as HTMLInputElement).value || profile.name
    profile.bio = ( $('editBio') as HTMLTextAreaElement).value || profile.bio
    profile.contact = ( $('editContact') as HTMLInputElement).value || profile.contact
    profile.affCode = ( $('editAffCode') as HTMLInputElement).value || profile.affCode
    saveProfile()
    location.reload()
  })

  var stories: any[] = JSON.parse(localStorage.getItem('ayra_stories') || '[]')
  var now = Date.now()
  stories = stories.filter(function(s: any){ return now - s.time < 24*60*60*1000 })
  localStorage.setItem('ayra_stories', JSON.stringify(stories))

  function renderStories(){
    var bar = $('storiesBar')
    var html = '<div id="createStoryCard" class="story-item" style="display:flex; flex-direction:column;"><div style="height:132px;"><img src="' + profile.avatar + '" style="width:100%; height:100%; object-fit:cover;" /></div><div style="padding:8px; text-align:center; font-size:12px; font-weight:700;">Create Story</div></div>'
    for(var i=0;i<stories.length;i++){
      html += '<div class="story-item" data-story="' + i + '"><img src="' + stories[i].image + '" /><div class="story-label">' + (stories[i].label || 'My Story') + '</div></div>'
    }
    html += '<div class="story-item" style="display:flex; align-items:center; justify-content:center; background:#e4e6eb;"><b>Travel</b></div><div class="story-item" style="display:flex; align-items:center; justify-content:center; background:#fffbeb;"><b>Tips</b></div><div class="story-item" style="display:flex; align-items:center; justify-content:center; background:#f0fdf4;"><b>Products</b></div>'
    bar.innerHTML = html

    var createCard = document.getElementById('createStoryCard')
    if(createCard){
      createCard.addEventListener('click', function(){
        var input = document.createElement('input'); input.type='file'; input.accept='image/*,video/*'
        input.onchange = function(e: any){
          var file = e.target.files[0]; if(!file) return
          var r2 = new FileReader()
          r2.onload = function(ev: any){
            stories.unshift({ image: ev.target.result, label: 'My Story', time: Date.now() })
            localStorage.setItem('ayra_stories', JSON.stringify(stories))
            renderStories()
          }
          r2.readAsDataURL(file)
        }
        input.click()
      })
    }
    bar.querySelectorAll('[data-story]').forEach(function(el: any){
      el.addEventListener('click', function(){
        var idx = el.getAttribute('data-story')
        var s = stories[idx]
        $('storyModalContent').innerHTML = '<img src="' + s.image + '" style="width:100%; height:100%; object-fit:contain; background:#000;" />'
        $('storyModal').style.display = 'flex'
      })
    })
  }
  renderStories()
  $('closeStoryModal').addEventListener('click', function(){ $('storyModal').style.display='none' })

  var posts: any[] = JSON.parse(localStorage.getItem('ayra_posts') || '[]')
  var attachedProduct: any = null
  var modalImage: string | null = null

  function savePosts(){ localStorage.setItem('ayra_posts', JSON.stringify(posts)) }

  function renderPosts(){
    var feed = $('postsFeed')
    var photosGrid = $('photosGrid')
    if(posts.length===0){
      feed.innerHTML = '<div style="background:#fff; padding:40px; border-radius:8px; text-align:center; color:#65676b;">No posts yet</div>'
      photosGrid.innerHTML = ''
      return
    }
    var out = ''
    for(var i=0;i<posts.length;i++){
      var p = posts[i]
      out += '<div class="post-card">'
      out += '<div style="padding:12px 16px; display:flex; gap:10px; align-items:center;"><img src="' + profile.avatar + '" style="width:40px; height:40px; border-radius:50%;" /><div><div style="font-weight:700; font-size:14px;">' + profile.name + '</div><div style="font-size:11px; color:#65676b;">' + new Date(p.time).toLocaleString() + '</div></div></div>'
      if(p.text){ out += '<div style="padding:0 16px 12px; font-size:15px;">' + p.text + '</div>' }
      if(p.image){ out += '<img src="' + p.image + '" style="width:100%; max-height:600px; object-fit:contain; background:#f0f2f5;" />' }
      if(p.product){
        out += '<div style="padding:12px 16px; display:flex; gap:10px; background:#f8fafc; border-top:1px solid #e4e6eb;"><img src="' + p.product.image + '" style="width:60px; height:60px; object-fit:contain; background:#fff; border:1px solid #eee; border-radius:6px;" /><div><div style="font-weight:700; font-size:13px;">' + p.product.name + '</div><div style="font-weight:800; color:#0a1f60;">' + Number(p.product.price).toLocaleString() + ' FCFA</div><a href="' + p.product.affLink + '" target="_blank" style="font-size:11px; color:#fff; background:#0a1f60; padding:4px 8px; border-radius:4px; text-decoration:none;">Buy via my link</a></div></div>'
      }
      out += '<div style="display:flex; justify-content:space-between; padding:10px 16px; font-size:13px; color:#65676b; border-top:1px solid #e4e6eb;"><span>' + (p.likes||0) + ' likes</span><span>' + ((p.comments||[]).length) + ' comments - ' + (p.shares||0) + ' shares</span></div>'
      out += '<div style="display:flex; border-top:1px solid #e4e6eb;"><div class="post-act like-btn" data-idx="' + i + '">Like</div><div class="post-act comment-btn" data-idx="' + i + '">Comment</div><div class="post-act share-btn" data-idx="' + i + '">Share</div></div>'
      out += '<div style="padding:8px 16px; background:#f0f2f5; display:flex; gap:8px;"><input class="comment-input" data-idx="' + i + '" placeholder="Write a comment..." style="flex:1; border:none; background:#fff; border-radius:16px; padding:8px 12px; font-size:13px;" /></div>'
      if(p.comments){
        for(var c=0;c<p.comments.length;c++){
          out += '<div style="padding:6px 16px 6px 52px; font-size:13px;"><b>' + p.comments[c].name + ':</b> ' + p.comments[c].text + '</div>'
        }
      }
      out += '</div>'
    }
    feed.innerHTML = out

    var imgs = ''
    for(var j=0;j<posts.length;j++){ if(posts[j].image && j<9){ imgs += '<img src="' + posts[j].image + '" style="width:100%; aspect-ratio:1; object-fit:cover; border-radius:6px;" />' } }
    photosGrid.innerHTML = imgs

    feed.querySelectorAll('.like-btn').forEach(function(el: any){
      el.addEventListener('click', function(){
        var idx = Number(el.getAttribute('data-idx')); var post = posts[idx]
        if(post.liked){ post.likes--; post.liked=false } else { post.likes = (post.likes||0)+1; post.liked=true }
        savePosts(); renderPosts()
      })
    })
    feed.querySelectorAll('.share-btn').forEach(function(el: any){
      el.addEventListener('click', function(){
        var idx = Number(el.getAttribute('data-idx')); posts[idx].shares = (posts[idx].shares||0)+1; savePosts(); renderPosts()
        var link = posts[idx].product ? posts[idx].product.affLink : affLink
        navigator.clipboard.writeText(link); alert('Affiliate link copied!')
      })
    })
    feed.querySelectorAll('.comment-input').forEach(function(el: any){
      el.addEventListener('keydown', function(ev: KeyboardEvent){
        if(ev.key==='Enter'){
          var idx = Number(el.getAttribute('data-idx')); var text = (el as HTMLInputElement).value.trim(); if(!text) return
          posts[idx].comments = posts[idx].comments || []; posts[idx].comments.push({ name: profile.name, text: text }); (el as HTMLInputElement).value=''; savePosts(); renderPosts()
        }
      })
    })
  }
  renderPosts()

  var postModal = $('postModal')
  function openPostModal(){ postModal.style.display='flex' }
  function closePostModal(){
    postModal.style.display='none'
    ;( $('modalText') as HTMLTextAreaElement).value=''
    $('modalPreview').style.display='none'
    $('modalPreview').innerHTML=''
    $('attachedProduct').style.display='none'
    attachedProduct=null
    modalImage=null
  }
  $('postInput').addEventListener('click', openPostModal)
  $('postPhotoBtn').addEventListener('click', openPostModal)
  $('closePostModal').addEventListener('click', closePostModal)

  $('modalAddPhoto').addEventListener('click', function(){ $('modalFileInput').click() })
  $('modalFileInput').addEventListener('change', function(e: any){
    var file = e.target.files[0]; if(!file) return
    var r = new FileReader()
    r.onload = function(ev: any){
      modalImage = ev.target.result
      $('modalPreview').style.display='block'
      $('modalPreview').innerHTML = '<img src="' + modalImage + '" style="width:100%; max-height:400px; object-fit:contain;" />'
    }
    r.readAsDataURL(file)
  })

  function pickProduct(){
    fetch('/products.json').then(function(res){ return res.json() }).then(function(prods: any[]){
      var list = ''
      for(var i=0;i<Math.min(10, prods.length);i++){ list += i + ': ' + prods[i].name + '\n' }
      var choice = prompt('Enter product number 0-' + (prods.length-1) + ':\n' + list)
      if(choice===null) return
      var idx = Number(choice)
      if(isNaN(idx) || !prods[idx]){ alert('Invalid'); return }
      var prod = prods[idx]
      var price = prod.price < 5000 ? prod.price*650 : prod.price
      attachedProduct = { name: prod.name, image: prod.image, price: price, affLink: affLink + '&product=' + prod.id }
      $('attachedProduct').style.display='block'
      $('attachedProduct').innerHTML = '<div style="display:flex; gap:8px; align-items:center;"><img src="' + prod.image + '" style="width:50px; height:50px; object-fit:contain; background:#fff; border-radius:6px;" /><div><b>' + prod.name + '</b><br/><span style="color:#0a1f60; font-weight:800;">' + Number(price).toLocaleString() + ' FCFA</span></div></div>'
    })
  }
  $('postProductBtn').addEventListener('click', function(){ openPostModal(); setTimeout(pickProduct, 200) })
  $('modalAddProduct').addEventListener('click', pickProduct)

  $('publishPostBtn').addEventListener('click', function(){
    var text = ( $('modalText') as HTMLTextAreaElement).value.trim()
    if(!text && !modalImage && !attachedProduct){ alert('Write something'); return }
    var newPost = { text: text, image: modalImage, product: attachedProduct, time: Date.now(), likes:0, liked:false, shares:0, comments:[] }
    posts.unshift(newPost)
    savePosts()
    renderPosts()
    closePostModal()
  })

  $('addStoryBtn').addEventListener('click', function(){
    var el = document.getElementById('createStoryCard')
    if(el) el.click()
  })
}