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

let n = prompt("Khóa học cần tìm?")
for(let i = 0; i<4 ;i++){
    for(let k = 0; k<3;k++){
        if(n === student[i]["course"][k]){
            console.log(student[i]["name"])
        }
        if(n != "mindX 01" && n != "mindX 02" && n != "mindX 03" && n != "mindX 04"){
            console.log("Chưa có lớp học này!")
        }
    }
}
