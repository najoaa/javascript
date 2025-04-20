const colorMap = {
    red: 'red',
    green: 'green',
    blue: 'blue',
    pink: 'pink',
    black: 'black'
};

const buttons = document.querySelectorAll('li');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let colorClass = this.classList.value;
        let selectedColor = colorMap[colorClass] || 'black';
        document.getElementById('body').style.backgroundColor = selectedColor;
    });
});
