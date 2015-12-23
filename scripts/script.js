function onReady(){
  console.log('Hola Todos');
  
  var clock = createClock('clock');
   var clock2 = createClock('clock2');


}       

function createClock(id){
  var c = new Object();
  //Make the clock tick 
    c.updateClock = function(){
      var date = new Date(); // This is invoquin the Date object construct by using 'new'
      var clock = document.getElementById(id);
      clock.innerHTML = formatDigits(date.getHours()) + ':' + 
      formatDigits(date.getMinutes()) +':'+ formatDigits(date.getSeconds());
    };
  c.updateClock();
  setInterval(c.updateClock, 1000);

  return c;
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