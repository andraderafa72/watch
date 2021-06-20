const transformSize = 59;

setInterval(() => {
  const unitSeconds = document.querySelectorAll('.seconds .unidade span')
  const dezenSeconds = document.querySelectorAll('.seconds .dezena span')
  const unitMinutes = document.querySelectorAll('.minutes .unidade span')
  const dezenMinutes = document.querySelectorAll('.minutes .dezena span')
  const unitHours = document.querySelectorAll('.hours .unidade span')
  const dezenHours = document.querySelectorAll('.hours .dezena span')

  const divUnitSeconds = document.querySelector('.seconds .unidade')
  const divDezenSeconds = document.querySelector('.seconds .dezena')
  const divUnitMinutes = document.querySelector('.minutes .unidade')
  const divDezenMinutes = document.querySelector('.minutes .dezena')
  const divUnitHours = document.querySelector('.hours .unidade')
  const divDezenHours = document.querySelector('.hours .dezena')



  let hours = `${new Date().getHours()}`;
  let minutes = `${new Date().getMinutes()}`;
  let seconds = `${new Date().getSeconds()}`;

  if(seconds.length === 1) seconds = `0${seconds}`;
  if(minutes.length === 1) minutes = `0${minutes}`;
  if(hours.length === 1) minutes = `0${minutes}`;

  // SEGUNDOS
  for (let i = 0; i < 10; i++) {
    if(seconds[1] === `${i}`){

      unitSeconds.forEach((el, index) => {
        el.classList.remove('selected')
      })

      unitSeconds[i].classList.add('selected')
      console.log(divUnitSeconds)
      divUnitSeconds.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }

  for (let i = 0; i < 5; i++) {
    if(seconds[0] === `${i}`){

      dezenSeconds.forEach((el, index) => {
        el.classList.remove('selected')
      })

      dezenSeconds[i].classList.add('selected')
      divDezenSeconds.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }

  // MINUTOS
  for (let i = 0; i < 10; i++) {
    if(minutes[1] === `${i}`){

      unitMinutes.forEach((el, index) => {
        el.classList.remove('selected')
      })

      unitMinutes[i].classList.add('selected')
      divUnitMinutes.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }
  for (let i = 0; i < 10; i++) {
    if(minutes[0] === `${i}`){

      dezenMinutes.forEach((el, index) => {
        el.classList.remove('selected')
      })

      dezenMinutes[i].classList.add('selected')
      divDezenMinutes.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }

  // HORAS
  for (let i = 0; i < 10; i++) {
    if(hours[1] === `${i}`){

      unitHours.forEach((el, index) => {
        el.classList.remove('selected')
      })

      unitHours[i].classList.add('selected')
      divUnitHours.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }
  for (let i = 0; i < 10; i++) {
    if(hours[0] === `${i}`){

      dezenHours.forEach((el, index) => {
        el.classList.remove('selected')
      })

      dezenHours[i].classList.add('selected')
      divDezenHours.style.transform = `translate3d(0, -${transformSize * i}px, 0)`;
    }
  }


}, 1000)
