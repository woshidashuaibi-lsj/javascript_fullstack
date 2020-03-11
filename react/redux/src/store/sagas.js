import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListItemAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try {
        const res = yield axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
        const action = initListItemAction(Object.keys(res.data.hotComments[0]))
        yield put(action)
    }
    catch (e) {
        console.log('网络请求失败')
    }

    // axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then((res) => {
    //           console.log(res)
    //           const data=res.data
    //           const action = initListItemAction(Object.keys(data.hotComments[0]))
    //           put(action)
    //         //   store.dispatch(action)
    //         //   console.log(action)
    //         //   dispatch(action)
    //          })
}


function* mySaga() { //sagas 必须要是generator函数
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;