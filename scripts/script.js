function onReady(){
  console.log('Hola Todos');
  
  updateClock();
  setInterval(updateClock, 1000);

}       

//Make the clock tick 
function updateClock(){
  var date = new Date(); // This is invoquin the Date object construct by using 'new'
  var clock = document.getElementById('clock');
          
  console.info(clock);
  clock.innerHTML = formatDigits(date.getHours()) + ':' + 
  formatDigits(date.getMinutes()) +':'+ formatDigits(date.getSeconds());
}

//add a 0 if the value is smaller than 9 
function formatDigits(val){
  if(val < 10){
     val = '0' + val;
  }
  return val;
}

var yea = '2015';

window.onload = onReady();