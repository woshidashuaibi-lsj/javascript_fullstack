// const ws= new Weakset ()//弱引用 引用完就没用  不能被遍历
// ws.add({a:1})
//ws.add(symbol())

// const a=[[1,2],[3,4]]
// const ws= new WeakSet (a)

// console.log(ws)

//weakset 可以接受一个数组或者一个类数组作为参数  该数组的所有成员 
// 都会自动成为weakset实例对象的成员

// const b=[5,6]
// const wn=new WeakSet(b)
// console.log(wn)
// 错误

//但是，传进来的数组的成员只能是对象


const ws=new WeakSet()
const obj={}
const foo={}

// ws.add(window)
ws.add(obj)
// ws.has(obj)
// ws.delete(obj)
ws.add(foo)

console.log(ws.size)

ws.forEach(item=>{
    console.log(item)
});
//WeakSet没有size属性，所以它也不能被遍历

const foos =new WeakSet()
//foos对实例的引用 不会被记入到内存回收机制当中 所以删除实例的时候不用考虑foos 也不会出现内存泄漏
class Foo{
    constructor(){
        foos.add(this)
    }
    method(){
        if(!foos.has(this)){
            throw new TypeError('error')
        }
    }
}

let faa=new foo()
//保证Foo的实例方法只能在Foo的实例上调用