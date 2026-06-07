function log(message: string)
{

    console.log(message);
}

log("Hello, World!");

function doSomething()
{
    for (let i = 0; i < 5; i++)
    {
        console.log(i);

    }


    //cannot access 'i' outside of the loop, as it is block-scoped due to the use of 'let'.
    //console.log(i);
}
 doSomething();

 let count=1;
 
 let count1=2;
 //count='a';
 console.log(count);
  console.log(count1);