console.log("Hello World")
console.log("Hello Friend")
console.log("Hello js")
console.log("Hello Sir")


document.querySelector("#container").innerHTML = `
<h1 class='bg-red-300' >Hello World</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Aperiam omnis soluta recusandae inventore dolorum rem ipsum 
neque aspernatur at.At ipsam quisquam, maxime nisi beatae
 tempore ex quas
 illum enim.</p>
`



const writeToBody = () => {
  document.querySelector(".sub").innerHTML =`
   <h1 class='bg-yellow-300'>Hello Friend</h1> `}


   const removeData = () => {
    document.querySelector(".sub").innerHTML = ``
}


console.log(1);
const sum = () =>{
    console.log(2);
}

console.log(3);


const submitHandler = () => {
    console.log("I am console");
    const number1 = document.querySelector("#num1")
    const numDiv = document.querySelector("#showNumber")
    numDiv.innerHTML += "<h1>" + number1.value + "</h1>"
}

 
    