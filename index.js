let menu = document.querySelector(".menu");
let menubtn = document.querySelector(".header-icon");
let menubtnicon = document.querySelector(".header-icon i",);

menubtn.addEventListener("click", function() {
    if(menubtnicon.classList.contains("fa-bars")){
menu.style.left ="0";
menubtnicon.classList= "fa fa-times";
    }else{
        menu.style.left ="-256px";
menubtnicon.classList= "fa fa-bars";
    }
});
