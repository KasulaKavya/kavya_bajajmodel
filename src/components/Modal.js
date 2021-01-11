import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './modal.css'


function MyModal(props) 
{


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAfr99Txyu5bK3Is-r4x0fFJrHHqGUvyJwg&usqp=CAU" 
            className="img-p" alt="a" />
          </div>
          <div className="col-lg-6">
              <div className="card-body">
                  <h3> Redmi Mobile V20 (8 GB / 128 GB) Sunset Melody </h3>
                  <br/>
                  <p className="txt-money">
                      &#8377; 15,499 
                  <s className="pl-2 txt-original-money" > &#8377; 19,200 </s> 
                  <small className="txt-green px-3 txt-offf-money" > 50% off </small>
                  </p>
                  <Link className="btn btn-outline-danger px-3 buy-btn " to="/add_to_cart" > Buy Now </Link>
                  <br/> <br />
                  <p className="card-text "><small className="text-muted"> Last updated 3 mins ago </small></p>
              </div>
          </div>
          <div className="col-lg-3 py-3 "> 
              <Link to='/add_to_cart' className="btn btn-danger px-3 my-3 buy-btn " > Add To Cart </Link>
          </div>
        </div>
      </div>
    
      <Button onClick={props.onHide} className="w-25 b">Close</Button>

    </Modal>
  );


}

export default MyModal