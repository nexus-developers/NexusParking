const INITIAL_STATE = false;

export default function modal(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ID':
            return [state = true, action.id];
        default:
            return state;
    }
}