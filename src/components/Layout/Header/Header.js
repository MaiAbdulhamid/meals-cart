import React from 'react'
import classes from './Header.module.css';
import mainImage from "../../../assets/meals.jpg"
import CartButton from './CartButton';

export default function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mainImage}  alt="Main Image" />
      </div>
    </>
  )
}
