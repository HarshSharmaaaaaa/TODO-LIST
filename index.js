//funtionality
//add items
//delete items
//search items
let form= document.getElementById("addForm")
let itemList= document.getElementById("items")
let filter= document.getElementById("filter")
console.log(filter)



form.addEventListener("submit",function(e){
    e.preventDefault()
let item=document.getElementById("item").value
let li =document.createElement("li")
li.appendChild(document.createTextNode(item))
li.className="list-group-item"
itemList.appendChild(li)
let btn =document.createElement("button")
btn.appendChild(document.createTextNode("x"))
li.appendChild(btn)
btn.className= "btn btn-danger btn-sm float-right delete"
document.getElementById("item").value=''
}    
)
itemList.addEventListener("click",function(e) {
if(e.target.classList.contains("delete")){
confirm("are you sure you want to delete")
itemList.removeChild(e.target.parentElement)
}else{
    alert("bhai kyu time pass kr rahe ho")
}
})

filter.addEventListener("keyup",function(e){
    let value = e.target.value.toLowerCase()
    console.log(value)
    let li = document.getElementsByTagName("li")
   Array.from(li).forEach(function(item) {
    if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
        item.style.display ="block"
    }else{
        item.style.display ="none"

        
    }
})
})
