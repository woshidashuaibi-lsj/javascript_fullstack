import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../common/header/store'
import  { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store/index'
import { reducer as loginReducer } from '../pages/login/store/index'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer