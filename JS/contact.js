const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#cross');
const headerbar = document.querySelector('.headerbar');
const nav = document.querySelector('.navI');
const navII = document.querySelector('.navII');
const navIII = document.querySelector('.navIII');
const navIV = document.querySelector('.navIV');
const navV = document.querySelector('.navV');
const navVI = document.querySelector('.navVI');


bar.addEventListener('click', function () {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
    headerbar.style.backgroundColor = 'rgb(248, 232, 217)'
    nav.style.boxShadow = '0 5px 10px #DA0116'
    navII.style.boxShadow = '0 5px 10px #DA0116'
    navIII.style.boxShadow = '0 5px 10px #DA0116'
    navIV.style.boxShadow = '0 5px 10px #DA0116'
    navVI.style.boxShadow = '0 5px 10px #DA0116'
    navV.style.boxShadow = '0 5px 10px #DA0116'

}, 200);

cross.addEventListener('click', function () {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
}, 200);


