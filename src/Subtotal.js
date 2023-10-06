import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
             <CurrencyFormat
            renderText={(value) =>(
                <>
                    <p className='subtotal_it'>
                        Subtotal({basket.length} items):
                            <strong>{value}</strong>
                            <img className='gift_img' src='https://icons.iconarchive.com/icons/miniartx/gifts-2/256/gift-box-icon.png' alt=''></img>
                    </p>
                    <small className="subtotal_gift">
                            <input type="checkbox" /> This Order contains a Gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
      /><button className='subtotal_button'>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
