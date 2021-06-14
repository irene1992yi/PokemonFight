// 電腦隨機產生
// Mockup:?
var startBtn = document.querySelector('#start-btn');

var coChoice = Math.floor(Math.random() *3); 
  // 0-1之間隨機數, 無條件捨去取整數
console.log(coChoice);

startBtn.addEventListener('click', function(){
  var choice = parseInt(prompt('派出?神奇寶貝 \n 0: 菊草葉 \n 1:火球鼠 \n 2:小鉅鱷', 0));
  // parse: 轉換資料型態
  console.log(choice);
  if(choice === 0){
       alert('妳派出菊草葉!');
       if(coChoice === 0){
         alert('對方也派出菊草葉 >> 平手');
       } else if (coChoice === 1){
         alert('對方派出火球鼠 >> 你輸了');
       } else if (coChoice === 2){
         alert('對方派出小鉅鱷 >> 你贏了');
       }
     } else if(choice === 1){
       alert('妳派出火球鼠!');
       if(coChoice === 0){
         alert('對方派出菊草葉 >> 你贏了');
       } else if (coChoice === 1){
         alert('對方派出火球鼠 >> 平手');
       } else if (coChoice === 2){
         alert('對方派出小鉅鱷 >> 你輸了');
       }
     } else if(choice === 2){
       alert('妳派出小鉅鱷!');
       if(coChoice === 0){
         alert('對方派出菊草葉 >> 你輸了');
       } else if (coChoice === 1){
         alert('對方派出火球鼠 >> 你贏了');
       } else if (coChoice === 2){
         alert('對方派出小鉅鱷 >> 平手');
       }
     }
})