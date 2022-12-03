var Num =prompt("Enter a number");
var Sum = 0;
while(Num != 0)
{
    Sum += Num%10;
    Num = Math.floor(Num/10);
}

console.log(Sum);