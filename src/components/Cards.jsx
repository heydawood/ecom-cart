import React, { useState } from 'react'
import CardsData from './CardsData'
import './style.css'
import { useDispatch } from 'react-redux'
import ADD from '../redux/actions/action'

const Cards = () => {

  const [data, setData] = useState(CardsData)

  const dispatch = useDispatch();

  const handleAddToCart = (data)=> {
    //console.log(data)
    dispatch(ADD(data));
    }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Food Items</h2>

      <div className='row d-flex justify-content-center align-items-center'>
        {
          data.map((data, id) => {
            return (
              <div key={id} className="card mx-2 mt-4 card_style" style={{ width: '22rem', border:'none',  }}>
                <img style={{height:'16rem'}} src={data.imgdata} className="card-img-top mt-3" alt="food image" />
                <div className="card-body">
                  <h5 className="card-title">{data.rname}</h5>
                  <p className="card-text">Price: Rs {data.price}</p>

                  <div className='button_div d-flex justify-content-center'>
                  <button onClick={()=>handleAddToCart(data)} className="btn btn-success col-lg">Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards
