import React from 'react'
import s from './style.module.css'

export default function ProductItem({ id, thumbnail, title, price, discountPercentage, deleteProduct }) {
    return (
        <div className={s.wrapper}>
            <div>
                <img src={thumbnail} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className={s.price}>
                <span>{price}$</span>
                <span>-{discountPercentage}%</span>
            </div>
            <div>
                <button onClick={() => deleteProduct(id)}>Delete</button>
            </div>
        </div>
    )
}
