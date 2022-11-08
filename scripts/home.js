function addListeners() {
    document.getElementsByClassName('cyber-button')[0].addEventListener('click', () => {
        window.location.href="./pages/offline.html"
        console.log('hello');
    })
    document.getElementsByClassName('cyber-button')[1].addEventListener('click', () => {
        window.location.href="./pages/instructions.html";
    });
}

addListeners();