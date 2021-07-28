let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
    let n = prompt("Độ tuổi cần tìm")
        for(let i =0; i<4;i++){
            if(n == student[i]["age"]){
            console.log(student[i]["name"])
        }
        if(n<15 | n>18){            
                console.log("không tìm thấy")
            }
     }    