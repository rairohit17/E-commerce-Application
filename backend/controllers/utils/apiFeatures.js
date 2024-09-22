
export function filterProductsByPrice(products,price){
    if (!price){
        return products;
    }
    else{
        return products.filter((element)=> element.price<= price
            
        )
    }

}


