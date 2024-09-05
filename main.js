const button = document.querySelector('button')
const dropdown = document.querySelector('#dropdown')
const buttonSvg = document.querySelector('#buttonSvg')

button.addEventListener('click', () => {
    buttonSvg.classList.toggle('rotate-180');
    dropdown.classList.toggle('translate-y-3');
    dropdown.classList.toggle('opacity-0');
})
