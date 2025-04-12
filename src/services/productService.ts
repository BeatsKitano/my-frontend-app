// services/product.ts
const BACKEND_API_URL = process.env.BACKEND_API_URL;

export async function getProducts() {
  const res = await fetch(`${BACKEND_API_URL}/products`, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}

export async function createProduct(data: any) {
  const res = await fetch(`${BACKEND_API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}
