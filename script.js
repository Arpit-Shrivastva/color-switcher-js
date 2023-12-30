//Dom


const currentTheme = false;
const body = document.querySelector('body');
// console.log(body);

const head = document.getElementById('head');
// console.log(head);

const foot = document.getElementById('foot');
// console.log(foot);

const theme = document.getElementById('dark');

// theme.addEventListener('click', () => {
//     if (!currentTheme) {
//         body.style.background = '#3e3e42';
//         head.style.color = 'white'
//         foot.style.color = 'white'
//     }else{
//         body.style.background = 'rgb(150, 182, 252)';
//         head.style.color = 'black'
//         foot.style.color = 'black'
//     }
// })


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
