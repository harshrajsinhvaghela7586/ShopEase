const BASE_URL = "https://dummyjson.com/products";

// 1. GET ALL GIRLS PRODUCTS
export async function getAllGirlsProducts() {
  const categories = [
    "womens-dresses",
    "womens-shoes",
    "womens-bags",
    "womens-jewellery",
    "womens-watches",
  ];

  try {
    const requests = categories.map((cat) => fetch(`${BASE_URL}/category/${cat}`));
    const responses = await Promise.all(requests);
    
    for (const res of responses) {
      if (!res.ok) throw new Error("Failed to fetch product category.");
    }

    const dataPromises = responses.map((res) => res.json());
    const results = await Promise.all(dataPromises);
    
    return results.flatMap((item) => item.products);
  } catch (err) {
    throw new Error(err.message || "Failed to fetch girls products collection.");
  }
}

// 2. GET PRODUCTS BY CATEGORY
export async function getProductsByCategory(category) {
  const response = await fetch(`${BASE_URL}/category/${category}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch category: ${category}`);
  }
  const data = await response.json();
  return data.products;
}

// 3. CREATE PRODUCT (POST)
export async function createProduct(productData) {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!response.ok) {
    throw new Error("Failed to create new product.");
  }
  return await response.json();
}

// 4. DELETE PRODUCT (DELETE)
export async function deleteProduct(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete product.");
  }
  return await response.json();
}