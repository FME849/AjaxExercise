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
    productArr.forEach(function(product, index) {
        html+= `<tr>
            <td>${index + 1}</td>
            <td>${product.tenSP}</td>
            <td>$ ${product.gia}</td>
            <td style="height: 300px; width: 300px">
                <img src="../../assets/img/${product.hinhAnh}" style="display: block; object-fit: cover; width: 100%;">
            </td>
            <td>${product.moTa}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct('${product.id}')">Delete</button>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editBtn('${product.id}')">Edit</button>
            </td>
        </tr>`
    });
    getELE("tblDanhSachSP").innerHTML = html;
}

function deleteProduct(id) {
    apiService
        .deleteProductApi(id)
        .then(function(productObj) {
            getListProduct();
        })
        .catch(function(err) {
            console.log(err)
        })
}

getELE("btnThemSP").addEventListener("click", function(){
    document.querySelector(".modal-title").innerHTML = "Add Product";
    var footerModal = `<button class="btn btn-success" onclick="addProduct()">Add</button>`;
    document.querySelector(".modal-footer").innerHTML = footerModal;
}) 

function editBtn(id) {
    document.querySelector(".modal-title").innerHTML = "Edit Product";
    var footerModal = `<button class="btn btn-success" onclick="editProduct('${id}')">Update</button>`;
    document.querySelector(".modal-footer").innerHTML = footerModal;
    getProductById(id);
}

function addProduct() {
    var product = new Product();
    product.tenSP = getELE("TenSP").value;
    product.gia = getELE("GiaSP").value;
    product.hinhAnh = getELE("HinhSP").value;
    product.moTa = getELE("MotaSP").value;
    apiService
        .addProductApi(product)
        .then(function() {
            document.querySelector(".modal-header .close").click();
            getListProduct();
        })
        .catch(function(err) {
            console.log(err);
        })
}

function getProductById(id) {
    apiService
        .getProductApiById(id)
        .then(function(productObj){
            console.log(productObj);
            getELE("TenSP").value = productObj.data.tenSP;
            getELE("GiaSP").value = productObj.data.gia;
            getELE("HinhSP").value = productObj.data.hinhAnh;
            getELE("MotaSP").value = productObj.data.moTa;
        })
        .catch(function(err) {
            console.log(err);
        })
}

function editProduct(id) {
    var product = new Product();
    product.tenSP = getELE("TenSP").value;
    product.gia = getELE("GiaSP").value;
    product.hinhAnh = getELE("HinhSP").value;
    product.moTa = getELE("MotaSP").value;
    apiService
        .editProductApi(id, product)
        .then(function(){
            document.querySelector(".modal-header .close").click();
            getListProduct();
        })
        .catch(function(err) {
            console.log(err);
        })
}