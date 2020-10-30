function fallingCards() {
    const heart = document.createElement('div');
    const spade = document.createElement('div');
    const club = document.createElement('div');
    const diamond = document.createElement('div');

    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerText = '♥️';

    spade.classList.add('spade');
    spade.style.left = Math.random() * 100 + "vw";
    spade.style.animationDuration = Math.random() * 2 + 3 + "s";
    spade.innerText = '♠️';

    club.classList.add('club');
    club.style.left = Math.random() * 100 + "vw";
    club.style.animationDuration = Math.random() * 2 + 3 + "s";
    club.innerText = '♣️';

    diamond.classList.add('diamond');
    diamond.style.left = Math.random() * 100 + "vw";
    diamond.style.animationDuration = Math.random() * 2 + 3 + "s";
    diamond.innerText = '️♦️';

    document.body.appendChild(heart);
    document.body.appendChild(spade);
    document.body.appendChild(club);
    document.body.appendChild(diamond);

    setTimeout(() => {
        heart.remove();
        spade.remove();
        club.remove();
        diamond.remove();
    }, 5000);
}

setInterval(fallingCards, 300);

