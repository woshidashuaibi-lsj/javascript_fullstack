arr = [3, 44, 13, 1, 8, 9, 7, 1, 2]
// let x=0
// while (x<10000) {
//     arr.push(Math.random()*100);
//     x++;
// }


// 排序
// arr.sort((a,b) => a - b)
//抛开语言，原始的能力，只有按照索引找元素 ，交换元素位置，对比大小


// 冒泡排序 个子高到个矮依次排序
// 一次对比，如果你的个头比右边高，和他交换

// 复杂度O(n*n)
// 已经冒泡三次 剩下三个位置，下次循环就不用遍历了
// function bubleSort(arr) {
//    for(let j=0; j<arr.length -1 ;j++){
//     for (let i=0;i<arr.length-1-j;i++){
//         if (arr[i]>arr[i + 1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1]= temp
//         }
//     }
//    }
//     console.log(arr);

// }
// console.time('bubleSort');
// bubleSort(arr)
// console.timeEnd('bubleSort');




// 快排
// 排队的时候随便找一个人 (智哥) ，遍历一次 比李哥瘦的站左边其他站右边

//  复杂度   O(n*lgn)
// 2的4次方等于16
// lg16 = 4
// let arr1 = [10, 3, 44, 13, 1, 8, 9, 7, 2]




// function quickSort(arr) {
//     if (arr.length < 1) {
//         // 队列只有一个人，或者空，是没有必要排序的
//         return arr
//     }
//     let flag = arr[0]
//     let right = []
//     let left = []
//     // 空间占用太多
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > flag) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     }
//     // 递归
//     return quickSort(left).concat([flag]).concat(quickSort(right))
//     // return [...left, flag,...right]
// }

let arr2 = [10, 3, 44, 13, 1, 8, 9, 7, 2]

// 10
// [10, 3, 2, 13, 1, 8, 9, 7, 44]
// [10, 3, 2, 7, 1, 8, 9, 13, 44]  10
// [9, 3, 2, 7, 1, 8, 10, 13, 44]   9 
// [8, 3, 2, 7, 1, 9, 10, 13, 44]   8
// [1, 3, 2, 7, 8, 9, 10, 13, 44]   1
// [1, 2, 3, 7, 8, 9, 10, 13, 44]   


function quickSort2(arr) {
    //原地快排
    if (arr.length <= 1) {
        return arr
    }
    let flag = arr[0]
    let i = 1
    let j = [arr.length - 1 ]
    while (i < j) {
        while (arr[j] >= flag && i < j) {
            j--
        }
        while (arr[i] <= flag && i < j) {
            i++
        }
        // 右边找到一个flag小的，左边找到一个比他大的
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    // flag交换到正确的位置上
    let temp2 = arr[0]
    arr[0] = arr[j]
    arr[j] = temp2
    // return arr.slice(0,i).concat([flag]).concat(arr.slice(i+1)) 
    // return quickSort2(arr.slice(0,i)).concat([flag]).concat(quickSort2(arr.slice(i+1)))
    // return quickSort2(arr.slice(0,i)).concat([flag]).concat(quickSort2(arr.slice(i+1)))
    // arr.concat(arr2,arr3)
    return quickSort2(arr.slice(0,i)).concat([flag],quickSort2(arr.slice(i+1)))
}



console.log(quickSort2(arr2))




