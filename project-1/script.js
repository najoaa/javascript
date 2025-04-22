const buttons = document.querySelectorAll('li');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let color = this.classList.value;
        document.getElementById('body').style.backgroundColor = color;
    });
});
