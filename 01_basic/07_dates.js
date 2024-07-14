// Date 
let myDate = new Date()
console.log(myDate);
// Output became unreadable , 2024-07-14T10:07:19.110Z

console.log(myDate.toString());
//Sun Jul 14 2024 15:39:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
//Sun Jul 14 2024
console.log(myDate.toTimeString());
//16:08:23 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());
//7/14/2024, 4:08:23 PM
console.log(myDate.toLocaleTimeString());
//4:08:23 PM
console.log(myDate.toUTCString());
//Sun, 14 Jul 2024 10:41:38 GMT

console.log("*******Lets create own date ******");

let myOwnDate = new Date("04-05-2023")
                    //  ("MM-DD-YYYY")
                    // Here, 01 = Jan ,02= feb
// let myOwnDate = new Date("2024-05-03")
//                     //  ("YYYY-MM-DD")
//                     // Here, 01 = Jan ,02= feb
// let myOwnDate = new Date(2023,11,22,13,10,12)
            //     ( year,month,date,hr,min,sec ) 
            //      it works in 24hr method
// In Date january starts from 0 
// Jan feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
//  0   1   2   3   4   5   6   7   8   9   10  11

console.log(myOwnDate.toDateString());
console.log(myOwnDate.toLocaleString()); // 12/22/2023, 1:10:12 PM

let myTimeStamp = Date.now()
console.log("***********************");
console.log("to check in Seconds we use " , Math.floor(myTimeStamp/1000));
console.log(myTimeStamp); // Output : 1720955225843 (It in MiliSecond format from 1970)
console.log(myOwnDate.getTime()); // Output : 1680633000000
console.log(myOwnDate.getFullYear());
console.log(myOwnDate.getDay());




