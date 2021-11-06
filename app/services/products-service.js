function ProductService() {
    this.getProductApi = function() {
        return axios({
            url: "https://6183cac591d76c00172d1b4f.mockapi.io/api/products",
            method: "GET"
        })
    }
}