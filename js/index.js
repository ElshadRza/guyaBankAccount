const withdraw = document.querySelector(".withdraw");
const deposit=document.querySelector(".deposit");
const balance=document.querySelector(".balance");
const inputs=document.querySelectorAll(".bank input");
const bank=document.querySelector(".bank")
const operationDate=document.querySelector(".info h5");
const submit=document.querySelector(".bank button");
const invalidChars = ["-","+","e",];
const video = document.createElement('video');

let balanceValue=0;
let withdrawValue=withdraw.valueAsNumber;
let depositValue=deposit.valueAsNumber;


inputs.forEach((input)=>{
  input.addEventListener("keydown",function(e){
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
})
})
  

submit.addEventListener("click",function(e){
   if(deposit.valueAsNumber>0  && withdraw.value===""){
    
    balance.textContent=`Balance:${Number(balanceValue+=deposit.valueAsNumber)}`
    const depositDate=new Date();
    operationDate.innerHTML+=`<br>  Deposited ${deposit.valueAsNumber} in ${depositDate} `;
    deposit.value="";
   
   }
   else if(deposit.valueAsNumber>50000){
    video.src ="https://rr2---sn-4g5ednsr.googlevideo.com/videoplayback?expire=1680029100&ei=TOEiZK70LIXE7gO_woWIAw&ip=216.131.114.108&id=o-ABgWBpY4C98QUFJmKO8UkwqmEWtYwcCumclXLkMBkpgf&itag=18&source=youtube&requiressl=yes&spc=99c5CfirD0W3wXkFy2WXNg4HrY5ywX_dUnhK8WW79FXzuxKQVA&vprv=1&mime=video%2Fmp4&ns=M1WsZo31MtLoZg56Z8UDhpQM&cnr=14&ratebypass=yes&dur=20.805&lmt=1658510932822168&fexp=24007246&c=WEB&txp=5318224&n=foxC7uroQJf6OQ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgfltYAaiMmEj75uN4s3g07-bCOnkSrY8jvgWJjXmvvMsCIQCkC8Vd0tcefmrsRYlhuj-AkgdzBQCaces5XtLHvLIT7g%3D%3D&rm=sn-4g5ezr7s&req_id=9f9a45fb6178a3ee&ipbypass=yes&cm2rm=sn-j5n2uxa51-btqe7l,sn-nv4er7e&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=bk&mip=185.43.191.140&mm=34&mn=sn-4g5ednsr&ms=ltu&mt=1680007242&mv=m&mvi=2&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAOrmxQGZQ4wwvmPlcViiGhQXwTjEb9teIKpoj6tEJZ_XAiEAmnzOVvVvaLARHJp5giWTtJ2Q0pSU-SFaPHsfC3HjoJk%3D"
    video.style.position="absolute";
    video.autoplay = true;
    video.controls = false;
    video.muted = false;
    video.height = 1000;
    video.width = 1000; 
    bank.appendChild(video);
   }
   else if(withdraw.valueAsNumber>0 && withdraw.valueAsNumber<=balanceValue&& deposit.value===""){
    balance.textContent=`Balance:${Number(balanceValue-=withdraw.valueAsNumber)}`
    withdraw.value="";
   }
   else if(balanceValue=0 || withdraw.valueAsNumber>balanceValue) {
      alert("There is no denqi for poor people qadanalim please deposit biraz pul or artir your balance");
      withdraw.value="";
   }
   

})


