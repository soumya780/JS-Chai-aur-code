 const myNum = [1,2,3,4,5]
 
//  const myTotal = myNum.reduce( function (accumulater , currentValue) 
//  {
//     console.log(`the accumulater is ${accumulater} , and currentValue is ${currentValue}`)
//     return accumulater+currentValue
//  } , 0)

const myTotal = myNum.reduce( (acc,curr) => acc+curr ,0 )
 console.log(myTotal);
 const ShoppingCart = [
    {
        Course : "py course ",
        Price : 4499
    },
    {
        Course : "java course ",
        Price : 2999
    },
    {
        Course : " js course ",
        Price : 2999
    },
    {
        Course : "data science  course ",
        Price : 29999
    }
 ]

 const total = ShoppingCart.reduce( (acc , item ) => acc+item.Price ,0 )
 console.log(total);
