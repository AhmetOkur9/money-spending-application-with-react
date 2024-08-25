import { useState } from "react"

import "../css/productCard.css"



function Product({ product, basket, setBasket, money, setMoney, total }) {

    const basketItem = basket.find(item => item.id === product.id)

    function addBasket(event) {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    function removeBasket() {
        const checkBasket = basket.find(item => item.id === product.id)
        const currentBasket = basket.filter(item => item.id !== product.id)
        checkBasket.amount -= 1
        if (checkBasket.amount === 0) {
            setBasket([...currentBasket])
        } else {
            setBasket([...currentBasket, checkBasket])
        }
    }

    function formatPrice(){
        const number = product.price
        const largeNumber = number
        const formattedNumber = new Intl.NumberFormat('tr-TR').format(largeNumber);
        return formattedNumber
    }


    return (
        <div className="product-card">
            <div className="product-img-div">
                <img src={product.img} alt="" />
            </div>
            <div className="product-card-info">
                <h1>{product.name}</h1>
                <h2>{formatPrice()} TL</h2>

            </div>
            <div className="buy-div">
                <button className="sell-button" disabled={!basketItem} onClick={removeBasket}>Sat</button>
                <h2 className="amount-info">{basketItem && basketItem.amount || 0}</h2>
                <button className="buy-button" disabled={total + product.price > money} onClick={e => addBasket(e)}>Satın Al</button>
            </div>
        </div>
    )
}

export default Product