//Dom


const currentTheme = false;
const body = document.querySelector('body');
console.log(body);

const theme = document.getElementById('dark');

theme.addEventListener('click', () => {
    body.style.background = '#3e3e42';
})


document.getElementById('grey').addEventListener('click', function(){
    body.style.background = 'grey';
})

document.getElementById('white').addEventListener('click', function(){
    body.style.background = 'white';
})

document.getElementById('blue').addEventListener('click', function(){
    body.style.background = 'blue';
})

document.getElementById('green').addEventListener('click', function(){
    body.style.background = 'green';
})

document.getElementById('yellow').addEventListener('click', function(){
    body.style.background = 'yellow';
})

document.getElementById('red').addEventListener('click', function(){
    body.style.background = 'red';
})
