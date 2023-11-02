let toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        let spoiler = this.parentElement.nextElementSibling;
        spoiler.classList.toggle('active');
    });
});