/*    $('.datepicker').datepicker({
      daysOfWeekDisabled: [6, 7]
    });*/
    
    const progress = document.querySelector('.prog')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next') 
    const circles = document.querySelectorAll('.circ')
    const submit = document.getElementById('sbmt')
    const parts = document.querySelectorAll('.inp')
     
     let currentActive=1
     
     next.addEventListener('click', ()=>{
            currentActive++
            if(currentActive >circles.length){
                currentActive=circles.length
            }
        update()
     })
     
     prev.addEventListener('click', ()=>{
            currentActive--
            if(currentActive <1){
                currentActive=1
            }
        update()
     })
     
     function update(){
             circles.forEach((circle,idx)=>{
             if(idx<currentActive){
                 circle.classList.add('active')
             } else{
                 circle.classList.remove('active')
             }
        })
        
        parts.forEach((part,idx)=>{
             if(idx<currentActive){
                 part.classList.add('open')
             } else{
                 part.classList.remove('open')
             }
        })
     
        
        const actives = document.querySelectorAll('.active')
             progress.style.width = (actives.length-1)/(circles.length-1)*100+'%'
     
           if(currentActive===1){
           prev.disabled=true
           submit.disabled=true
           } else if(currentActive===(circles.length-1)){
           next.disabled=true
                    prev.disabled=false;
           submit.disabled=false 
           } else {
           prev.disabled=false
           next.disabled=false
           submit.disabled=true
           }
           
       }  
          
    
    