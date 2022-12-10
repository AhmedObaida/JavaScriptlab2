// var Num =prompt("Enter a number");
// var Sum = 0;
// while(Num != 0)
// {
//     Sum += Num%10;
//     Num = Math.floor(Num/10);
// }

// console.log(Sum);

var num = prompt("enter a number");
var sum = 0;

for(i=0;i<num.length;i++)
{
    sum = sum + Number( num[i]);
}

console.log(sum);
