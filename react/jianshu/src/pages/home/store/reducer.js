// import * as  types from './actionTypes'
import { fromJS } from 'immutable'
// immutable.js
// facebook
// immutable对象


const defaultState = fromJS({
   topicList: [
       {
       id:1,
       title: '社会热点',
       imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
       {
       id:2,
       title: '手绘',
       imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
       },
    ],
    articleList: [
        {
            id: 1,
            title: '"纯洁的男女关系"',
            desc: '深夜，一对年轻男女来到一家宾馆。 “开两个单间！”男的拿着身份证说。 “不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。 男的看了一眼..',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '"纯洁的男女关系"',
            desc: '深夜，一对年轻男女来到一家宾馆。 “开两个单间！”男的拿着身份证说。 “不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。 男的看了一眼..',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '"纯洁的男女关系"',
            desc: '深夜，一对年轻男女来到一家宾馆。 “开两个单间！”男的拿着身份证说。 “不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。 男的看了一眼..',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '"纯洁的男女关系"',
            desc: '深夜，一对年轻男女来到一家宾馆。 “开两个单间！”男的拿着身份证说。 “不好意思，现在房间住满了，只剩一个标准间了。”前台小姐说。 男的看了一眼..',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    recommendList: [
        {
            id:1,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:2,
            imgUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        }
    ]

})

export default (state = defaultState, action) => {
    return state
}

