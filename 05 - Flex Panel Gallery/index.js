document.addEventListener('DOMContentLoaded', ()=>{
  const panels = document.querySelectorAll('.panel');
  function toggleOpen(){
    this.classList.toggle('open');
  }

  function toggleOpenActive(e){
    if (e.propertyName.includes('flex')) { // it could be "flex" or "flex-grow" depending on the browser
      this.classList.toggle('open-active');
    }
    
  }

  panels.forEach(el=> el.addEventListener('click', toggleOpen));
  panels.forEach(el=> el.addEventListener('transitionend', toggleOpenActive));
}) 


