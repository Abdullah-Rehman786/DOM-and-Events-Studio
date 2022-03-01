// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){

    let takeoffBtn = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let landBtn = this.document.getElementById('landing');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let abortBtn = this.document.getElementById('missionAbort');
    let upBtn = this.document.getElementById('up');
    let downBtn = this.document.getElementById('down');
    let leftBtn = this.document.getElementById('left');
    let rightBtn = this.document.getElementById('right');
    let rocket = this.document.getElementById('rocket');
    let xPosition = 0;
    let yPosition = 0;
    let shuttleBackgroundWidth;

    let resetRocket = () => {
        xPosition = 0;
        yPosition = 0;
        rocket.style.bottom = yPosition+"px";
        rocket.style.left = xPosition+"px";
    }

    takeoffBtn.addEventListener('click',function(){
        if(window.confirm('Confirm that the shuttle is ready for takeoff')){
            flightStatus.innerText = "Shuttle in flight!";

            shuttleBackground.style.backgroundColor = "blue";

            shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
        };
    });

    landBtn.addEventListener('click',function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerText = 0;
        resetRocket();



    });

    abortBtn.addEventListener('click',function() {
        if(window.confirm('Confirm that you want to abort the mission.')){
            flightStatus.innerText = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerText = 0;
            resetRocket();
        }
    });

    upBtn.addEventListener('click',function(){
        if(yPosition <= 245){
            yPosition += 10;
            rocket.style.bottom = yPosition+"px";
            shuttleHeight.innerText = Number(shuttleHeight.innerText) + 10000;
        }
        

        // console.log('yPosition',yPosition);
        // console.log('bottom px',parseInt(rocket.style.bottom,10));
    });

    downBtn.addEventListener('click',function(){
        if(yPosition >= 10){
            yPosition -= 10;
            rocket.style.bottom = yPosition+"px";
            shuttleHeight.innerText = Number(shuttleHeight.innerText) - 10000;
        }
        
    });

    leftBtn.addEventListener('click',function(){
        if(xPosition >= 10){
            xPosition -= 10;
            rocket.style.left = xPosition+"px";
        }
        
    });

    rightBtn.addEventListener('click',function(){
        shuttleBackgroundWidth = window.getComputedStyle(shuttleBackground).width;
        // console.log('width:',parseInt(shuttleBackgroundWidth,10)-75);
        // console.log('xPosition:',xPosition)
        if(xPosition <= parseInt(shuttleBackgroundWidth,10)-70){
            xPosition += 10;
            rocket.style.left = xPosition+"px";
        }
        
    });
});