export default function BasketItem({item , product}){
    return(
        <li>{product.name} x {item.amount}</li>
    )
}