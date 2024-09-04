

const bar= document.querySelector('#bar');
const navbar= document.querySelector('#navbar');
const close= document.querySelector('#close');
if(bar){
    bar.addEventListener('click', ()=>{
       navbar.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
       navbar.classList.remove('active');
    })
}

const mainImage= document.querySelector("#mainImage");
const minImage= document.querySelectorAll(".minImage");
        
       
          
        minImage.forEach(item => {
            item.onclick =  function(){
            mainImage.src= item.src;
            }
        });