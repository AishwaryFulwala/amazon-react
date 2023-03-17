import React from 'react';

import './Home.css';
import Product from '../../components/Product/Product';

const Home = () => {
  return (
      <div className="container">
          <div>
              <img
                  className="img"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt='thumbnail'
              />
              <div className="linearDiv">
                  <div className="productContainer">
                      <Product
                          id="12321341"
                          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                          price={11.96}
                          rating={5}
                          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                      />
                      <Product
                          id="49538094"
                          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                          price={239.0}
                          rating={4}
                          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                      />
                  </div>

                  <div className="productContainer">
                      <Product
                          id="4903850"
                          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                          price={199.99}
                          rating={3}
                          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                      />
                      <Product
                          id="23445930"
                          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                          price={98.99}
                          rating={5}
                          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                      />
                      <Product
                          id="3254354345"
                          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                          price={598.99}
                          rating={4}
                          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                      />
                  </div>

                  <div className="productContainer">
                      <Product
                          id="90829332"
                          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                          price={1094.98}
                          rating={4}
                          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                      />
                      <Product
                          id={'111'}
                          title={'Discover your home'}
                          price={549.99}
                          image={'https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg" class="landscape-image" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/379X304._SY608_CB636615541_.jpg'}
                          rating={5}
                      />
                  </div>

                  <div className="productContainer">
                      <Product
                          id={'113'}
                          title={'Best Sellers in Sports, Fitness & Outdoors'}
                          price={156.22}
                          image={'https://m.media-amazon.com/images/I/71mjtedSW-L._AC_SY175_.jpg'}
                          rating={3}
                      />
                      <Product
                          id={'114'}
                          title={'Best Sellers in Grocery & Gourmet Foods'}
                          price={69.99}
                          image={'https://m.media-amazon.com/images/I/71hFwEGKyZL._AC_SY175_.jpg'}
                          rating={4}
                      />
                      <Product
                          id={'115'}
                          title={'Best Sellers in Toys & Games'}
                          price={999.99}
                          image={'https://m.media-amazon.com/images/I/71ML2TRKAUL._AC_SY195_.jpg'}
                          rating={2}
                      />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Home;
