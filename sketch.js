var device = new tramontana();  

function setup(){ 				
createCanvas(600, 600); 				
device.start("192.168.1.23",  function(e){
if(e==undefined){
//SUCCESS TRAMONTANA CONNECTED
device.makeVibrate();
}
});
}

function draw() {
  rect(10,10,100,100);
}