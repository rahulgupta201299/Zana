export type T_AUTH_REDUCER = {
    isLoggedIn: boolean
    login:{
        phoneNumber:string
    }
  }
  
  export const INITIAL_STATE: T_AUTH_REDUCER = {
    isLoggedIn: false,
    login:{
        phoneNumber:''
    }
  }