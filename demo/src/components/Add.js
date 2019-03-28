import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const Add=({keyenter,handlechange,inputs})=>{
   return (
       <div>
         <Input onKeyUp={(e)=>keyenter(e)} onChange={(e)=>{handlechange(e)}} ></Input>
       </div>
     );
   };

Add.propTypes = {

};

export default Add;