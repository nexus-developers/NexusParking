const INITIAL_STATE = false;

export default function information(state = INITIAL_STATE, action) {
   switch(action.type){
        case 'INFORMATION_MODAL':
           return [ state = true ];
        case 'INFORMATION_MODAL_CLOSE':
            return INITIAL_STATE;
        default:
            return state;
   }
}