import { LOGIN} from './tipe'
 
const initData = {
    isLogin:true,  
    userToken:null,
} 

export const Auth = (state = initData, action) => {
    switch(action.type){
        case LOGIN: 
            return {...state,...action.data}
        default:return state;
    }
} 