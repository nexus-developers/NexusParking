const INITIAL_STATE = false;

export default function information(state = INITIAL_STATE, action) {
   switch(action.type){
        case 'ADMINISTRADOR':
            return [ state = true ];
        case 'CLOSE_ADMINISTRADOR':
            return INITIAL_STATE;
        default:
            return state;
   }
}