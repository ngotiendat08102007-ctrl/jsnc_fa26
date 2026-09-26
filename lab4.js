function loadProducts(searchTerm = "") {
  axios
  .get("http://localhost:3000/products", {
    params: searchTerm ? { q: searchTerm } : {},
  })
  .then((response) => {
    const products = response.data;
    document.querySelector("tbody#products").innerHTML = products
      .map(
        (product, index) => `
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
            <td class="px-4 py-2 border border-gray-300">${product.id}</td>
            <td class="px-4 py-2 border border-gray-300">${product.name}</td>
            <td class="px-4 py-2 border border-gray-300">${product.price.toLocaleString("vi-VN")} đ</td>
            <td class="px-4 py-2 border border-gray-300">
              <div class="flex items-center justify-center gap-2">
                <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Edit</a>
                <button type="button" class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </td>
          </tr>
        `,
      )
      .join("");
  })
  .catch((error) => {
    console.error("Không tải được danh sách sản phẩm:", error);
  });
}

document.getElementById("productSearchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  loadProducts(document.getElementById("productSearch").value.trim());
});

document.getElementById("clearSearch").addEventListener("click", () => {
  document.getElementById("productSearch").value = "";
  loadProducts();
});

loadProducts();
