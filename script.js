const $reloj = document.querySelector('.reloj')
const $Pomodoro = document.querySelector('.Pomodoro')
const $short = document.querySelector('.short')
const $Long = document.querySelector('.Long')
const $start = document.querySelector('.start')
const $stop = document.querySelector('.stop')
const $resumen = document.querySelector('.resumen')
var audio = document.querySelector("#audio");


const $title = document.title

var min = 25
var sec = 0
var control = null
var isRun = false
var timeInitial = 25



const darTonify = ()=>{

    if (Notification.permission == "granted") {
        var title = "PomodoroClock Carsd"
        var extra = {
        icon: "./resource/finish.png",
        body: "SE TERMINO EL TIEMPO"
        }
        var noti = new Notification( title, extra)


        }
}

const pedirNoti= ()=>{
    
     
        if (Notification) {
            if (Notification.permission !== "granted") {
            Notification.requestPermission()
            }
        }    

}


$Pomodoro.addEventListener('click',()=>{
    $reloj.innerHTML = '25:00'
    min = 25
    sec = 0
    timeInitial =25

    clearInterval(control)
    document.title = '25:00'
    isRun = false
    control = null
})

$short.addEventListener('click',()=>{
    $reloj.innerHTML = '05:00'
    min = 5
    sec = 0
    isRun = false
    timeInitial =5
    clearInterval(control)
    document.title = '05:00'
    control = null
})

$Long.addEventListener('click',()=>{
    $reloj.innerHTML = '10:00'
    min = 10
    sec = 0
    timeInitial = 10
    isRun = false
    document.title = '10:00'
    clearInterval(control)
    control = null
})

$start.addEventListener('click',()=>{

    pedirNoti()
    min = timeInitial
    sec = 0

    control = setInterval(ponte, 1000)
    isRun = true

})

$stop.addEventListener('click',()=>{
    
    
    if(isRun){

        clearInterval(control)
        isRun = false

    } 

})

$resumen.addEventListener('click',()=>{

    if(!isRun){

        control = setInterval(ponte, 1000)
        isRun= true

    } 

})


const ponte = ()=>{
    
    if(min === 0 & sec ===1){
        audio.play();
        $reloj.innerHTML = '0'+min+':0'+sec
        clearInterval(control)
        darTonify()
        document.title =  '0'+min+':0'+sec
    }


        
        if( min <= 10 & sec === 0){

            min = min-1
            sec = 59
            $reloj.innerHTML = '0'+min+':'+sec
            document.title = '0'+min+':'+sec
            return
        }

        if(min <= 10 & sec>10 ){

            sec = sec-1
            $reloj.innerHTML = '0'+min+':'+sec
            document.title  = '0'+min+':'+sec
            return
        
        }

        if(min <= 10 & sec <= 10 ){
            sec = sec-1
            $reloj.innerHTML = '0'+min+':0'+sec
            document.title  = '0'+min+':0'+sec
            return
        }


    



   

        if(min>10 & sec === 0){

            min = min-1
            sec = 59
            $reloj.innerHTML = min+':'+sec
            document.title  = min+':'+sec
            return
        }

        if(min>10 & sec>10 ){

            sec = sec-1
            $reloj.innerHTML = min+':'+sec
            document.title  = min+':'+sec
            return
        
        }

        if(min>10 & sec>0 & sec < 11){
            sec = sec-1
            $reloj.innerHTML = min+':0'+sec
            document.title  = min+':0'+sec
            return
        }
        
        
   



}



