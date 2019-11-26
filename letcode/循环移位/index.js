//[1,2,3,4,5,6,7]  k=3;



var arr=[-1,-100,3,9], k=2

function RShift(list,k){
const copy =[...list]
    const n=list.length
    for (let i=0;i<n;i++) {  //[3,-1,-100,99]  [3,99,-1,-100]
        list[i]=copy[(k+i)%n]
    }
    return list 
}
console.log(RShift(arr,k))