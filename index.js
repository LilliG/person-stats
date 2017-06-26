console.log("It worked!");

function changeHeading() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Ye Old Person Stats';
}

const btn = document.querySelector('button');

btn.addEventListener('click', changeHeading)
