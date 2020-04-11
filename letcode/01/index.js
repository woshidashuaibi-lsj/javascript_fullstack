arr = [13, 1, 2, 5, 3, 8, 11]

sum = 18

function findSum(arr, sum) {
    let obj = {}
    arr.forEach((v, i) => {
        if (String(v) in obj) {
            console.log(obj[v], i);
        }
        // {5:0} {17:1} {16:2} {}
        obj[sum - v] = i
        // console.log(obj);
        
    });
    // let x = 0 
    // // 暴力破解 O(n*n)   时间复杂度是指计算量
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (i != j && arr[i] + arr[j] == sum){
    //             console.log(i,j,arr[i],arr[j]);
    //         }
    //         x++
    //     }
    // }
    // console.log(x);



    //遍历的时候，我们就知道缺啥


}

findSum(arr, sum)