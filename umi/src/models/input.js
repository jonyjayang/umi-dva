export default {

  namespace: 'input',

  state: {
      inputs:"123"
  },

  reducers: {
   change(state,{payload:name}){
        return {inputs:name}
   }
  },

  effects: {
  
  },

  subscriptions: {
  
   
  },

};