const para = document.querySelectorAll("p");

document.getElementById("add").addEventListener("click", function(){
    para[0].classList.add("red");
})

document.getElementById("change").addEventListener("click", function () {
    if(para[1].classList.contains("red")){
        para[1].classList.replace("red", "blue");
    }
    else if(para[1].classList.contains("blue")){
        para[1].classList.replace("blue","red");
    }
})

document.getElementById("toggle").addEventListener("click", function(){
    para[2].classList.toggle("green");
})