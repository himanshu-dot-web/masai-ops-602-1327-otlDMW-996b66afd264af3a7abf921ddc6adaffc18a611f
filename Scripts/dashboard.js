// Write code related to dashboard page here
let tbody = document.querySelector("tbody")
let Remove = JSON.parse(localStorage.getItem("remove"));

let filterDOM = document.getElementById("filter");
let LSdata = JSON.parse(localStorage.getItem("form"));
if(LSdata == null){
    LSdata = [];
}

function display(data){
    tbody.innerHTML = "";
    data.forEach(function(ele,i){
        let tr =document.createElement("tr");
        let name = document.createElement("td");
        name.innerText = ele.name;
        let desc = document.createElement("td");
        desc.innerText = ele.desc;
        let type = document.createElement("td");
        type.innerText = ele.type;
        let category = document.createElement("td");
        category.innerText = ele.category;
        let price = document.createElement("td");
        price.innerText = ele.price;
        let delTd = document.createElement("td");

        let remove = document.createElement("button");
        remove.style.border = "0px"
        remove.innerText = "Delete";
        remove.addEventListener("click",function(){
            rem(i);
        })
        delTd.append(remove)
        tr.append(name,desc,type,category,price,remove);
        tbody.append(tr);

    })
   
}
 
const rem = (index)=>{
    data.splice(index,1);
    display(data);
    localStorage.setItem("data",(JSON.stringify(data)));
} 

display(LSdata);

filterDOM.addEventListener("change",function(){
    let filterData = LSdata.filter(function(){
        if(ele.type == filterDOM.value){
            return true;
        }else{
            return false;
        }
    })
    display(filterData);
})