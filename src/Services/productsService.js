import api from "./api";

const getListProducts = () => api.get(api.url.products).then((res) => res.data);
const createProduct = (data) =>
    api.post(api.url.products, data).then((res) => res.data);
const updateProduct = (id, data) =>
    api.put(`${api.url.products}/${id}`, data).then((res) => res.data);
const deleteProduct = (id) =>
    api.delete(`${api.url.products}/${id}`).then((res) => res.data);
const getIdProduct = (id) =>
    api.get(`${api.url.products}/${id}`).then((res) => res.data);
  
const productsService = {
    getListProducts,
    get: getIdProduct,
    add: createProduct,
    update: updateProduct,
    delete: deleteProduct,

};


export default productsService;