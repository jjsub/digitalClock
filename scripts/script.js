function onReady(){
  console.log('Hola Todos');
  
  var clock   = new Clock('clock',0 , 'UTC');
  var clock2  = new Clock('clock2', -360, 'Nashville');
  var clock3  = new Clock('clock3', -240, 'Santo Domingo');

}       


Date.prototype.updateSeconds = function(){
  this.setSeconds(this.getSeconds()+1);
};

//will make the clock to auto refresh 
Date.prototype.autoClock = function(isAuto){
    clearInterval(this.clockInterval);

    if(isAuto){
      var that = this;
      this.clockInterval = setInterval(function(){ that.updateSeconds() }
        , 1000);
    }
};


function Clock(id, offset, labe){
    offset    = offset || 0;
    labe      = labe   || '';
   
    var d      = new Date();
    var offset =(offset + d.getTimezoneOffset()) * 60 * 1000;
    this.d     = new Date(offset + d.getTime());
    this.d.autoClock(true);
    this.id   = id;
    this.labe = labe;


  var that = this;
  this.updateClock();
  setInterval(function(){
    that.updateClock();}, 1000);

}

  //Make the clock tick 
    Clock.prototype.updateClock = function(){
      console.log(this);
      var date = this.d; // This is invoquin the Date object construct by using 'new'
          // date.updateSeconds(); // date = new Date(this.offset + date.getTime());
      var clock = document.getElementById(this.id);
      clock.innerHTML = this.formatDigits(date.getHours()) + ':' + 
      this.formatDigits(date.getMinutes()) +':'+ this.formatDigits(date.getSeconds() +' '+ this.labe);
    };

    Clock.prototype.formatDigits = function(val){
      if(val < 10) val = '0' + val;
      
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

// video 3_2 sec 3:10