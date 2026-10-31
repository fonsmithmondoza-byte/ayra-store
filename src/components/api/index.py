from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
  # WOMEN - 4 products
  { "id": 1, "name": "Essential Cotton Tee", "price": 29, "category": "men", "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" },
  { "id": 2, "name": "Linen Blend Trousers", "price": 89, "category": "Women", "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500" },
  { "id": 5, "name": "Silk Summer Dress", "price": 149, "category": "Women", "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500" },
  { "id": 7, "name": "Cashmere Cardigan", "price": 135, "category": "Women", "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500" },

  # MEN - 3 products
  { "id": 4, "name": "Wool Knit Sweater", "price": 120, "category": "Women", "image": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500" },
  { "id": 8, "name": "Classic Oxford Shirt", "price": 75, "category": "Men", "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
  { "id": 9, "name": "Relaxed Chino Pants", "price": 68, "category": "Men", "image": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500" },

  # BAGS - 3 products
  { "id": 3, "name": "Minimal Tote Bag", "price": 45, "category": "Bags", "image": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500" },
  { "id": 6, "name": "Leather Crossbody", "price": 95, "category": "Bags", "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500" },
  { "id": 10, "name": "Canvas Weekender", "price": 110, "category": "Bags", "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },

  # HOME - 2 products
  { "id": 11, "name": "Ceramic Vase Set", "price": 55, "category": "Home", "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500" },
  { "id": 12, "name": "Linen Throw Pillow", "price": 42, "category": "Home", "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500" },
]

@app.route("/api/products")
def get_products():
    category = request.args.get("category")
    if category:
        filtered = [p for p in products if p["category"].lower() == category.lower()]
        return jsonify(filtered)
    return jsonify(products)

@app.route("/api/products/<int:product_id>")
def get_product(product_id):
    prod = next((p for p in products if p["id"] == product_id), None)
    if prod:
        return jsonify(prod)
    return jsonify({"error": "Not found"}), 404

@app.route("/")
def home():
    return "AYRA Python API running - 12 products"

# --- Vercel & Local Compatible ---
if __name__ == "__main__":
    app.run(port=5000, debug=True)