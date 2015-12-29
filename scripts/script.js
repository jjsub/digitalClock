function onReady(){
  console.log('Hola Todos');
  
  var clock   = new Clock('clock',0 , 'UTC');
  var clock2  = new Clock('clock2', -360, 'Nashville');


}       

function Clock(id, offset, labe){
  offset  = offset || 0;
  labe    = labe   || '';
  this.id = id;
  this.labe = labe;
  
  var d = new Date();
  this.offset =(d.getTimezoneOffset() + offset) * 60 * 1000;


  var that = this;
  this.updateClock();
  setInterval(function(){
    that.updateClock();}, 1000);

}


  //Make the clock tick 
    Clock.prototype.updateClock = function(){
      console.log(this);
      var date = new Date(); // This is invoquin the Date object construct by using 'new'
          date = new Date(this.offset + date.getTime());
      var clock = document.getElementById(this.id);
      clock.innerHTML = this.formatDigits(date.getHours()) + ':' + 
      this.formatDigits(date.getMinutes()) +':'+ this.formatDigits(date.getSeconds() +' '+ this.labe);
    };

    Clock.prototype.formatDigits = function(val){
      if(val < 10){
         val = '0' + val;
      }
      return val;
    };


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

//More clean way to prevent scope problem with set setInterval   setInterval(this.updateClock.bind(this), 1000);

// function yes(o){ var p = o || 0;   return p; } 
// yes(34); // 34       //yes();   // 0 