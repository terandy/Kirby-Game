
let beepCountdown = new Audio('static/beep-countdown.wav') 
let startSound = new Audio('static/start-sound.wav') 
let p1 = 0
let p2 = 0
let player1Points = document.querySelector(".p1-points") //div containing black circle of points
let player2Points = document.querySelector(".p2-points")//div containing black circle of points
let player1 = document.querySelector(".player1")
let player2 = document.querySelector(".player2")
let winner = document.querySelector("#winner")
let countdown = document.querySelector("#counter")
let again = document.querySelector("#again")
let go = document.querySelector("#go")
let notyet = true
let done = false
let startTime = Math.floor(Math.random()*(5000-1000)+1000)

again.addEventListener('click',()=>{
    // document.addEventListener('keydown',declarewinner)
    again.style.display="none"
    player2.style.transform="translateY(0%)"
    player1.style.transform="translateY(0%)"
    play()
    
})



let declarewinner = (event) =>{
    if(event.key!=="p"&&event.key!=="q"&&event.key!==" "){return undefined}
    countdown.style.display="none"
    go.style.display="none"
    if(notyet && event.key==="q" && !done){
        winner.innerText="Oops, WINNER is Kirby"
        p1++
        player1Points.innerText=p1  
        winner.style.display="block"
        done=true
    }
    if(notyet && event.key==="p" && !done){
        winner.innerText="Oops, WINNER is Pikachu"
        p2++
        player2Points.innerText=p2
        winner.style.display="block"
        done=true
    }
    if(!notyet && event.key==="q" && !done){
        winner.innerText="WINNER is Pikachu"
        player2.style.transform="translateY(-250%)"
        p2++
        player2Points.innerText=p2
        winner.style.display="block"
        done=true
    }
    if(!notyet && event.key==="p" && !done){
        winner.innerText="WINNER is Kirby"
        player1.style.transform="translateY(-250%)"
        p1++
        player1Points.innerText=p1
        winner.style.display="block"
        done=true
    }
    if(done && event.key===" "){
        again.style.display="none"
        player2.style.transform="translateY(0%)"
        player1.style.transform="translateY(0%)"
        play()
    }
    
    setTimeout(()=>{
        if(done){
            again.style.display="block"
            winner.style.display="none"
        }
        // document.removeEventListener("keydown",declarewinner)
    },1000)
    
}
document.addEventListener("keydown",declarewinner)





let play= ()=>{
    winner.style.display="none"
    notyet = true
    done = false
    startTime = Math.floor(Math.random()*(5000-1000)+1000)
    console.log("hi")

    setTimeout(()=>{
        if(done){countdown.style.display="none"}
        if(!done){
        countdown.style.display = "block"
        countdown.innerText="3"
        beepCountdown.play()
        }
        
    }, 1000)
    setTimeout(()=>{
        if(done){countdown.style.display="none"}
        if(!done){
            countdown.style.display = "block"
            countdown.innerText="2"
            beepCountdown.play()
            }
    }, 2000)
    setTimeout(()=>{
        if(done){countdown.style.display="none"}
        if(!done){
            countdown.style.display = "block"
            countdown.innerText="1"
            beepCountdown.play()
            }
    }, 3000)
    setTimeout(()=>{
        if(done){countdown.style.display="none"}
        if(!done){
        countdown.style.display = "none"
        setTimeout(()=>{
            // go.style.display="block"
            startSound.play()
            notyet=false
            setTimeout(()=>{
                go.style.display="none"
            },200)

            },startTime )
        }
        setTimeout(()=>{
            
        },5000)
    }, 4000)
}

play()

