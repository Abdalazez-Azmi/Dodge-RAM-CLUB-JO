
let des = document.getElementById("des")
let  sec = document.getElementById("sec")
window.addEventListener("load", () => {
    autoSlide();
 })
 
 function autoSlide() {
    setInterval(() => {
       slide(getItemActiveIndex() + 1);
    }, 3000); // slide speed = 3s
 }
 
 function slide(toIndex) {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
 
    // check if toIndex exceeds the number of carousel items
    if (toIndex >= itemsArray.length) {
       toIndex = 0;
    }
 
    const newItemActive = itemsArray[toIndex];
 
    // start transition
    newItemActive.classList.add("carousel_item__pos_next");
    setTimeout(() => {
       newItemActive.classList.add("carousel_item__next");
       itemActive.classList.add("carousel_item__next");
    }, 20);
 
    // remove all transition class and switch active class
    newItemActive.addEventListener("transitionend", () => {
       itemActive.className = "carousel_item";
       newItemActive.className = "carousel_item carousel_item__active";
    }, {
       once: true
    });
 }
 
 function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
 }


$(sec).click(function(e){
   let list = sec.children
   for (let i = 0; i < list.length; i++) {
//  console.log(e.target.value);
 let res = e.target.value;
 if (res === "EN") {
   des.textContent="Dodge Ram 2009 owned by Abdalazez, the mechanics were completely done and the following things were modified: long arm mirrors, backfire programming, fiber leather trunk lid, 6-inch lift, projector lights, shock absorbers measuring 37, 12.5, 17, 5-bolt rim, flagpole, flagpole rings"
 }else{
   des.textContent=" بكم دودج رام 2009 لمالكه عبد العزيز تم عمل ميكانيك بالكامل وتم تعديل الأمور التالية : مرايا ذراع طويل , برمجة الباك فاير , إضافة غطاء السباق , هوك سحب خلفي , غطاء صندوق فايبر جلد , ترفيع 6 انش , اضوية بروجيكتور , كوشوك قياس 37,12.5,17 ,جنط ميثور 5 براغي , سارية علم , حلقات سارية العلم "

 }


      
   }
})





// let value = sec.value
// let text = value
// console.log(text,text === "EN");
//  const trans=()=>{
// if (text === "EN") {
//    sec.textContent="AR"
//    des.textContent="Dodge Ram 2009 owned by Abdul Aziz, the mechanics were completely done and the following things were modified: long arm mirrors, backfire programming, fiber leather trunk lid, 6-inch lift, projector lights, shock absorbers measuring 37, 12.5, 17, 5-bolt rim, flagpole, flagpole rings"
// }
//    else{
//       des.textContent=" بكم دودج رام 2009 لمالكه عبد العزيز تم عمل ميكانيك بالكامل وتم تعديل الأمور التالية : مرايا ذراع طويل , برمجة الباك فاير , إضافة غطاء السباق , هوك سحب خلفي , غطاء صندوق فايبر جلد , ترفيع 6 انش , اضوية بروجيكتور , كوشوك قياس 37,12.5,17 ,جنط ميثور 5 براغي , سارية علم , حلقات سارية العلم "

     

//    }


//  }