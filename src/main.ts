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
 
 //count='a';
 console.log(count);

 //Variables


 let a: number=20;
 let b: string="TestQA";
 let c: boolean=true;
 let d: any=30;
 let e: number[]=[1,2,3,4,5];
 let f: string[]=["Test","QA","Automation"];
 let g: any[]=[1,"Test",true,2,"QA",false];

 console.log("Number is",+a);
 console.log("String is"+b);
 console.log("Boolean is"+c);
 console.log("Any type is"+d);
 console.log("Number Array is"+e);
 console.log("String Array is"+f);
 console.log("Any Array is"+g); 


