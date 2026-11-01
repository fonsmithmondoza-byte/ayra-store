import pathlib
root = pathlib.Path('src')
fixed = []
for pattern in ['*.ts','*.tsx','*.js','*.jsx']:
    for p in root.rglob(pattern):
        try:
            t = p.read_text(encoding='utf-8')
            if 'api/products' in t or 'http://api' in t or '127.0.0.1:5000' in t or 'pro"/products' in t:
                print(f"FOUND IN: {p}")
                fixed.append(str(p))
                new = t.replace('http://api/pro"/products.json"ducts','/products.json')
                new = new.replace('http://api/products','/products.json')
                new = new.replace('"/api/products"','"/products.json"')
                new = new.replace("'/api/products'","'/products.json'")
                new = new.replace('http://127.0.0.1:5000/api/products','/products.json')
                new = new.replace('http://localhost:5000/api/products','/products.json')
                new = new.replace('/api/products','/products.json')
                p.write_text(new, encoding='utf-8')
        except Exception as e:
            print(f"Skip {p}: {e}")

print(f"\nFixed {len(fixed)} files")