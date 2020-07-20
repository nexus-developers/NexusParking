const INITIAL_STATE = false;

export default function information(state = INITIAL_STATE, action) {
   switch(action.type){
        case 'PAYMENT':
            return [ state = true, action.id ];
        case 'CLOSE_PAYMENT':
            return INITIAL_STATE;
        default:
            return state;
   }
}