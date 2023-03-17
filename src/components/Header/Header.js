import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { Search, ShoppingCartOutlined, Mail, MoveToInbox } from '@mui/icons-material';
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './Header.css';

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

  const { cart } = useSelector((state) => state?.cartReducer);
  const { user } = useSelector((state) => state?.authReducer);

  const headerRef = useRef(null);

  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  useEffect(() => {
    const header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setToggleDrawer(false)}
            onKeyDown={() => setToggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
  );

  return (
      <>
          <div className={`mainContainer flexDirect ${sticky.isSticky ? ' sticky' : ''}`} ref={headerRef}>
              <div className={'flexDirect subContainer'}>
                  <Link to={'/'} className={'link'}>
                      <div className={'flexDirect'}>
                          <img className={'logo'} src={'http://pngimg.com/uploads/amazon/amazon_PNG11.png'} alt={'amazon'}/>
                          <span className={'logoText'}>.in</span>
                      </div>
                  </Link>
                  <div className={'flexDirect addDiv'}>
                      <div className={'iconDiv'}>
                          <LocationIcon />
                      </div>
                      <div className={'addTextDiv'}>
                          <span className={'helloText'}>Hello</span>
                          <span className={'addText'}>Select your address</span>
                      </div>
                  </div>
              </div>
              <div className={'flexDirect subEvenContainer'}>
                  <select defaultValue={'All'} className={'searchDrop'}>
                      <option value="All">All Categories</option>
                      <option value="appliances">Appliances</option>
                      <option value="beauty">Beauty</option>
                      <option value="books">Books</option>
                      <option value="apparel">Clothing & Accessories</option>
                      <option value="computers">Computers & Accessories</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="kitchen">Home & Kitchen</option>
                      <option value="jewelry">Jewellery</option>
                      <option value="luggage">Luggage & Bags</option>
                      <option value="shoes">Shoes</option>
                      <option value="toys">Toys</option>
                      <option value="watches">Watches</option>
                  </select>
                  <input className='searchInput' type='text' />
                  <Search className='searchIcon' />
              </div>
              <div className={'subContainer'}>
                  <div className={'flexDirect'} style={{ justifyContent: 'space-evenly' }}>
                      <Link to={user ? '/LogOut' : '/SignIn'} className={'link'}>
                          <div className="option">
                              <span className="optionLineOne">Hello, {user || 'GUEST'}</span>
                              <span className="optionLineTwo">{user ? 'Log Out' : 'Sign In'}</span>
                          </div>
                      </Link>
                      <div className="option">
                          <span className="optionLineOne">Returns</span>
                          <span className="optionLineTwo">& Orders</span>
                      </div>
                      <div className="option">
                          <span className="optionLineOne">Your</span>
                          <span className="optionLineTwo">Prime</span>
                      </div>
                      <Link to={'/Cart'} className={'link'}>
                          <div className="optionBasket">
                              <ShoppingCartOutlined />
                              <span className="optionLineTwo basketCount">{cart?.length}</span>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
           <div className={'secondRow'}>
               <Button onClick={() => setToggleDrawer(true)}><MenuIcon /><span className={'btnText'}>All</span></Button>
                <Drawer
                   anchor={'left'}
                   open={toggleDrawer}
                   onClose={() => setToggleDrawer(false)}
                >
                   {list()}
                </Drawer>
              <Link to={'/'} className={'link linkText'}>Mobiles</Link>
              <Link to={'/'} className={'link linkText'}>Electronics</Link>
              <Link to={'/'} className={'link linkText'}>Beauty & Personal Care</Link>
              <Link to={'/'} className={'link linkText'}>Books</Link>
              <Link to={'/'} className={'link linkText'}>Health, Household & Personal Care</Link>
              <Link to={'/'} className={'link linkText'}>Fashion</Link>
              <Link to={'/'} className={'link linkText'}>Toys & Games</Link>
              <Link to={'/'} className={'link linkText'}>Computers</Link>
              <Link to={'/'} className={'link linkText'}>Home & Kitchen</Link>
              <Link to={'/'} className={'link linkText'}>Sports, Fitness & Outdoors</Link>
              <Link to={'/'} className={'link linkText'}>Luggage & Bags</Link>
              <Link to={'/'} className={'link linkText'}>Clothing & Accessories</Link>
           </div>
          <Outlet />
      </>
  );
};

export default Header;
