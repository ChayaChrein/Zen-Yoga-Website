const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



const text = document.querySelector('.headtext')
const img = document.querySelector('.headpic')

let load = 100
let int = setInterval(blurring, 30)

function blurring() {
  load--

  if (load < 40) {
    clearInterval(int)
  }

  text.style.opacity = scale(load/2,100, 0, 0, 1)
  img.style.filter = `blur(${scale(load, 100, 0, 0, 30)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
