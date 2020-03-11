const defaultState = {
    inputValue: 'hello world',
    list: ['123','456','789']
}

export default (state=defaultState,action) => {
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}