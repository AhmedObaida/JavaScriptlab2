var N = prompt("enter N");
var myList = prompt("enter the list");
var removedElement = prompt("Enter value to remove");
if(myList.length == N)
{
    for(i=0 ; i<myList.length ; i++)
    {
        console.log(myList.replace(removedElement,""));
    }
}

