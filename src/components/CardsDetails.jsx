import React from 'react'

const CardsDetails = () => {
  return (
    <>
      <div className='container mt-2'>
        <h2 className='text-center'>Item Details</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            <div className="items_img" style={{marginLeft: '10px'}}>
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="khana" />
            </div>
            <div className="details">
              <table className='table'>
                <tbody>

                <tr>
                  <td>
                    <p><strong>Resturant</strong>: XYZ</p>
                    <p><strong>Price</strong>: RS 99</p>
                    <p><strong>Dishes</strong>: Masala Dosa, North</p>
                    <p><strong>Total</strong>: RS 999</p>
                  </td>
                  <td>
                    <p><strong>Rating</strong>: <span style={{ background: "green", color: "white", padding: "2px 5px", borderRadius: " 5px" }}>3.5★</span></p>
                    <p><strong>Order Review: </strong>1175+ orders placed in last few days</p>
                    <p><strong>Remove: </strong><i className='fas fa-trash' style={{color:'red',fontSize:'20px', cursor:'pointer'}}></i></p>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails
