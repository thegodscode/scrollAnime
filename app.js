$(document).ready(function(){
    $(window).on('scroll' , (e)=>{

    })

$(".slider").on('mousedown mouseup input', (e)=>{
  if(e.type =="mousedown"){
   anime({
       targets: ".container ",
       scale:0.9,
       duration:500 ,
       easing:'linear' ,
       delay:0 ,
       });
      
  }else if(e.type=="mouseup"){ anime({
   targets: ".container ",
   scale:1,
   duration:400 ,
   easing:'linear' ,
   delay:0 ,
   });
  }else if(e.type=="input"){
    let pxtobeScrolled = Math.floor((document.body.scrollHeight-window.innerHeight)/200)*e.target.value;
    window.scrollTo(0, pxtobeScrolled)
  }
  

})









});