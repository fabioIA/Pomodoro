var sec = 0
var min = 25

var interval

function start(){
    const minions = document.getElementById('minions');
    minions.play();

    watch()
    interval= setInterval(watch, 1000)

}

function pause(){
    const iphone = document.getElementById('iphone');
    iphone.play();

    clearInterval(interval)

}

function stop(){
    const pitch = document.getElementById('pitch');
    pitch.play();

    clearInterval(interval)

    sec = 0
    min = 25

    window.alert("You've stopped at: " + document.getElementById('watch').innerText)
    document.getElementById('watch').innerText = '25:00'
    document.getElementById('title').innerText = '25:00'
   
}

function watch(){

    if(sec == 0){
        min--

        if(min < 0){
            pause();
            breaks();
        
        }else{
            sec = 60
        }
    }

    min <= 0 && sec <= 0 ? sec : sec--

    document.getElementById('watch').innerText = (min < 10 && min > 0 ? "0" + min : min <= 0 ? '00' : min ) + ':' + (sec < 10 ? "0" + sec : sec);
    document.getElementById('title').innerHTML = document.getElementById('watch').innerText;
}


function breaks(){
    const alarm = document.getElementById('alarm');
    alarm.play();

    var bsec = 0;
    var bmin = 5;

    var binterval;

    bwatch();
    binterval = setInterval(bwatch, 1000);

    function bstop(){

        clearInterval(binterval);
    
        bsec = 1;
        bmin = 5;
    
        document.getElementById('break').innerText = '5:00' ;   
    }

    function bwatch(){

        if(bsec == 0){
            bmin--;
    
            if(bmin < 0){
                if(parseInt(document.getElementById('breaks').innerHTML) > 1){
                    bstop();

                    clearInterval(interval);

                    sec = 0;
                    min = 25;

                    document.getElementById('watch').innerText = '25:00';
                    document.getElementById('title').innerText = '25:00';

                    start();
                    document.getElementById('breaks').innerHTML = parseInt(document.getElementById('breaks').innerHTML) - 1;
                }else{
                    stop();
                    bstop();
                }
                
            }else{
                bsec = 60;
            }
        }

        bmin <= 0 && bsec <= 0 ? bsec : bsec--;

        document.getElementById('break').innerText = bmin + ':' + (bsec < 10 ? "0" + bsec : bsec);
        document.getElementById('title').innerHTML = "Break - " + document.getElementById('break').innerText;

    }
}