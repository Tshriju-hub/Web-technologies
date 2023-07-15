const data=[
    {
        "name":"John",
        "age":30,
        "ismarried":true
    },
    {
        "name":"Jone",
        "age":23,
        "ismarried":true
    },
    {
        "name":"Bob",
        "age":33,
        "ismarried":false
    },
];
const container= document.getElementById("parent");
for(let i=0; i<data.length;i++){
    const div=document.createElement("div");
    const obj=data[i];
    div.innerHTML=`Name: ${obj.name},Age:${obj.age},Ismarried:${obj.ismarried}`;
    div.classList.add("card");
    container.appendChild(div);
}

