import React, { Component } from 'react';
import Child from '../Child/Child';
import './Parent.css';

export default class Parent extends Component {

    constructor(){
        super();
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        console.log('I\'m constructor Fun ' );
    }
  
  state={
    companyName : "Tech Company Products",
    clas : 'text-white',
    a3zama : true ,
    products : [
        { id:1 , name : 'OPPO' , category: 'Mobile' , price: 9000 , onSale: false , counter: 3},
        { id:2 , name : 'Samsung' , category: 'TV' , price: 12000 , onSale: true , counter: 6},
        { id:3 , name : 'LG' , category: 'Mobile' , price: 6000 , onSale: true , counter: 10},
        { id:4 , name : 'Xaomi' , category: 'Mobile' , price: 7000 , onSale: false , counter: 14},
    ],
    strFromChild: 'i\'m here',
  }

  updateCount = (id) => {
    let allProducts = [...this.state.products];
    let newProducts = allProducts.map( item => {
        if(item.id === id ){
            item.counter++;
        }
        return item
    });
    this.setState({
        products : newProducts
    })
  }
  toggleChild = () =>{
    this.setState({
        a3zama : this.state.a3zama === true ? false : true,
    })
  }
  
  deleteItem(ID){
    let AllProducts = [...this.state.products];
    let filterdArr = AllProducts.filter( item => item.id !== ID);
    this.setState({
        products :filterdArr
    });
  }
  addItem(){
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let sale = document.getElementById("sale").checked === true ? true : false;
    let len = this.state.products.length;
    this.setState({
        products : [...this.state.products, {id:len +1 , name , category , price , onSale: sale , counter: 1}]    
    })
    // console.log(sale);
  }
  
  updateItem(id){
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let sale = document.getElementById("sale").checked === true ? true : false;
    //way 1
    // let AllProducts = [...this.state.products];
    // let spcProduct = this.state.products.find( item => item.id === id);
    // // AllProducts[id]
    // spcProduct.name = name;
    // spcProduct.category = category;
    // spcProduct.price = price;
    // spcProduct.onSale = sale;
    // // AllProducts = AllProducts.filter( item => item.id !== id);
    // // AllProducts = [...AllProducts , spcProduct];
    // // this.setState({
    // //     products: AllProducts
    // // })
    // let filtered = this.state.products.filter(i => i.id !== id);
    // this.setState({
    //     products : [{id , name : spcProduct.name , category:spcProduct.category ,price: spcProduct.price , 
    //     onSale : spcProduct.onSale
    //     },...filtered]
    // })

    //way 2 
    let specificProd = this.state.products.find(item => item.id === id);
    let AllProducts = [...this.state.products];
    AllProducts.map( element => {
        if( element.id === specificProd.id ){
            element.name =name;
            element.category = category;
            element.price = price;
            element.onSale = sale;
        }
        return element
    })
    this.setState({
        products: AllProducts
    })
  }

  componentDidMount() { 
    console.log('I\'m componentDidMount Fun ' );
   }

  componentDidUpdate(preProps , preState){
    if( JSON.stringify(preState.products) !== JSON.stringify(this.state.products) )
    {
        console.log('products Updated ..');
    }
  }
    render() {
        // let str = this.state.strFromChild;
        console.log('I\'m Render Fun' );
    return <div className='my-3'>
        <div className="container my-2 p-3 bg-primary rounded fadeInDown">
            <h4 className={this.state.clas}> {this.state.companyName} </h4>
            <form className='form-inline'>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='name' aria-label='name' id='name'/>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='category' aria-label='category' id='category'/>
            </div>
            <div className='form-group'>
                <input type='text' className='form-control mb-2 mr-sm-2' placeholder='price' aria-label='price' id='price'/>
            </div>
            <div className="checkbox text-white">
                <label><input id='sale' type="checkbox" aria-label='onSale'/> has Sale ? </label>
            </div>
            <div className='form-group'>
                <button type='button' onClick={this.addItem} className='form-control mb-2 mr-sm-2 btn btn-dark'>Add Product</button>
            </div>
            </form>
            {/* { this.state.a3zama && <Child name={this.state.companyName} prod={this.state.product} /> } */}
            
            <div className="row g-3">
                {
                    this.state.a3zama ? this.state.products.map((product, index) => 
                        <Child key={index}
                        product={product} delete={this.deleteItem}
                        update={this.updateItem}
                        updateCount={this.updateCount}
                        /> ): ""
                }
            </div>

            <button onClick={this.toggleChild} className='btn btn-dark rounded fadeInUp mt-3'>toggle Child</button>
        </div>

    </div>
  }
}
