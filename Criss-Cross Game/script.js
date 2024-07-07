const items= document.querySelectorAll(".item")
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let count=1
function check(){
        for(let i=0; i<8; i++){
            let prevl=items[winPatterns[i][0]].innerHTML
            let currl
            let winC=0
            if (prevl === '') continue; 
            for(let j=0; j<3;j++){
                currl=items[winPatterns[i][j]].innerHTML
                if(currl===''||currl !== prevl ) break;
                else{
                    
                        
                        winC++
                       
                    
                    prevl=currl

                }
            
            }
            if (winC === 3) {
                alert(prevl + ' wins!');
                items.forEach(item => item.removeEventListener('click', handleClick)); 
                return;
            }
           
        }
     
        if (count > 9) { 
            alert('It\'s a tie!');
        }
}
function handleClick (event) {
   const item=event.target
    if(count%2===0){
        item.innerHTML='O'
        item.style.color='green'
        item.removeEventListener('click',handleClick)
    }
    else {
        item.innerHTML='X'
        item.style.color='red'
        item.removeEventListener('click',handleClick)
    }
    
    count++
    check()  
}

items.forEach(function(i){
   
    i.addEventListener('click',handleClick)
})
