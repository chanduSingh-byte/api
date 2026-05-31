// let largest = -Infinity;
// let secondLargest = -Infinity;


// function secondLargest(nums) {



//     for (let num of nums) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest && num !== largest) {
//             secondLargest = num;
//         }
//     }

// return {
//     success:true,
//     status:200,
//     data: {
//         largest,
//         secondLargest,
//         user: {
//             name: "chandanSingh",
//             email: "searchandan@gmail.com"
//         }
//     }
// };
// }
// console.log(
//     secondLargest([10, 5, 8, 20, 7589.5456, 54654, 54645643, 5436, 19, 15])
// );


const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "API is working 🚀",
        data:{
            data:"success"
        }
    });
});

app.get("/sum", (req, res) => {
    const nums = [10, 20, 30];
    const sum = nums.reduce((a, b) => a + b, 0);

    res.json(
        
            {
                message:"working",
                nums,sum }
    
    );
});



app.get("/data", (req, res) => {

    const data = [];

    for (let i = 1; i <= 2; i++) {
        data.push({
            id: i,
            name: `User ${i}`,
            email: `user${i}@example.com`,
            status: i % 2 === 0 ? "active" : "inactive",

            request: {
                method: req.method,
                url: req.originalUrl,
                baseUrl: req.baseUrl,
                path: req.path,
                headers: req.headers,
                query: req.query,
                params: req.params,
                ip: req.ip,
                hostname: req.hostname
            },

            data: {
                role: "Admin",
                access: "Admin",
                details: {
                    name: "chandanSingh",
                    city: "munger Bihar India 811201"
                }
            }
        });
    }

    console.log("👍👍👍👍👍👍👍👍👍👍");

    res.status(200).json({
        message: "All good",
        success: true,
        count: data.length,
        data
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});














// function secondLargest(nums) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let num of nums) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest && num !== largest) {
//             secondLargest = num;
//         }
//     }

//     let dom = 
//     `

//     ------------------------------------------------------
//     -    Hey User Larger No: ${largest}                     
//     -    Hey User SecondLarger No: ${secondLargest}                
//     ------------------------------------------------------

//     `
//     return dom;
// }

// secondLargest([10, 5, 8, 20, 7589.5456,54654,54645643,5436,19,15]);



































// // find Second Largest Number 

// let larger = 0;
// let sec = 0;


// let data = [10, 5, 8, 20, 15];

// for(i=1; i<data.length;i++){
//     if(data[i] >larger ){
//         larger = data[i];
//     }else if(sec>)
// }

// console.log("largre",larger);



















// const nums = [5, 2, 9, 1, 7,-8];

// let smallest = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < smallest) {
//         smallest = nums[i];
//     }
// }

// console.log(smallest);

    // const nums = [5, 2, 9, 1, 7];




// nums.map(
//     (d,i)=>{
//         const seen = new d();
//         console.log(seen)
//         console.log(d);
//         if(d != nums)

//             return
//     }
// )














// // const num = [2, 5, 7, 9];
// // const tar = 9;
// // let map = {};

// // for (let i = 0; i < num.length; i++) {
// //     console.log(i)
// //     let com = tar - num[i]
// //     console.log(com, "com");
// //     console.log("---");


// //         for(map[com] !==undefined){
// //             return
// //         }

// // }
// console.log(twoSum([2, 7, 11, 15], 9));


// function twoSum(nums, target) {
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {     //0
//         let complement = target - nums[i];      //7

//         if (map[complement] !== undefined) {    
//             console.log(map[complement] )
//             return [map[complement], i];
//         }

       
//         map[nums[i]] = i;
//     }
// }


