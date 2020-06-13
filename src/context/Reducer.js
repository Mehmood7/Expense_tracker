export const Reducer = (state, action) =>{
    switch(action.type) {
        case 'del':
          console.log("DelTran reducer action.pload")
          console.log(action.pload)
          return {
            ...state,
            trans: state.trans.filter(tran => tran.id !== action.pload)
          }
        case 'add':
          console.log("reducer add trans");
          console.log(action.pload);
          return {
            ...state,
            trans: [...state.trans, action.pload.tran]
          }
        default:
          return state;
      }
}