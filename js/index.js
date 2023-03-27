const withdraw = document.querySelector(".withdraw");
const deposit=document.querySelector(".deposit");
const balance=document.querySelector(".balance");
const operationDate=document.querySelector(".info h5");
const submit=document.querySelector(".bank button");
const invalidChars = [
    "-",
    "+",
    "e",
  ];
deposit.addEventListener("keydown",function(e){
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }

})

submit.addEventListener("click",function(e){
   if(deposit.valueAsNumber>0 && deposit.valueAsNumber<10000){
    Number(balance.textContent);
    balance.textContent=+deposit.valueAsNumber;
    deposit.valueAsNumber="";
    console.log(typeof(deposit.valueAsNumber)); 
   }
   else{
    alert("Error")
   }
})


