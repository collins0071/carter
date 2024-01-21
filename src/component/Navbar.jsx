import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import  '../App.css';


const Navbar = () => {

const [heartColors, setHeartColors] = useState({
    card1: 'red',
    card2: 'red',
    card3: 'red',
});

const [cartItems, setCartItems] = useState([]);

    // Function to handle heart icon click for a specific card item
    const handleHeartClick = (cardKey) => {
        setHeartColors((prevColors) => ({
          ...prevColors,
          [cardKey]: prevColors[cardKey] === 'red' ? 'blue' : 'red',
        }));
      };

      const handleAddToCart = (itemName, imageUrl, itemPrice) => {
        setCartItems((prevItems) => [...prevItems, { name: itemName, image: imageUrl, price: itemPrice}]);
      };
      
       // Modal to display cart items
  // Modal to display cart items
  const CartModal = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={() => setCartItems([])}>
            &times;
          </span>
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50, marginRight: 10 }}
                />
                {item.name}
                {item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav>
        <ul className='navstyle'>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact us</li>
          <button onClick={() => setCartItems([])}>Cart</button>
        </ul>
      </nav>

      <div style={{ display: 'flex' }}>
        <div className='card-item'>
          <img style={{ width: 100, height: 100 }} src='./Orange87_-16.png' alt='Flavour Orange' />
          <h5>Flavour Orange</h5>
          <h5>Price: $20</h5>
          <button onClick={() => handleAddToCart('Flavour Orange', './Orange87_-16.png', 'price: $50')}>Add to Cart</button>
          <button style={{ marginLeft: 5 }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: heartColors.card1, cursor: 'pointer' }}
              onClick={() => handleHeartClick('card1')}
            />
          </button>
        </div>

        <div className='card-item'>
          <img style={{ width: 100, height: 100 }} src='./close-up-fresh-apple.jpg' alt='Flavour Apple' />
          <h5>Flavour Apple</h5>
          <h5>Price: $20</h5>
          <button onClick={() => handleAddToCart('Flavour Apple','./close-up-fresh-apple.jpg', 'price: $100')}>Add to Cart</button>
          <button style={{ marginLeft: 5 }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: heartColors.card2, cursor: 'pointer' }}
              onClick={() => handleHeartClick('card2')}
            />
          </button>
        </div>

        <div className='card-item'>
          <img style={{ width: 100, height: 100 }} src='./fresh-papaya-fruit.jpg' alt='Flavour Papaya' />
          <h5>Flavour Papaya</h5>
          <h5>Price: $20</h5>
          <button onClick={() => handleAddToCart('Flavour Papaya','./fresh-papaya-fruit.jpg', 'price: $55')}>Add to Cart</button>
          <button style={{ marginLeft: 5 }}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: heartColors.card3, cursor: 'pointer' }}
              onClick={() => handleHeartClick('card3')}
            />
          </button>
        </div>
      </div>

      {/* Render the CartModal component when there are items in the cart */}
      {cartItems.length > 0 && <CartModal />}
    </div>
  );
};

const styles = {
  /* Modal styles */
modal: {
  display: 'none',
  position: 'fixed',
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", /* Semi-transparent background */
},
modalContent: {
  position: 'absolute',
  top: "50%",
  left: "50%",
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 8,
},
closeModal:{
  position: 'absolute',
  top: 10,
  right: 10,
  fontSize: 20,
  cursor: 'pointer',
},

}


export default Navbar;
