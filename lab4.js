axios
  .get("http://localhost:3000/products")
  .then((response) => {
    const products = response.data;
    document.getElementById("products").innerHTML = products
      .map(
        (product) => `
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">${product.id}</td>
            <td class="px-4 py-2 border border-gray-300">${product.name}</td>
            <td class="px-4 py-2 border border-gray-300">${product.price.toLocaleString("vi-VN")} đ</td>
          </tr>
        `,
      )
      .join("");
  })
  .catch((error) => {
    console.error("Không tải được danh sách sản phẩm:", error);
  });
