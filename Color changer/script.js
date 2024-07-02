const buttons= document.querySelectorAll(".button")
const body = document.querySelector("body")
console.log(body);

buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        
        if(event.target.id==="gray"){
            body.style.backgroundColor="gray"
        }
        else if(event.target.id==="white"){
            body.style.backgroundColor="white"
        }
        else if(event.target.id==="blue"){
            body.style.backgroundColor="blue"
        }
        else if(event.target.id==="yellow"){
            body.style.backgroundColor="yellow"
        }
        
     

         
        
    })
})