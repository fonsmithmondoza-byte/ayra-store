import pathlib
root = pathlib.Path('src')
for pat in ['*.ts','*.tsx','*.js','*.jsx']:
    for f in root.rglob(pat):
        try:
            t=f.read_text(encoding='utf-8')
            if 'api/products' in t or 'http://api' in t or '127.0.0.1' in t or 'pro"/products' in t:
                print(f"FOUND: {f}")
                n=t.replace('http://api/pro"/products.json"ducts','/products.json').replace('http://api/products','/products.json').replace('"/api/products"','"/products.json"').replace("'/api/products'","'/products.json'").replace('http://127.0.0.1:5000/api/products','/products.json').replace('http://localhost:5000/api/products','/products.json').replace('/api/products','/products.json')
                f.write_text(n,encoding='utf-8')
        except: pass
print("DONE - Now check src/data/products.ts")