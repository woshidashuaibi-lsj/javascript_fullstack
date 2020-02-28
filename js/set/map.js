// // const data={}
// // const element = document.getElementById('myDiv')

// // data[element] = 'wnwnwn'
// // data['[object HTMLDivElement]']

// const m= new Map()
// const o={p:'hellow world'}
// m.set(o,'content')//.set（）是用map的一个方法，用来设置或修改实例当中的值

// // m.has(o)
// m.delete(o)
// // console.log(m.has(o))

// const map =new Map([
//      ['name','蜗牛'],
//      ['title','蜗牛贼帅']
// ])

// // console.log(map.get('name'))

// //实际上不仅仅是数组，任何具有iterator（迭代器）接口， 
// //只要数组中的每一个成员都是双元素数组的数据结构，都可以作为Map的参数
// //所以Set,Map都可以都用来生成新的Map

// const set=new Set([
//     ['foo',1],
//     ['bar',2]
// ])


// const m1=new Map(set)
// // console.log(m1.get('foo'))

// const m2=new Map([['baz',3]])
// const m3=new Map(m2)
// m3.get('baz')
// console.log(m3.get('baz'))





// // const items =new[
// //     ['name','蜗牛'],
// //     ['title','蜗牛贼帅']
// // ]
// // const map=new Map()

// // items.forEach(([key,value])=>map.set(key,value))






// const map=new Map()
// // map.set(1,'aaa').set(1,'bbb')
// const k1=['a']
// const k2=['a']
// map.set(k1,111).set(k2,222)
// console.log(map)
//相同的值对不同对象的引用，在map结构中视为俩个键

let map =new Map()
// map.set(-0,123)
// map.set(true,1)
// map.set('true',2)
map.set(undefined,33)
map.set(null,44)

map.set(NaN,55)
console.log(map.get(+0))
