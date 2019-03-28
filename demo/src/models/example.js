
export default {

  namespace: 'products',

  state: [],


  reducers: {
   'delete'(state,{payload:id}){
     return state.filter(item=>item.id!==id)
   },
   add(state, { payload: name }){
    let id = state.reduce( (previous,current) => previous.id > current.id ? previous : current).id;
    id++;
    return [...state, { name, id}]
  },
  }

};
