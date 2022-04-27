export const reducer=(state,action)=>{

    switch(action.type){
        case "INCREMENT":{
            return {
                ...state,
                count:state.count++
            }
        }
        case "DECREMENT":{
            return {
                ...state,
                count:state.count--
            } 
        }
        case "MULTIPLE":{
            return {
                ...state,
                // count:state.count--
            } 
        }
        case "DIVISION":{
            return {
                ...state,
                // count:state.count--
            } 
        }
        case "INCX":{
            return {
                ...state,
                count:state.count
                // count:count+count
                
            } 
        }
        case "DECX":{
            return {
                ...state,
                count:state.count
            } 
        }
       
        default:{
            return state
        }
    }

}