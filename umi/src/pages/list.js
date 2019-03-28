import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva'
import { Table, Popconfirm, Button} from 'antd';


const mapStateToProps = (state) => {
    const list = state['list'].products;
    return {
        list,
    };
};
const mapDispatchToProps =(dispatch)=>{
return {
 onDel:(id)=>{
   const action={
     type:"list/delete",
     payload:id
   }
   dispatch(action)
 }
}
}


class list extends Component{
  render(){
    const onDel=this.props.onDel
    const columns=[{
      title:"Name",
      dataIndex:"name",
    },{
      render:(text,record)=>{
        return(
          <Popconfirm title="是否删除" onConfirm={()=>onDel(record.id)}>
            <Button>del</Button>
          </Popconfirm>
        )
      }
    }]
    
    
   return (
       <div>
         <Table columns={columns} dataSource={this.props.list} rowKey="id">
         
         </Table>
       </div>
     );
   }
};

list.propTypes = {
  list: PropTypes.array.isRequired,
};

export default  connect(mapStateToProps,mapDispatchToProps)(list);