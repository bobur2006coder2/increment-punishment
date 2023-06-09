let btn=document.querySelectorAll('button')
let num=0;
btn[0].addEventListener("click",()=>{
    num++
   btn[0].previousElementSibling.innerHTML=num;
})

btn[1].addEventListener("click",()=>{
    num--
   btn[0].previousElementSibling.innerHTML=num;
})

