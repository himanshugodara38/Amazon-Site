import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
          <div className='checkout_left'>
              <img className='checkout_ad' src='https://m.media-amazon.com/images/G/31/img23/boAt/T1/Coop/Jupiter/1500-300-copy-2._CB576922637_.gif' alt=''></img>
              <div>
                  <h2 className='checkout_title'>
                      Your Shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct id={item.id} title={item.title}
              image={item.image}
              price={item.price}
            rating = {item.rating}></CheckoutProduct>
          ))}
            </div>
          </div>
          <div className='checkout_right'>
             <Subtotal />
          </div>
    </div>
  )
}

export default Checkout
