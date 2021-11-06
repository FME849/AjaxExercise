var apiService = new ProductService();

function getELE(id){
    return document.getElementById(id);
}

function getListProduct() {
    apiService
        .getProductApi()
        .then(function(productObj) {
            renderData(productObj.data);
        })
        .catch(function(err){
            console.log(err);
        })
}
getListProduct();

function renderData(productArr) {
    var html = "";
    productArr.forEach(function(product) {
        html+= `<tr>
            <td>${product.id}</td>
            <td>${product.tenSP}</td>
            <td>$ ${product.gia}</td>
            <td style="height: 300px; width: 300px">
                <img src="../../assets/img/${product.hinhAnh}" style="display: block; object-fit: cover; width: 100%;">
            </td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-danger">Xóa</button>
            </td>
        </tr>`
    });
    getELE("tblDanhSachSP").innerHTML = html;
}