function ProductService() {
    this.getProductApi = function() {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/products",
            method: "GET",
        });
    };

    this.deleteProductApi = function(id) {
        return axios ({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/products/${id}`,
            method: "DELETE",
        });
    };

    this.addProductApi = function(product) {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/products",
            method: "POST",
            data: product,
        });
    };

    this.getProductApiById = function(id) {
        return axios({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/products/${id}`,
            method: "GET",
        });
    };

    this.editProductApi = function(id, product) {
        return axios({
            url: `https://6183cac591d76c00172d1b4f.mockapi.io/api/products/${id}`,
            method: "PUT",
            data: product,
        })
    };
}