import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())

const JWT_SECRET = process.env.JWT_SECRET || 'ayra-super-secret-2026'
const DATA_DIR = path.join('/tmp', 'ayra-data')
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, {recursive:true})

const USERS_FILE = path.join(DATA_DIR, 'users.json')
const PRODS_FILE = path.join(DATA_DIR, 'products.json')
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]')
if (!fs.existsSync(PRODS_FILE)) {
  const seed = [{id:1,name:"AYRA Classic Tote",price:89,image:"https://via.placeholder.com/400",sellerId:0,category:"bags",approved:true}]
  fs.writeFileSync(PRODS_FILE, JSON.stringify(seed))
}

const readUsers = ()=> JSON.parse(fs.readFileSync(USERS_FILE,'utf8'))
const writeUsers = (d)=> fs.writeFileSync(USERS_FILE, JSON.stringify(d,null,2))
const readProds = ()=> JSON.parse(fs.readFileSync(PRODS_FILE,'utf8'))
const writeProds = (d)=> fs.writeFileSync(PRODS_FILE, JSON.stringify(d,null,2))

function auth(req,res,next){
  const h=req.headers.authorization
  if(!h) return res.status(401).json({error:'No token'})
  try{
    req.user = jwt.verify(h.replace('Bearer ',''), JWT_SECRET)
    next()
  }catch{ res.status(401).json({error:'Invalid token'}) }
}

app.post('/api/auth/register', async (req,res)=>{
  const {name,email,password}=req.body
  if(!email||!password) return res.status(400).json({error:'Missing fields'})
  const users=readUsers()
  if(users.find(u=>u.email===email)) return res.status(400).json({error:'Email exists'})
  const hash=await bcrypt.hash(password,10)
  const user={id:Date.now(),name,email,password:hash,role:users.length===0?'super_admin':'seller',created:Date.now()}
  users.push(user); writeUsers(users)
  const token=jwt.sign({id:user.id,email:user.email,role:user.role,name:user.name},JWT_SECRET)
  res.json({token,user:{id:user.id,name:user.name,email:user.email,role:user.role}})
})

app.post('/api/auth/login', async (req,res)=>{
  const {email,password}=req.body
  const users=readUsers()
  const u=users.find(x=>x.email===email)
  if(!u) return res.status(400).json({error:'User not found'})
  const ok=await bcrypt.compare(password,u.password)
  if(!ok) return res.status(400).json({error:'Wrong password'})
  const token=jwt.sign({id:u.id,email:u.email,role:u.role,name:u.name},JWT_SECRET)
  res.json({token,user:{id:u.id,name:u.name,email:u.email,role:u.role}})
})

app.get('/api/products', (req,res)=>{
  const prods=readProds().filter(p=>p.approved!==false)
  res.json(prods)
})
app.get('/api/products/my', auth, (req,res)=>{
  const prods=readProds().filter(p=>p.sellerId===req.user.id)
  res.json(prods)
})
app.post('/api/products', auth, (req,res)=>{
  const {name,price,image,category}=req.body
  const prods=readProds()
  const newP={id:Date.now(),name,price:Number(price),image,category:category||'general',sellerId:req.user.id,sellerName:req.user.name,approved:true}
  prods.push(newP); writeProds(prods)
  res.json(newP)
})
app.delete('/api/products/:id', auth, (req,res)=>{
  let prods=readProds()
  const p=prods.find(x=>x.id==req.params.id)
  if(!p) return res.status(404).json({error:'Not found'})
  if(p.sellerId!==req.user.id && req.user.role!=='super_admin') return res.status(403).json({error:'Forbidden'})
  prods=prods.filter(x=>x.id!=req.params.id); writeProds(prods)
  res.json({ok:true})
})
app.get('/api/admin/all', auth, (req,res)=>{
  if(req.user.role!=='super_admin') return res.status(403).json({error:'Admin only'})
  res.json({users:readUsers().map(u=>({id:u.id,name:u.name,email:u.email,role:u.role})),products:readProds()})
})

export default app