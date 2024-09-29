import React, { useContext } from 'react';
import './BookItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const BookItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext); // Set default value for cartItems

  return (
    <div className='book-item'>
      <div className="book-item-img-container">
        <img className='book-item-image' src={url + "/images/" + image} alt={name || 'Books'} />
        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
          : <div className='book-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more to cart" />
          </div>
        }
      </div>
      <div className="book-item-info">
        <div className="book-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="book-item-disc">{description}</p>
        <p className="book-item-price">${price}</p>
      </div>
    </div>
  );
};

export default BookItem;
