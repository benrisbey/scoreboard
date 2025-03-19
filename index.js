let score = {
    home: 0,
    guest: 0
}


function addScore(team, number) {
    document.getElementById(`${team}+${number}`).addEventListener("click", function(){
        
        if(team === "reset"){
            ["home","guest"].forEach( function(team){
                score[team] = 0
                document.getElementById(`${team}Score`).textContent = score[team]
            })  
        } else {
            score[team] += number
            document.getElementById(`${team}Score`).textContent = score[team] 
        }
    })
}

addScore("home", 1)
addScore("home", 2)
addScore("home", 3)
addScore("guest", 1)
addScore("guest", 2)
addScore("guest", 3)
addScore("reset", 1)
