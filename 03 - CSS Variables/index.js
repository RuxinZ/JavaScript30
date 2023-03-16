document.addEventListener('DOMContentLoaded', ()=>{
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    // `this` is the input element
    const suffix = this.dataset.sizing || ""; // handle edge case;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // update variable

  }
  inputs.forEach(input => input.addEventListener('change', handleUpdate))
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)) // mousemove also trigges events

})