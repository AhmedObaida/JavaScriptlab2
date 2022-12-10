var N = prompt("enter N");
var myList = prompt("enter the list");
var X = prompt("Enter value to search");
if(myList.length == N)
{
    for(i=0 ; i<myList.length ; i++)
    {
        console.log(myList.indexOf(X));
    }
}

