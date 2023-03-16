document.addEventListener('DOMContentLoaded', () => {
  const secondHand = document.querySelector('.second-hand')
  const minHand = document.querySelector('.minute-hand')
  const hourHand = document.querySelector('.hour-hand')


  function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = (second / 60) * 360 ; // offset the 90 degrees used to set the hand starting at 12:00 position
    if (secondDegrees === 0) secondHand.style.transition = 'all 0s';
    else secondHand.style.transition = 'all .5s';
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = secondDegrees / 60 + (minute / 60) * 360;
    if (minuteDegrees === 0) minHand.style.transition = 'all 0s';
    else minHand.style.transition = 'all 0.1s';
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = minuteDegrees / 60  + (hour / 12) * 360;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    const hands= ["secondHand", "minHand", "hourHand"]
    for (let i = 0; i < hands.length; i++) {
      let h = hands[i];
      const degreeName = hands[i].substring(0, hands[i].indexOf("Hand"));

      // h.style.transform =`rotate`
    }






  }

  setInterval(setDate, 1000);
})