import React, { useState } from 'react';
import './App.css';
import PrimarySearchAppBar from './component/navber';
import Category from './component/category.js';
import addImage from './images/add.png'
import Curosel from './component/curosel';
import Gol from './component/gol';
import Card from './component/card';
import CardWithDetail from './component/cardwithdetail';
import MegaDeals from './component/megaDeals';
import ThreeCards from './component/threeCards';
import ClearanceDeal from './component/clearanceDeal';
import Footer from './component/footer';
import GiftCard from './component/giftCard';

function App(props) {

  const [card, setCard] = useState([
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1633343872/N40633047A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1633754977/N22732308A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1643021846/N37619548A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
    {
      imgSrc: "https://z.nooncdn.com/products/tr:n-t_240/v1633374485/N39265265A_1.jpg",
      dis: "T500 Bluetooth Full Touch Call Smartwatch…",
      price: "3700"
    },
  ])
  const [footer, setFooter] = useState([
    {
      heading:"ELECTRONICS",
      mobile: "MOBILE",
      tablet: "TABLETS",
      leptop: "LAPTOP",
      home: "HOME APPLIANCES",
      camera: "CAMERA PHOTO AND VIDEO",
      television: "TELEVISION",
      headphone: "HEADPHONES",
      videoGames: "VIDEO GAMES"

    },
    {
      heading:'FASHION',
      mobile: "Women's Fashion",
      tablet: "Men's Fashion",
      leptop: "Girls' Fashion",
      home: "Boys' Fashion",
      camera: "Watches",
      television: "Jewellery",
      headphone: "Women's Handbags ",
      videoGames: "Men's Eyewear"

    },
    {
      heading:'HOME AND KITCHEN',
      mobile: "Bath",
      tablet: "Home Decor",
      leptop: "Kitchen & Dining",
      home: "Tools & Home Improvement",
      camera: "Audio & Video",
      television: "Furniture",
      headphone: "Patio, Lawn & Garden",
      videoGames: "Pet Supplies"

    },
    {
      heading:'BEAUTY',
      mobile: "Fragrance",
      tablet: "Make-Up",
      leptop: "Haircare",
      home: "Skincare",
      camera: "Bath & Body",
      television: "Electronic Beauty Tools",
      headphone: "Men's Grooming",
      videoGames: "Health Care Essentials"

    },
    {
      heading:'BABY & TOYS',
      mobile: "Diapering",
      tablet: "Baby Transport",
      leptop: "Nursing & Feeding",
      home: "Baby & Kids Fashion",
      camera: "Baby & Toddler Toys",
      television: "Tricycles & Scooters",
      headphone: "Board Games & Cards",
      videoGames: "Outdoor Play"
      
    },
    {
      heading:'TOP BRANDS',
      mobile: "Pampers",
      tablet: "Apple",
      leptop: "Nike",
      home: "Samsung",
      camera: "Tefal",
      television: "L'Oréal Paris",
      headphone: "Skechers",
      videoGames: "BLACK+DECKER"
      
    },
    {
      heading:'DAILY GROCERIES',
      mobile: "Fresh Produce",
      tablet: "Dairy & Eggs",
      leptop: "Bread & Bakery",
      home: " Meat & Seafood",
      camera: "Breakfast Food ",
      television: "Pantry Staples",
      headphone: "Household Supplies",
      videoGames: "Personal Care"

    },

  ])

  return (
    <>
      <PrimarySearchAppBar />

      <div>
        <Category className=" shadow p-3 mb-5 bg-white rounded" />
        <div>

          <img src={addImage} className="paddingtop" style={{ width: '1280px' }} />
        </div>
        <Curosel />
      </div>
      <div className="container mt-3" style={{ backgroung: "white" }}>
        <Gol />
      </div>
      <div>
        <Card />
      </div>
      <h4 className='m-3'> <strong> Recommended for you </strong></h4>
      <div className="container" >
        {card.map((e, i) =>
          <CardWithDetail imgSrc={e.imgSrc} title={e.dis} price={e.price} discription={e.discription} key={i} />
        )}
      </div>
      <div>
        <MegaDeals />
      </div>
      <div className="text-center  p-4 " style={{ background: "rgb(235, 235, 235)" }} >
        <ThreeCards />
      </div>

      <div className="text-center  p-4 " style={{ background: " rgb(243, 224, 8)" }}>
        <ClearanceDeal />
      </div>
      <h4 className='mt-5 ms-2'> <strong> More clearance deals </strong></h4>
      <div className='text-center mt-5'>


        {card.map((e, i) =>
          <CardWithDetail imgSrc={e.imgSrc} title={e.dis} price={e.price} discription={e.discription} key={i} />
        )}
        <div className='mt-5 mb-5'>

          <img src="https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png" style={{ width: "1270px" }} />
        </div>

      </div>
      <h4 className='mt-5 ms-2'> <strong> Trending deals in electronics </strong></h4>
      <div className='text-center mb-5 mt-5'>
        {card.map((e, i) =>
          <CardWithDetail imgSrc={e.imgSrc} title={e.dis} price={e.price} discription={e.discription} key={i} />
        )}
        
      </div>
      <div>
        <GiftCard />
      </div>
      <h4 className='mt-5 ms-2'> <strong> Trending deals in laptops </strong></h4>
      <div className='text-center mb-5 mt-5'>
        {card.map((e, i) =>
          <CardWithDetail imgSrc={e.imgSrc} title={e.dis} price={e.price} discription={e.discription} key={i} />
        )}
        
      </div>
<div className='mb-5 p-2' style={{backgroundColor:'rgb(225, 245, 225)'}}>
  <img src="https://k.nooncdn.com/cms/pages/20220506/aea0b6fb802441648afe8b450184b13f/en_dk-uae-deal-title-01.gif" className='p-4' />
  <img src="https://k.nooncdn.com/cms/pages/20211205/facb109f7445b0f993137ce467180ea2/en_noonsection-01.gif" style={{width:'1250px'}} />
</div>
      <div className='fs6'>
        {footer.map((e, i) =>
          <Footer heading={e.heading} mobile={e.mobile} tablet={e.tablet} laptop={e.leptop} home={e.home} camera={e.camera} television={e.television} headphone={e.headphone} videoGames={e.videoGames} />
        )}
      </div>
    </>
  );
}

export default App;
