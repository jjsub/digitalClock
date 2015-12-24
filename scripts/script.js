function onReady(){
  console.log('Hola Todos');
  
  var clock = createClock('clock');
   var clock2 = createClock('clock2');


}       

function createClock(id){
  var c = new Object();
  //Make the clock tick 
    c.updateClock = function(){
      console.log(this);
      var date = new Date(); // This is invoquin the Date object construct by using 'new'
      
      var clock = document.getElementById(id);
      clock.innerHTML = this.formatDigits(date.getHours()) + ':' + 
      this.formatDigits(date.getMinutes()) +':'+ this.formatDigits(date.getSeconds());
    };

    c.formatDigits = function(val){
      if(val < 10){
         val = '0' + val;
      }
      return val;
    };

    
  c.updateClock();
  setInterval(function(){c.updateClock();}, 1000);

  return c;
}

//add a 0 if the value is smaller than 9 
function formatDigits(val){
  if(val < 10){
     val = '0' + val;
  }
  return val;
}

window.onload = onReady();


//how do we call a method that belong to the same object. By using this.method
//setInterval, first argument should be a function not a method, 
//because it will not know the context of the method ( scope )  setInterval(function(){c.updateClock();}, 1000);