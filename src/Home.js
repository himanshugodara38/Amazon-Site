import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className = "home">
          <div className='home_container'>
              <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/Kickstarter/Hero/Final/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_Jupiter1_PC_Hero_3000x1200_2._CB577020131_.jpg'
          alt=''></img>
        
             <div className="home__row">
          <Product
            id="12321341"
            title="A new Mac with heavy Discount 128GB , 8GB RAM , 144Hz Refresh Rate"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71kDCavI6JS._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="A new HP with heavy Discount with Webcam , 500GB SSD , Windows 11 , 16GB RAM"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71jnByVetPL._AC_UY327_FMwebp_QL65_.jpg"
          />
          
        </div>

        <div className="home__row">
        
        
          <Product
            id="3254354345"
            title="A new Samsung M34 with heavy Discount"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL480_QL65_.jpg"
          />
           <Product
            id="90829332"
            title="A new OnePlus Nord CE 3 with heavy Discount"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL480_QL65_.jpg"
          />
            <Product
            id="90829332"
            title="A new IQOO Z7 5G with heavy Discount"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UL480_QL65_.jpg"
          />
           <Product
            id="90829332"
            title=">A new Apple Iphone 13 with heavy Discount"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL480_QL65_.jpg"
          />
        </div>
        <div className='home__row'>
  <Product
            id="23445930"
            title="A new Soundcore Anker Q10 with heavy Discount , Bass Boosted , Comfortable Weared , Black , Bluetooth 5.0"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/419Jypq4buL._AC_SR400,600_AGcontrast_.jpg"
          />
  <Product
            id="23445930"
            title="Infinity - JBL Clubz Mini, Wireless Ultra Portable Mini Speaker with Mic, Deep Bass, Dual Equalizer, Bluetooth 5.0 "
            price={98.99}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41TAKjYMgxL._AC_SX184_.jpg"
          />
       </div>
        </div>
    </div>
  )
}

export default Home
