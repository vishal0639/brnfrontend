import { initialStore } from "./state";

export const loginReducer = (currentStore = initialStore, action) => {
  console.log(action);
  switch (action.type) {
    case 'login':{
      return {...currentStore,loginDetails:action.value};
    }  
    case 'logout':
      return { ...currentStore, loginDetails: action.value };
    default:
      return currentStore;
  }
};
