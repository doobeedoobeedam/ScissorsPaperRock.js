function getComputerChoice() {
    const comp = Math.random();
    if(comp < 0.34) return 'scissors';
    if(comp >= 0.34 && comp < 0.67) return 'paper';
    return 'rock';
}

function getResult(comp, player) {
    if( player == comp ) return 'DRAW!';
    if( player == 'scissors' ) return ( comp == 'paper' ) ? 'YOU WIN!' : 'YOU LOSE!';
    if( player == 'paper' ) return ( comp == 'scissors' ) ? 'YOU LOSE!' : 'YOU WIN!';
    if( player == 'rock' ) return ( comp == 'paper' ) ? 'YOU LOSE!' : 'YOU WIN!';
}

function randomPicture() {
    const compImg = document.querySelector('.computer-img');
    const img = ['scissors', 'paper', 'rock'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        compImg.setAttribute('src', 'img/' + img[i++] + '.png');
        if(i == img.length) {
            i = 0;
        }
    }, 100);
}

const choices = document.querySelectorAll('.player-area ul li img');

choices.forEach(function(img) {
    img.addEventListener('click', function() {
        const computerChoice = getComputerChoice();
        const playerChoice = img.className;

        const result = getResult(computerChoice, playerChoice);

        randomPicture();
        setTimeout(function() {
            const compImg = document.querySelector('.computer-img');
            compImg.setAttribute('src', 'img/'+ computerChoice + '.png');
    
            const info = document.querySelector('.info');
            info.innerHTML = result;
        }, 1000)
    })
})