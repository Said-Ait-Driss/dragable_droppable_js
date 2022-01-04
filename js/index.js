
// this is first method without using jquery user interface functionality
// var childrenNodes=document.querySelectorAll(".container div.child");
// var montantTotal=document.getElementById("montantTotal");
// var totalPay=0;

// childrenNodes.forEach((element,index)=>{
    
//     if(index<=3){
//         section1(element,index);
//     }
//     else{
//         section2(element,index);
//     }
// });


// function section1(element,index){

//     element.addEventListener("click",function(){

//         if(this.childrenNodes[0].tagName != "IMG"){
//             return;
//         }

//             let img=this.childrenNodes[0];
//             let montant=this.childrenNodes[1].childrenNodes[2].textContent.split('DH').join('');
//             let targetEl=childrenNodes[index+4];

//             totalPay+=parseFloat(montant);
            
//             if(targetEl.childrenNodes.length>0){
//                 return;
//             }else{
//                 targetEl.append(img);
//                 montantTotal.innerText=totalPay+"DH";
//             }


//     });
// }


// function section2(element,index){

//     element.addEventListener("click",function(){

//         if(this.children.length<=0){
//             return;
//         }
//         let img=this.children[0];
//         let targetEl=children[index-4];

//         targetEl.insertAdjacentHTML("afterbegin",img.outerHTML);
//         this.children[0].remove();
//         let montant=targetEl.children[1].children[2].textContent.split('DH').join('');
//         totalPay-=parseFloat(montant);
//         montantTotal.innerText=totalPay+"DH";


//     });
// }


// this is method 2 with user interface functionality
var childrenNodes=document.querySelectorAll(".container div.child");
var montantTotal=document.getElementById("montantTotal");
var totalPay=0;


childrenNodes.forEach((element,index)=>{
    
    if(index<=3){
        moveElement(element,index);
    }
    
});


function moveElement(ele,index){

    let targetEl=childrenNodes[index+4];

    const droppableOptions={
        innerContext:function(event,ui){
            let montant=$(childrenNodes[index]).find("h3").text();
            totalPay+=parseFloat(montant);
            montantTotal.textContent=totalPay+' DH';
        }
        ,outContext:function( event, ui ) {
            let montant=$(childrenNodes[index]).find("h3").text();
            totalPay-=parseFloat(montant);
            montantTotal.textContent=totalPay+' DH';
        }
    }

    $(ele).find("img").draggable();

    $(targetEl).droppable({
        
        drop:droppableOptions.innerContext,
        out:droppableOptions.outContext 

    });

}
