"use stricts";

const submit = document.getElementById('submit');
const field = document.querySelector('.bord');
// const both_img = document.querySelector('.both-img');
const star = document.querySelector('.star');
const thanks_img = document.querySelector('.tk');
const rate = document.querySelector('.rating');
const thanks_dou = document.querySelector('.ty')
// const remove = document.querySelectorAll('.invins');
const chang_tk = document.querySelector('.para');
const que = document.querySelector('.question');
const req = document.querySelector('.request');
const appre = document.querySelector('.appreciation');
const ratingBtn = document.querySelectorAll('.n');
const ratingNumber = document.querySelector('.number');
// const change_rate = document.querySelector('.rating span')
const change_rate = document.querySelector('.change');

submit.addEventListener('click',()=>{
    submit.classList.add('invins');
    
    if(submit.classList.contains('invins')){
        field.classList.add('second-bord');
        star.classList.add('invins');
        thanks_img.classList.remove('invins');
        chang_tk.classList.replace('para','tk-para');
        rate.classList.remove('invins');
        thanks_dou.classList.remove('invins');
        que.classList.add('invins');
        req.classList.add('invins');
        appre.style.display = 'flex';
        ratingNumber.classList.add('invins');
        ratingBtn.forEach((rateBtn)=>{
            rateBtn.addEventListener('click',()=>{
                // const rateNum = rateBtn.innerHTML;
                // console.log(rateNum);
                // change_rate.innerText = rateNum;
                console.log('abc');
            })
        })
        
    }
    
})
