window.onload = function() {
    const clickButton = document.getElementById('click');
    const clickCounter = document.getElementById('click-counter');
    let clickCount = 0;

    clickButton.addEventListener('click', () => clickCounter.innerText = clickCount += 1);
}