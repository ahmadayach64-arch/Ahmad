const buttons =document.querySelectorAll(".fillter-btn");
const menuItems = document.querySelectorAll(".menuItem")

buttons.forEach((buttons) =>{
    buttons.addEventListener("click",() =>{
        const category = buttons.getAttribute("data-catagory"); //تحزينى القيمة
     
        menuItems.forEach(item => {
        if(category === "all" || category === item.getAttribute("data-catagory")){
           item.style.display ="flex";
        } else{
              item.style .display ="none";
        }
    });
});
});



/*
button = Dinner
catagory = Dinner
*/