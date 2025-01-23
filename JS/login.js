const signinBtnlink = document.querySelector('.signinBtn-link');
const signupBtnlink = document.querySelector('.signupBtn-link');
const wrapper = document.querySelector('.wrapper');



signupBtnlink.addEventListener('click', () => {
    document.querySelector("#signIN").classList.add('active')
    document.querySelector("#signUp").classList.add('active')
});
signinBtnlink.addEventListener('click', () => {
    document.querySelector("#signIN").classList.remove('active')
    document.querySelector("#signUp").classList.remove('active')
});
