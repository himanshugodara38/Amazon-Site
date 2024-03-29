import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();
  return (
      <div className='header'>
          <Link to={'/'}>
           <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''></img>
 </Link>
             
          <div className='header_search'>
              <input className='header_searchinput' type='text'></input>
              <SearchIcon className='header_searchIcon'></SearchIcon>
          </div>
        
          <div className='header_nav'>
            <Link to='/Login'>
              <div className='header_option'>
                  
                  <span className='header_optionLine1'>Hello Guest</span>
                  <span className='header_optionLine2'>Sign In</span>
                  </div>
                  </Link>
              <div className='header_option'>
                   <span className='header_optionLine1'>Returns</span>
                  <span className='header_optionLine2'>& Orders</span>
              </div>
              <div className='header_option'>
                   <span className='header_optionLine1'>Your</span>
                  <span className='header_optionLine2'>Prime</span>
              </div>
              <Link to={'/Checkout'}>
                  <div className='header_optionBasket'>
                  <ShoppingBasketIcon></ShoppingBasketIcon>
                      <span className='header_optionLine2 header_basketCount'>{basket?.length}</span>
              </div>
              </Link>
              
          </div>
         
     
      </div>
      
     
  )
}

export default Header 
