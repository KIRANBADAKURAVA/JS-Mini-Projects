const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
let int;
function randomcolor(){
    let hex='0123456789abcdef'
    let color='#'
    for( let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    
    document.body.style.background=color
}
   function startC(){
     int=setInterval(randomcolor,1000)
}

start.addEventListener('click',startC)
stop.addEventListener('click',function(){
    clearInterval(int)
})