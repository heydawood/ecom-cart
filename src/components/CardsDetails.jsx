import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { ADD, REMOVE, REMOVE_ITEM } from '../redux/actions/action';

const CardsDetails = () => {

  const [data, setData] = useState([])
  //console.log('data', data)

  const { id } = useParams();
  //console.log(id)

  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts)
  //console.log(getData)


  const handleAddToCart = (data) => {
    dispatch(ADD(data));
  }


  const handleRemoveFromCart = (data) => {
    dispatch(REMOVE_ITEM(data));
  }

  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(REMOVE(id))
    navigate('/');
  }



  const displayData = () => {
    let compareData = getData.filter((data) => {
      return data.id == id
    });
    setData(compareData)
  }


  useEffect(() => {
    displayData();

  }, [id])


  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Item Details</h2>
      <section className="container mt-3">
        <div className="itemsdetails">
          {
            data.map((element) => {
              return (
                <>
                  <div className="items_img" style={{ marginLeft: '10px' }}>
                    <img src={element.imgdata} alt="khana" />
                  </div>
                  <div className="details">
                    <table className='table'>
                      <tbody>
                        <tr>

                          <td>
                            <p><strong>Resturant</strong>: {element.rname}</p>
                            <p><strong>Price</strong>: RS {element.price}</p>
                            <p><strong>Dishes</strong>: {element.address}</p>
                            <p><strong>Total</strong>: RS {element.price * element.qnty}</p>

                            <div className='d-flex justify-content-between align-items-center p-2' style={{ width: '100px', cursor: 'pointer', background: '#ddd', color: '#111' }}>

                              <span onClick=
                              {element.qnty <= 0 ? removeItem(element.id) : () => handleRemoveFromCart(element)}
                              style={{ fontSize: '24px' }}>-</span>
                              <span style={{ fontSize: '24px' }}>{element.qnty}</span>
                              <span onClick={() => handleAddToCart(element)} style={{ fontSize: '24px' }}>+</span>

                            </div>
                          </td>

                          <td>
                            <p><strong>Rating</strong>: <span style={{ background: "green", color: "white", padding: "2px 5px", borderRadius: " 5px" }}>{element.rating}★</span></p>
                            <p><strong>Order Review: </strong>{element.somedata}</p>
                            <p ><strong>Remove: </strong><i onClick={() => removeItem(element.id)} className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></p>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default CardsDetails
