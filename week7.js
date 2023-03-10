// let addToZero = arr =>{            //o(1)
// for (i=0; i<arr.length; i++){      //o(n)
//     for(j=i+1; j<arr.length; j++){ //o(n)
//         if(arr[i] + arr[j] === 0){ //o(1)
//             return true            //o(1)
//         } 
//     }
// }
// return false                        //o(1)
// }
// console.log(addToZero([28, 43, -12, 30, 4, 0, 12]))


//time complexity
//   O(n^2)
//space complexity
// o(1) its either going to return true or false



// const hasUnique = str => {                     //o(1)
//     for(let i = 0; i < str.length; i++){       //o(n)
//         for(let j = i+1; j < str.length; j++){ //o(n)
//             if(str[i] === str[j]){             //o(1)
//                 return false                   //o(1)
//             }
//         }
//     }
//      return true                               //o(1)
// }
// console.log(hasUnique('monday'))


//time complexity
//O(n^2)
//space complexity
//o(1) its either going to return true or false


const isPangram = (str) => {
       str = str.toLowerCase();                         //o(1)
       const { length } = str;                          //o(1)
       const alphabets = 'abcdefghijklmnopqrstuvwxyz';  //o(1)
       const alphaArr = alphabets.split('');            //o(n)
       for(let i = 0; i < length; i++){                 //o(n)
          const el = str[i];                            //o(1)
          const index = alphaArr.indexOf(el);           //o(1)
          if(index !== -1){                             //o(1)
             alphaArr.splice(index, 1);                 //o(n)
          };
       }; 
        return !alphaArr.length;                        //o(1)
    };
console.log(isPangram('the quick brown fox jumps over the lazy dog'))

//time complexity
//o(n^2)
//space complexity
//o(1)     its either going to return true or false



const longestWord = arr => {
    bigLength = 0                     //o(1)
    
for(let i = 0; i < arr.length; i++){  //o(n)
    if(arr[i].length > bigLength){    //o(1)
        bigLength = arr[i].length     //o(1)
    }
}
return bigLength                       //o(1)
}
console.log(longestWord(['hi','hey', 'hello']))
// time complexity
//o(n)
//space complexity
//o(n)