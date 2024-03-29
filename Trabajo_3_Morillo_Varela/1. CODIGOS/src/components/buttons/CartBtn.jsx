import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    // Obtenemos un estado de addItems
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn  btn-outline-primary ms-2">
                <span className='fa fa-shopping-cart me-1'></span> Carrito ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
