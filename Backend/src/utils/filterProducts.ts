
export interface ProductType{
    name: string,
    description: string,
    price: number,
    category:string,
    stock:number,
    createdAt:Date,
    images?: image[],
    reviews?: review[],
    rating?:number,
    noOfReviews:number

}
export interface image{
    public_id:string,
    url:string
}
export interface review{
    name: string,
    rating:string,
    comment:string
}
export  function filterProducts(products : ProductType[], category:string|null,price:number|null){
    const categoryFiltered: ProductType[]= filterByCategory(products,category)
    const finalFilter:ProductType[]= filterByPrice(categoryFiltered,price)
    return finalFilter


}

function filterByCategory(products: ProductType[],category:string|null){
    if ( category==null){
        return products
    }
    else {
      return  products.filter((element)=>element.category==category)
    }
    
}
function filterByPrice(products:ProductType[], price :number|null){
    return price==null?products:products.filter((element)=>element.price<=price)
}