document.getElementById("form-add").addEventListener("submit", (event)=> {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const newStudent = {
        name: name,
        price: price,
        category: category
    };
    console.log(newStudent);
    axios.post("http://localhost:3000/products", newStudent).then(() => {
        alert("Thêm sản phẩm thành công");
    });
});