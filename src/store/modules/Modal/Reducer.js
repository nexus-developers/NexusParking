const INITIAL_STATE = false;

export default function modal(state = INITIAL_STATE, action) {
   switch(action.type){
       case 'MODAL':
           return [ state = true ];
        case 'MODAL_CLOSE':
            return INITIAL_STATE;

        case 'ADD_CAR':
            return [ state = true ];
        case 'CLOSE_CAR_MODAL':
            return INITIAL_STATE;

        case 'COUNTER':
            return action.counter;

        // case 'INFORMATION_MODAL': 
        //     return [ state = true ];
        // case 'INFORMATION_MODAL_CLOSE':
        //     return INITIAL_STATE;


        default:
            return state;
   }
}