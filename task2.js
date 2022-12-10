// var Num =prompt("Enter a number");
// var reversedNum = 0;
// while(Num != 0)
// {
//     reversedNum = reversedNum*10 + Num%10
//     Num = Math.floor(Num/10);
// }

// console.log(reversedNum);

var num = prompt("enter a number");


newNUm = num.split("").reverse().join(" ")
console.log(newNUm)




// for(i=0 ; i<num.length ; i++)
// {
    
//     var temp = num[i] ;
//     num[i] = num[num.length-(1+i)];
//     num[num.length-(1+i)] = temp ;
    
// }