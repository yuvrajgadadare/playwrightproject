import {test,expect} from "@playwright/test"
test("postApi",async({request})=>{
    var st={
            "studentName":"Satish",
            "english":88,
            "maths":67,
            "science":55
        };
    const response=await request.post("https://localhost:7086/api/student",{
        data:st,
        ignoreHTTPSErrors: true,
     
    })
        const student=await response.json();
    // console.log(student);
    expect(response.status()).toBe(200);
})

test("getApi",async({request})=>{
   
    const response=await request.get("https://localhost:7086/api/student",{
        ignoreHTTPSErrors: true,
    })
        const student=await response.json();
    console.log(student);
    expect(response.status()).toBe(200);
})


// test("putApi",async({request})=>{
//     var st={
//         "studentId":1,
//             "studentName":"Sunil",
//             "english":77,
//             "maths":55,
//             "science":22
//         };
//     const response=await request.put("https://localhost:7086/api/student",{
//         data:st,
//         ignoreHTTPSErrors: true,
     
//     })
//         const student=await response.json();
//     // console.log(student);
//     expect(response.status()).toBe(200);
// })


test("deleteApi",async({request})=>{
   
    const response=await request.delete("https://localhost:7086/api/student/1",{
        ignoreHTTPSErrors: true,
     
    })
        const student=await response.text();
    console.log(student);
    expect(response.status()).toBe(200);
})