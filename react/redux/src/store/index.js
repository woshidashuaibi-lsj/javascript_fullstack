import { createStore } from 'redux'
import reducer from './reducer'

const store =createStore(reducer)  //store 已经能知道笔记本中记过的笔记


export default store