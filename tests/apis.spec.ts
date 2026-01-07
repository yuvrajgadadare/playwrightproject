import {test,expect} from "@playwright/test";
// test("getApi",async({request})=>{
//     const response=await request.get("https://dummyapis.ciitstudent.com/api/student");
//     console.log(response);
//     expect(response.status()).toBe(200);
// })
// test("postApi",async({request})=>{
//     var st={
//             "studentName":"Satish",
//             "english":88,
//             "maths":67,
//             "science":55
//         };
//     const response=await request.post("https://dummyapis.ciitstudent.com/api/student",{
//         data:st
     
//     });
//     const student=await response.json();
//     // console.log(student);
//     expect(response.status()).toBe(200);

//     const getresponse=await request.get("https://dummyapis.ciitstudent.com/api/student/"+student.studentId);
//     const addedstudent=await getresponse.json();
//     console.log(addedstudent);
//     expect(getresponse.status()).toBe(200);
//     expect(addedstudent.studentName).toBe(st.studentName);
// })

test("tokenApi",async({request})=>{
    var st={
        "employeeCode":"E001",
        "password":"pass@1234"
    }
    const response=await request.post("https://dummyapis.ciitstudent.com/api/login",{
        data:st

    });
    const emp=await response.json();
    console.log(emp.token);
    expect(response.status()).toBe(200);
    const getresponse=await request.get("https://dummyapis.ciitstudent.com/api/product",{
        headers:{
            "Authorization":"Bearer "+emp.token
        }
    });
    console.log(getresponse.status());
    const products=await getresponse.json();
    console.log(products);
    expect(getresponse.status()).toBe(200);
})