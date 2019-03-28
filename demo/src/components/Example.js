import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button} from 'antd';

const Example = ({onDel,products}) => {
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
      <Table columns={columns} dataSource={products} rowKey="id"></Table>
    </div>
  );

};

Example.propTypes = {
  onDel: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default Example;
