let elForm = document.querySelector('.js-form');
let elInput = document.querySelector('.js-input');
let elList = document.querySelector('.js-list');

elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let elItem = document.createElement('li');
  let elText = document.createElement("p")
  elItem.appendChild(elText)
  elList.appendChild(elItem);
  elItem.setAttribute('class', 'list-unstyled');
  elText.setAttribute('class','ms-1 p-2 rounded-circle bg-danger text-light');
  let Time = +elInput.value;
  
  elText.textContent = Time
  let timeInterval = setInterval(() => {
    Time--;
    elText.textContent = Time;
  }, 1000);
  
  setTimeout(() => {
    clearInterval(timeInterval)
    elItem.innerHTML = ''
  }, Time * 1000);
  elInput.value = '';
});
