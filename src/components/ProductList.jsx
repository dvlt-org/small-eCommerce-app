import React from 'react'
import products from "../products.js"
import ProductCard from './ProductCard'

export default function ProductList({ addToCart }) {
    return (
        <div>
            <h1>Products</h1>
            <div className='product-list'>
                {
                    products.map((item, index) => {
                        return (
                            <ProductCard addToCart={addToCart} product={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
