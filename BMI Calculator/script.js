const form =document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    const result= document.querySelector(".result")

    if (height<=0 || weight<=0 || isNaN(height,weight)) {
        result.innerHTML="Please enter valid Height & Weight"
    }
    else{
        const bmi= ((weight/(height*height))*10000).toFixed(2)
        if(bmi<18.2){
            result.innerHTML=`<span>Your BMI is ${bmi}</span><br>
                    <span>Please gain weight</span>`;      
             }
        else if(bmi<24.5){
            result.innerHTML=`<span>Your BMI is ${bmi} </span><br>You are <b>FIT!</b> </span>`
            }
        else{
            result.innerHTML=`<span>Your BMI is ${bmi} </span><br>Go to Gym</b> </span>`
        }
    }


   
} )