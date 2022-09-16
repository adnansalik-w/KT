function someFunction() {
    console.log(demo.value);
    console.log(demo.id);
    console.log(demo.style.color);
    demo.innerText = "lol";
    demo.style = 'color:red;'; 
  }
  
  function someFunctionTwo() {
    demo.innerText = "Hi";
    demo.style = 'color:blue';
  }

let demo = document.getElementById("demo");
demo.addEventListener("click", someFunction);

let demo2 = document.getElementById("demo2");
demo2.addEventListener("click", someFunctionTwo);
