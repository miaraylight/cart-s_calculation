import React from 'react'
import { useState, useEffect } from 'react';
import ProductItem from '../ProductItem';
import s from './style.module.css'

export default function ProductContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(resp => resp.json())
            .then(data => setProducts(data.products))
    }, [])

    const deleteProduct = (deleteItemId) => {
        setProducts(products.filter(({ id }) => id !== deleteItemId))
    }

    const totalCount = products.length;

    const totalPrise = products.reduce((prev, product) => prev + product.price, 0)

    const totalPriceWithDiscount = products.reduce((acc, product) => product.price - ((product.price / 100) * product.discountPercentage) + acc, 0)

    return (
        <div>
            <h1>Something Like Store</h1>
            <div className={s.container}>
                <div className={s.wrapper}>
                    {
                        products.map(product => <ProductItem key={product.id} {...product} deleteProduct={deleteProduct} />)
                    }
                </div>
                <div className={s.total}>
                    <p>Total count: {totalCount}</p>
                    <p>Total price: {totalPrise}</p>
                    <p>Total price with discount:   {totalPriceWithDiscount.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
