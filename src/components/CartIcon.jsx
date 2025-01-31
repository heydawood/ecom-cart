import React, { useEffect, useState } from 'react'
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { Link } from 'react-router-dom';
import { REMOVE } from '../redux/actions/action';


const CartIcon = () => {

    const getData = useSelector((state) => state.cartReducer.carts) //used to get data and put it in cart



    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(REMOVE(id))
    }

    const [price, setPrice] = useState(0)

    const total = () => {
        let price = 0;
        getData.map((element) => {
            price = element.price * element.qnty + price

        })
        setPrice(price)
    }

    useEffect(() => {

        total();

    }, [total])




    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='cart-icon'>
            <Badge badgeContent={getData.length} color="primary"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <i className="fa-solid fa-cart-shopping text-white" style={{ fontSize: 25, cursor: 'pointer' }}></i>
            </Badge>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {
                    getData.length ?
                        <div className='card_details' style={{ width: '24rem', padding: 10 }}>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.map((data) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <Link to={`/cart/${data.id}`} onClick={handleClose}>
                                                                <img src={data.imgdata} style={{ width: '5rem', height: '5rem' }} alt="" /></Link>
                                                        </td>
                                                        <td>
                                                            <p>{data.rname}</p>
                                                            <p>Price: Rs {data.price}</p>
                                                            <p>Quantity: {data.qnty}</p>
                                                            <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => { removeItem(data.id) }}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5' style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onClick={() => { removeItem(data.id) }}>
                                                            <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total: Rs {price}</p>
                                </tbody>
                            </table>
                        </div>
                        :
                        <div className='card_details d-flex justify-content-center align-items-center' style={{ width: '24rem', padding: '10px', position: 'relative' }}>

                            <i onClick={handleClose}
                                className='fas fa-close smallclose' style={{ position: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }}></i>

                            <p style={{ fontSize: '22px' }}>Your Cart is Empty</p>

                            <img className='emptycart_img' style={{ width: '5rem', padding: 10 }} src="./cart.gif" alt="cart" />

                        </div>
                }


            </Menu>
        </div>
    )
}

export default CartIcon
