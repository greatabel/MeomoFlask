var canvas;
var ctx;
// var tileSheet;
var w = 0;
var h = 0;
var timer;
var updateStarted = false;
var touches = [];
var previous_touches = [];
  var centerX = 0;
  var centerY = 0;

   
    // var x=50;
    // var y=50;
    var yA = 0;
    var yB = 0;

    var dx=0;
    var dy=-1;
     var theCanvas ;
      var context ;

    var counter=0;
  // var tileSheet=new Image();
  var tileSheetL = document.getElementById('left_img');
  var tileSheetR = document.getElementById('right_img');
  // tileSheet.addEventListener('load', eventSheetLoaded , false);
  // var imagepath = '{{ url_for('static', filename = '/images/ships.png') }}';
  // document.getElementById("test").innerHTML = "test:" + imagepath;
  // tileSheet.src= imagepath;

   


  function drawScreen() {
      // y = y + dy;
      // x = x + dx;
     //draw a background so we can wee the Canvas edges
               
       

   
      // context.drawImage(tileSheet, 0, 0,32,32,50,50,32,32);
    ctx.drawImage(tileSheetL, centerX-31, yA - 60);
    ctx.drawImage(tileSheetR, centerX+3, yB);
    // // ctx.drawImage(tileSheet, 0, 0,32,32,centerX-64,centerY-64,32,32);
    // // ctx.drawImage(tileSheet, 0, 0,32,32,centerX+32,centerY+32,32,32);
         counter++;
         if (counter >1) {
            counter=0;
         }
         // window.setTimeout(drawScreen, 200);

  };

    // function eventSheetLoaded() {
    //     drawScreen();
    // };



function update(touches) {
  if (updateStarted) return;
  updateStarted = true;
  var nw = window.innerWidth;
  var nh = window.innerHeight;
  if ((w != nw) || (h != nh)) {
    w = nw ;
    h = nh - 120;
    canvas.style.width = w+'px';
    canvas.style.height = h+'px';
    canvas.width = w;
    canvas.height = h;
  }
  
  ctx.clearRect(0, 0, w, h);
  var i, len = touches.length;
  if (len > 3) {
    len = 3;
  }
  // var temp = '';

  ctx.beginPath();



var cx = document.querySelector("canvas").getContext("2d");
  cx.beginPath();
 centerX = 0;
 centerY = 0;


  for (i=0; i<len; i++) {
    var touch = touches[i];
    var px = touch.pageX;
    var py = touch.pageY;

   centerX += touch.pageX;
   centerY += touch.pageY;
  
    cx.moveTo(px, py);

    if (i+1 < len) {
      cx.lineTo(touches[i+1].pageX, touches[i+1].pageY);

    }

    // ctx.beginPath();
    // ctx.arc(centerX, centerY, 20, 0, 2*Math.PI, true);
    // ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    // ctx.fill();
    // ctx.lineWidth = 2.0;
    // ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
    // ctx.stroke();
    
    // ctx.arc(px, py, 20, 0, 2*Math.PI, true);
    // ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    // ctx.fill();
    // ctx.lineWidth = 2.0;
    // ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
   
    console.log('＃' + px +',' + py);
    // temp += (i+'h:' + px +',' + py);
    // document.getElementById("content").innerHTML =  document.getElementById("content").innerHTML ＋ ',px=' +px +',py='+py;
  }

    if (len > 0) {
      // cx.moveTo(touches[0].pageX, touches[0].pageY);
      cx.lineTo(touches[0].pageX, touches[0].pageY);
      centerX = centerX/window.devicePixelRatio;
      centerY = centerY/window.devicePixelRatio;
    }
    cx.strokeStyle = "rgba(255,0,255,0.3)";
    cx.stroke();

    

  if (len > 2) {
    x1 = touches[0].pageX 
    y1 = touches[0].pageY 
    x2 = touches[1].pageX 
    y2 = touches[1].pageY 
    x3 = touches[2].pageX 
    y3 = touches[2].pageY 

    var a = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    var b = Math.sqrt(((x3-x2) * (x3-x2)) + ((y3-y2) * (y3-y2)));
    var c = Math.sqrt(((x1-x3) * (x1-x3)) + ((y1-y3) * (y1-y3)));

    var r =   Math.sqrt(3) * (a + b + c) / 9;


    // draw center 
    ctx.fillRect(centerX, centerY, 2,2);

    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, 2*Math.PI, true);
    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgba(0, 0, 200, 0.8)";
    ctx.stroke();
    
      // y = centerY ;
     counter=0
     if (  yA > centerY + r || yA < centerY - r || yB > centerY + r || yB < centerY - r) {
      yA = centerY;
      yB = centerY;
     }

    // drawScreen();
    
    // if ( r > 0 ) {
    //   clearInterval(timer);
    // }

  

    // temp += 'lena:'+ a +'r:' +r + 'radio:' + window.devicePixelRatio


  }
  // document.getElementById("content").innerHTML = temp;
  updateStarted = false;

}


    
   function moveTop(){ 
      yA = yA + 1;
      yB = yB - 1;
      // x = x + 2;
      update(previous_touches);
      drawScreen();
      window.setTimeout(drawScreen, 200);

};

