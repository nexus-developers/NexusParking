const INITIAL_STATE = false;

export default function report(state = INITIAL_STATE, action){
    switch(action.type){
        case 'REPORT':
            return [ state = true ];
        case 'REPORT_CLOSE':
            return INITIAL_STATE;
        default:
            return state;
    }
}