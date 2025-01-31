import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

  const [data, setData] = useState([])
  //console.log('data', data)

  const { id } = useParams();
  //console.log(id)

  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts)
  //console.log(getData)


  const dispatch = useDispatch();

   const removeItem = (id) =>{
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
                              <p><strong>Total</strong>: RS 999</p>
                            </td>
                            <td>
                              <p><strong>Rating</strong>: <span style={{ background: "green", color: "white", padding: "2px 5px", borderRadius: " 5px" }}>{element.rating}★</span></p>
                              <p><strong>Order Review: </strong>{element.somedata}</p>
                              <p ><strong>Remove: </strong><i onClick={()=>removeItem(element.id)} className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i></p>
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
