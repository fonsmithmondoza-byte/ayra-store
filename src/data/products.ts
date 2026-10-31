export const getProducts = async (category?: string) => {
  const res = await fetch("/products.json");
  if (!res.ok) throw new Error("Failed to fetch");
  let data = await res.json();
  if (category) {
    data = data.filter((p: any) => p.category.toLowerCase() === category.toLowerCase());
  }
  return data;
};

export const getProductById = async (id: number) => {
  const products = await getProducts();
  return products.find((p: any) => p.id === id);
};
