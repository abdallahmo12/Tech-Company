import React, { Component } from 'react';
import './Child.css'

export default class Child extends Component {

  state={
    childData : 'I\'m child data ',
  }
  componentWillUnmount() {
    console.log("I\'m Will UnMount");
   }
  render() {

    // let nameFromParent = this.props.name; 
    let {id ,name , category , price , onSale , counter} = this.props.product;
    let deleteItem = this.props.delete;
    let updateItem = this.props.update;
    let updateCounter = this.props.updateCount;
    return (
    <div className="col-lg-3 col-md-4 col-6">
          <div className='fadeInLeft p-3 bg-white position-relative'>
          {/* <h5 className='p-3'> Hello I'm { nameFromParent } </h5> */}
          {
              onSale && <span className='bg-danger p-2 position-absolute top-0 end-0 text-white'>Sale 70%</span>
          }
          <h6> { name } </h6>
          <h6>Price : { price } </h6>
          <h6>Category : { category } </h6>
          <h6>Counter : { counter } </h6>
          <button className='btn btn-outline-primary mt-2 mr-sm-2 w-100' onClick={() => updateCounter(id)}>+</button>


          <button className='btn btn-outline-primary mt-2 mr-sm-2 w-100' onClick={() => deleteItem(id)}>Delete</button>
          <button type='button' onClick={() => updateItem(id)} className='w-100 mt-2 mr-sm-2 btn btn-outline-primary'>Update Product</button>
        </div>
      </div>
    )
  }
}
