export default {

  namespace: 'list',

  state: {
    products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
     ]
  },

  reducers: {
    'delete'(state,{payload:id}){
      const products=state.products;
      const list=products.filter(item=>item.id!==id)
      return {
        products:list
      }
    },
    add(state, { payload: name }) {
      const products=state.products;
      let id = products.reduce( (previous,current) => previous.id > current.id ? previous : current).id;
    id++;
    const list=[...products, { name, id}]
    return {products:list}
  }

  },

  effects: {
  
  },

  subscriptions: {
   
  },

};