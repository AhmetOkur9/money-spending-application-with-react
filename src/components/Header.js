export default function Header({money,total}){

    function formatPrice(price){
        const number = price
        const largeNumber = number
        const formattedNumber = new Intl.NumberFormat('tr-TR').format(largeNumber);
        return formattedNumber
    }

    return(
        <header>
            <h1>Harcamak için seçtiğiniz miktar:  {formatPrice(money)} TL</h1>
            <h2>Harcadığınız miktar: {formatPrice(total)} TL</h2>
            <h3>Kalan paranız: {formatPrice(money-total)} TL</h3>
        </header>
    )
}