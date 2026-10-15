const toggle=document.getElementById('toggle')
const menusum=document.getElementById('menusum')
 menusum.classList.add("hidden");
toggle.addEventListener('click',()=> menusum.classList.toggle("hidden"))