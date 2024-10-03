"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterProducts = filterProducts;
function filterProducts(products, category, price) {
    const categoryFiltered = filterByCategory(products, category);
    const finalFilter = filterByPrice(categoryFiltered, price);
    return finalFilter;
}
function filterByCategory(products, category) {
    if (category == null) {
        return products;
    }
    else {
        return products.filter((element) => element.category == category);
    }
}
function filterByPrice(products, price) {
    return price == null ? products : products.filter((element) => element.price <= price);
}
