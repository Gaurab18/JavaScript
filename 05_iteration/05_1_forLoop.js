//for

for(let i=0; i < 10; i++){
    const element = i;
    console.log(element)
}

for (let i = 1; i <=5; i++) {
    // console.log(`Outer Loop : ${i}`)
    for(let j=1; j<=10 ; j++){
        // console.log(`Inner Loop : ${j}`)
    //   console.log(i + '*' + j + '=' + i*j );
    }   
}

let myArray = ["Flash", "Batman","Spiderman"]
for(let i =0 ;i< myArray.length; i++)
{
    const element = myArray[i]
    console.log(element)
}

//****************KEYWORD***************
//break and continue

for(let i = 1 ; i<11 ;i++){
    if(i == 5)
    {
        console.log(`5 Detected`)
        break; // when 5 comes it will stop at that iteration and will not print 5 iteration value
    }

    console.log("Value of i : ",i)
}

for(let i = 1 ; i<11 ;i++){
    if(i == 5)
    {
        console.log(`5 Detected`)
        continue;// it will skip value at 5 iteration and start further
    }

    console.log("Value of i : ",i)
}

