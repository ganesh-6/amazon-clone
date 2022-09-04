import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home_image" src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt=""/>
        
            <div className="home__row">
                <Product 
                    id="123456"
                    title="Realme Techlife Buds T100 with up to 28 Hours Playback & AI ENC for Calls Bluetooth Headset (Black, True Wireless)"
                    image="https://m.media-amazon.com/images/I/61aasAbKvvL._SX679_.jpg"
                    price={1499.00}
                    rating={4}
                />
                <Product 
                    id="123457"
                    title="Acer Nitro 5 Gaming Laptop/ 12th Gen Intel Core i5-12500H Processor 12 core/ 15.6''(39.6cms) FHD 144Hz Display (8GB/512GB SSD/RTX 3050 Graphics/Windows 11 Home/RGB), AN515-58 + Xbox Game Pass Ultimate"
                    image="https://m.media-amazon.com/images/I/91U5Ler19jL._SX679_.jpg"
                    price={78990.00}
                    rating={5}
                />
            </div>
            
            <div className="home__row">
                <Product 
                    id="123458"
                    title="Apple Polycarbonate Clear Case with Magsafe for iPhone 12 Pro Max"
                    image="https://images-eu.ssl-images-amazon.com/images/I/31C3wENzu-L._SX300_SY300_QL70_FMwebp_.jpg"
                    price={1299.00}
                    rating={3}
                />
                <Product 
                    id="123459"
                    title="Gaiatop Small Desk Fan, Portable 3 Speeds Wind Desktop Table Cooling Fan in Single Button , Adjustment Mini Personal Fan for Home Desktop Office Car Outdoor"
                    image="https://m.media-amazon.com/images/I/71HTftYEVTL._SX569_.jpg"
                    price={530.00}
                    rating={4}
                />
                <Product 
                    id="123460"
                    title="Zebronics Zeb-Transformer Gaming Keyboard and Mouse Combo (USB, Braided Cable)"
                    image="https://images-eu.ssl-images-amazon.com/images/I/51YSwNjbFOL._SX300_SY300_QL70_FMwebp_.jpg"
                    price={1329.00}
                    rating={2}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="123461"
                    title="Newly Launched pTron Bassbuds Revv Wireless in-Ear Earphone with ENC for Best Calling, 50ms Low Latency, 13mm Driver, Punchy Bass, BT5.3, Touch Control TWS Earbuds, Dual Mic & Type-C Charging (Black)"
                    image="https://m.media-amazon.com/images/I/51aCcbRF3fL._SY450_.jpg"
                    price={1266.00}
                    rating={3}
                />
            </div>
        </div>
    </div>
  )
}

export default Home;