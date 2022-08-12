// Matches section
var  button = document.querySelector('#matches')
var div = document.querySelector('#matches-popup i')

button.addEventListener("click",function(){
  console.log("Hello");
  document.querySelector("#matches-popup").style.display="initial"
})
div.addEventListener("click",function(){
    document.querySelector("#matches-popup").style.display="none"
})


// Notification popup
var notife = document.querySelector("#notife"); 
var popupnot = document.querySelector("#not-popup");

notife.addEventListener('mouseover' , function(e){
  notife.style.cursor = "pointer"
  popupnot.style.display = "initial"
} )
notife.addEventListener('mouseout' ,function(e){
  popupnot.style.display = 'none'
})
popupnot.addEventListener('mouseover',function(e){
  popupnot.style.display = "initial"
})
popupnot.addEventListener('mouseout',function(e){
  popupnot.style.display = "none"
})


//search section 
var searche = document.querySelector("#searche"); 
var popupsrch = document.querySelector("#nav-srch");

searche.addEventListener('mouseover' , function(e){
  searche.style.cursor = "pointer"
  popupsrch.style.display = "initial"
} )
searche.addEventListener('mouseout' ,function(e){
  popupsrch.style.display = 'none'
})
popupsrch.addEventListener('mouseover',function(e){
  popupsrch.style.display = "initial"
})
popupsrch.addEventListener('mouseout',function(e){
  popupsrch.style.display = "none"
})

