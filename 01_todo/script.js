// const btn = document.querySelectorAll("#btn")
// const btn = document.querySelector("body > button")

const btn = document.querySelector("#btn");
const ipt = document.querySelector("#ipt");
const parent = document.querySelector("#parent");


//Second Approach

// var array = [];  //delete it



// // var todos = localStorage.getItem("todos");
// var array = localStorage.getItem("todos"); //replace "todos" => "array"

//Third Approach
var array = localStorage.getItem("todos") || "[]"; //when we dont have data we getting null...so we pass an empty array using OR opertor



if(array) // here also todos => array
{
  array = JSON.parse(array);  // here also todos => array
  array.forEach(function(todo)  // here also todos => array
  {

    // Solving problem after reloading page array getting reset

    // // First method 
    // array.pushu(todo);


    var listItem = document.createElement("div");

    
    listItem.setAttribute("class", "todoContainer");

    
    var listText = document.createElement("p");
    listText.innerText = todo;

    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "uda do isko";

    deleteBtn.addEventListener("click", function()
    {
      // parent.removeChild(listItem);
      deleteTodo(parent, listItem, todo);
    })



    listItem.appendChild(listText);
    listItem.appendChild(deleteBtn);
    parent.appendChild(listItem);
  });
}


function deleteTodo(parent, listItem, todo)
{
  // this function is because => when we delete items then it should we delete from ui as well as localStorage
  parent.removeChild(listItem);

  var index = array.indexOf(todo);

  array.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(array));


}





//Don't need this because in third approach we passing empty array by using or operator...

// // use else statement for null for reruning null (second approach)
// else
// {
//   array = [];
// }







btn.addEventListener("click", function() //we don't need event here
{  
  var todo = ipt.value;

  // this statement restrict saving empty "div"
  if(!todo)
  {

    ipt.classList.add("warning"); // add red border

    return
  }
  ipt.classList.remove("warning"); //remove red border when input is non-empty


  //create a new element 
  var listItem = document.createElement("div");

  //styling

  // // First method : this is bad approach because for every new style you have to write new line of code
  // listItem.style.backgroundColor = "red";
  // listItem.style.color = "white";

  // // Second { Prefered }
  // listItem.classList.add("listContainer");

  // Second { we using this here }
  listItem.setAttribute("class", "todoContainer");

  
  var listText = document.createElement("p");
  listText.innerText = todo;

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "uda do isko";

  deleteBtn.addEventListener("click", function()
  {
    // // this is inner function
    // parent.removeChild(listItem); // if we don't remove this then there will be bug created

    deleteTodo(parent, listItem);

  })



  listItem.appendChild(listText);
  listItem.appendChild(deleteBtn);
  parent.appendChild(listItem);


  array.push(todo);

  localStorage.setItem("todos", JSON.stringify(array));


  




  ipt.value = ""; // asign empty after add click

});