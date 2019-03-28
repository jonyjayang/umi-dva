import React from 'react';
import {connect} from 'dva'
import Example from '../components/Example'
import Add from '../components/Add'
const Products=({dispatch,products,inputs})=>{
    function handleDel(id){
        dispatch({
            type:"products/delete",
            payload:id
        })
    }
    function keyenter(e){
        if(e.keyCode===13){
            dispatch({
                type:"products/add",
                payload:inputs.input
            })
        }
      
    }
    function handlechange(e){
        dispatch({
            type:"inputs/change",
            payload:e.target.value
        })
    }
    return (
        <div>
            <h2>List of Products</h2>
        <Add keyenter={keyenter} handlechange={handlechange}></Add>
        <Example onDel={handleDel} products={products} ></Example>
       
        </div>
    )
}
// export default Products;
export default connect(({ products,inputs }) => ({
    products,inputs
  }))(Products);