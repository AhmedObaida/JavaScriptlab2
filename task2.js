var Num =prompt("Enter a number");
var reversedNum = 0;
while(Num != 0)
{
    reversedNum = reversedNum*10 + Num%10
    Num = Math.floor(Num/10);
}

console.log(reversedNum);