function moveDown(){
      yA = yA - 1;
      yB = yB + 1;
      // x = x + 2;
 update(previous_touches);
 drawScreen();

  window.setTimeout(drawScreen, 200);
}



function ol() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
       // tileSheet=new Image();
       //   tileSheet.src="ships.png";
         tileSheetL = document.getElementById('left_img');
         tileSheetR = document.getElementById('right_img');
  update(touches);
  // timer = setInterval(update, 200);
  // var timer1 = setInterval(drawScreen, 200);

// canvas.addEventListener('touchend', function() {
//   // ctx.clearRect(0, 0, w, h);
//   // drawScreen()
// });
// canvas.addEventListener('touchmove', function(event) {
//   event.preventDefault();
//   touches = event.touches;
// });
// canvas.addEventListener('touchstart', function(event) {
//   console.log('start');
// });




};

//------------------------
var temp = 0;

            document.addEventListener('touchstart', handleTouchStart, false);        
            document.addEventListener('touchmove', handleTouchMove, false);

            var xDown = null;                                                        
            var yDown = null;                                                        

            function handleTouchStart(evt) {                                         
                xDown = evt.touches[0].clientX;                                      
                yDown = evt.touches[0].clientY;                                      
            };                                                

            function handleTouchMove(evt) {
              
                evt.preventDefault();

                touches = evt.touches;
                if(touches.length == 3) {
                  temp = 0;
                  previous_touches = touches
                  yA = centerY;
                  yB = centerY;
                  update(touches)
                  drawScreen()
                }
                // document.getElementById("content").innerHTML = 'len:'+touches.length + '|'+xDown +'|'+ yDown;
                // alert('in handleTouchMove')
                if ( ! xDown || ! yDown ) {
                    return;
                }

                var xUp = evt.touches[0].clientX;                                    
                var yUp = evt.touches[0].clientY;

                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                    if ( xDiff > 0 ) {
                        /* left swipe */ 
                    } else {
                        /* right swipe */
                    }                       
                } else {
                    if ( yDiff > 0 ) {
                        /* up swipe */ 
                        temp += 1
                        document.getElementById("content").innerHTML = "move:" + temp + 'radio:' + window.devicePixelRatio;
                        moveTop();

                    } else { 
                        /* down swipe */
                        temp -= 1
                        document.getElementById("content").innerHTML = "move:" + temp + 'radio:' + window.devicePixelRatio;
                        moveDown();

                    }                                                                 
                }
                /* reset values */
                xDown = null;
                yDown = null;                                             
            };