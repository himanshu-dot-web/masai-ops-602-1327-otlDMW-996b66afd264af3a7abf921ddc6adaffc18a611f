// Write code related to Home page here
let form = document.querySelector("form");
// let name = document.getElementById("name");
// let desc = document.getElementById("desc");
// let type = document.getElementById("type");
// let number = document.getElementById("number");
// let category = document.getElementById("category");

let LSdata = JSON.parse(localStorage.getItem("form"));
if(LSdata == null){
    LSdata = [];
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    let formData = {
        name:form.name.value,
        desc:form.desc.value,
        type:form.type.value,
        category:form.category.value,
        price:form.price.value
    }
    LSdata.push(formData);
    localStorage.setItem("form",JSON.stringify(LSdata));
    console.log(LSdata)
});





