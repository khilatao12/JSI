let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

function find(n){
    for(let i=0; i < n.length; i++){
        if(n[i]>3){
            console.log(n[i])
        }
    }
}

find(arr1)
find(arr2)