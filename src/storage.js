
let textInput = document.querySelector('.textInput');
let priceInput = document.querySelector('.priceInput');
let sendBtn = document.querySelector('.sendBtn');

let listCont = document.querySelector('.listCont');
let priceCont = document.querySelector('.priceCont');

//내역 값 스토리지에 저장하기
let saveToLocalStorage = () => {
  localStorage.setItem('textInput', listCont.textContent);
  localStorage.setItem('priceInput', priceCont.textContent);
}

const hello = () => {
  console.log(' new function');
}
console.log(textInput);
console.log(sendBtn);
//window.addEventListener('onload', console.log('start!!'));
//btn.addEventListener('click', hello);


