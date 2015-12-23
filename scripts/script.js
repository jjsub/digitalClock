function onReady(){
  console.log('Hola todos');

  var date = new Date(); // This is invoquin the Date object construct by using 'new'
  var clock = document.getElementById('clock');
          
  console.info(clock);
  clock.innerHTML = date.getHours() + ':' + date.getMinutes() +':'+ date.getSeconds();
}       

var yea = '2015';

window.onload = onReady();