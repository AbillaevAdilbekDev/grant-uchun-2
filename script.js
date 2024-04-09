'use strict';
window.addEventListener('DOMContentLoaded',()=>{
  const incrementButton = document.querySelector('[increment]');
  const decrementButton = document.querySelector('[decrement]');
  const reloadButton = document.querySelector('[reload]');
  const display = document.querySelector('[display]');
  let count = 0;
  const increment = (element) => {
    element.addEventListener('click',()=>{
      count++;
      display.textContent = count;
      if(count>0){
        success.classList.add('show');
        success.classList.remove('hide');
      }
    });
  };
  const decrement = (element) => {
    element.addEventListener('click',()=>{
      count--;
      display.textContent = count;
    });
  };
  const reload = (element) => {
    element.addEventListener('click',()=>{
      count -= count;
      display.textContent = count;
    });
  };
  increment(incrementButton);
  decrement(decrementButton);
  reload(reloadButton);
});