const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');
const l = document.getElementById('target');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');

let score1 = 0;
let score2 = 0;

l.addEventListener('change', reset_2);

playerOne.addEventListener('click', function(){
    score1++;
    p1.innerText = score1;
    check();
})

playerTwo.addEventListener('click', function(){
    score2++;
    p2.innerText = score2;
    check();
})

reset.addEventListener('click', reset_2)

//checking if the score has reached the target
function check(){
    
    if(score1 == l.value || score2 == l.value)
    {
        if(score1 > score2)
        {
            p1.classList.add('winner');
            p2.classList.add('loser');            
        }
        
        else
        {
            p2.classList.add('winner');
            p1.classList.add('loser');
        }
        
        playerOne.disabled = true;
        playerTwo.disabled = true;
        
    }
};

//reseting everthing to default
function reset_2(){
    p1.innerText = 0;
    p2.innerText = 0;
    playerOne.disabled = false;
    playerTwo.disabled = false;
    
    p1.classList.remove('winner', 'loser');
    p2.classList.remove('winner', 'loser');
    
    score1 = 0;
    score2 = 0;

}

