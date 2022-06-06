let i = 0;
let totalYou = 0;
let j = 0;
let totalBot = 0;
let endAI = false;
let endYou = false;

function hit(){
    if(i < 5 && totalYou <= 20 && endYou == false){
        let you = document.getElementById('you');
        let card = document.createElement('div');
        let point = Math.floor(Math.random() * 10) + 1;
        totalYou += point;
        
        let YourPoints = document.getElementById('Ypoints');
        YourPoints.innerHTML = "Your Points: ";
        YourPoints.innerHTML += totalYou;

        card.innerHTML = point;
        card.classList.add('card');
        you.appendChild(card);

        if(totalYou > 20){
            YourPoints.innerHTML = "YOU LOST";
            
        }
        i++;
    }
}


function stand(){
    endYou = true;
    if(endAI == false){
        while(j < 5 && totalBot <= 20 && endAI == false){
            let bot = document.getElementById('bot');
            let card = document.createElement('div');
            let point2 = Math.floor(Math.random() * 10) + 1;
            totalBot += point2;
            
            let BotPoints = document.getElementById('Apoints');
            BotPoints.innerHTML = "AI Points: ";
            BotPoints.innerHTML += totalBot;

            card.innerHTML = point2;
            card.classList.add('card');
            bot.appendChild(card);

            if(totalBot > 20){
                BotPoints.innerHTML = "AI Exceeded 20";
                
            }

            rand = Math.floor(Math.random() * 20 - totalBot) + 1;
            rand2 = Math.floor(Math.random() * 20 - totalBot) + 1;

            if(rand == rand2)
                endAI = true;
            

            j++;
        }



        if(((totalYou > totalBot) && ((totalYou <= 20 && totalBot <= 20) || (totalYou <= 20 && totalBot > 20))) || (totalBot > totalYou && (totalYou <= 20 && totalBot > 20))){
            let res = document.getElementById('result');
            let h1 = document.createElement('h1');
            h1.textContent = "YOU WON!!";
            h1.style.color = "green";
            res.appendChild(h1);
        }
        else if(((totalBot > totalYou) && ((totalBot <= 20 && totalYou <= 20) || (totalBot <= 20 && totalYou > 20))) || (totalYou > totalBot && (totalBot <= 20 && totalYou > 20))){
            let res = document.getElementById('result');
            let h1 = document.createElement('h1');
            h1.textContent = "YOU LOST!!";
            h1.style.color = "red";
            res.appendChild(h1);
        }

        endAI = true;
    }
}





function deal(){
    
}