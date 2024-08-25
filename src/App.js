import { useEffect, useState } from 'react';
import './App.css';
import products from "./database/product.json"
import moneyMakers from "./database/moneyMaker.json"

// Components
import Product from './components/Product';
import Header from './components/Header';
import Basket from './components/Basket';

function App() {
  let [money, setMoney] = useState(10000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * products.find(product => product.id === item.id).price)
    }, 0))
  }, [basket])

  



  function moneyChange(event) {
    setMoney(parseInt(event.target.value))
    const warningMessage = window.confirm("Miktarı değiştirirseniz sepet sıfırlanır.Miktarı değiştirmek istiyor musunuz ?")
    if (warningMessage) {
      setBasket([])
    }
  }



  return (
    <div className='container'>
      <div className='header-div'>
        <Header className="header" money={money} total={total} />


        <div className='select-money'>
          <label htmlFor="selectMoney">Kimin Parasını Harcayacağınızı Seçiniz:</label>
          <select className='selectMoney' onChange={e => moneyChange(e)} id="selectMoney" name="selectMoney">
          <option key="0" value="" disabled selected>Seçiniz</option>
            {
              moneyMakers.map((person) => (
                <option key={person.id} value={parseInt(person.money)}>{person.name}</option>
              ))

            }

          </select>
        </div>
      </div>

      <div className='body'>
        <div className='product-card-list'>
          {
            products.map((product, index) => (
              <Product product={product} basket={basket} setBasket={setBasket} money={money} setMoney={setMoney} total={total} />
            ))
          }
        </div>
        <div className='basket'>
          <Basket money={money} basket={basket} setBasket={setBasket} total={total} products={products} />
        </div>
      </div>

    </div>
  );
}

export default App;
