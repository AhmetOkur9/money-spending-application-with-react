import BasketItem from "./BasketItem"
import "../css/basket.css"

export default function Basket({money, basket, setBasket , total ,products}){   
    
    function clearBasket(){
        const message = window.confirm("Sepeti temizlemek istediğinizden emin misiniz ?")
        if(message){
            setBasket([])
        }
    }

    function formatPrice(price){
        const number = price
        const largeNumber = number
        const formattedNumber = new Intl.NumberFormat('tr-TR').format(largeNumber);
        return formattedNumber
    }

    return(
        <div>
            <div>
                <h1>Ürünler</h1>
            </div>
            <div>
                <ul>
                    {
                        basket.map(item => (
                            <BasketItem item={item} product={products.find(product => product.id === item.id)}/>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h2>Sepet Tutarı: {formatPrice(total)} TL</h2>
                <button disabled={basket.length < 1} className="clear-basket-button" onClick={clearBasket}>Sepeti Temizle</button>
            </div>
        </div>
    )
}