const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')

c1.addEventListener('click',() => {
if(c1.classList.contains('show')){
	c1.classList.remove('show')
} else {
	c1.classList.add('show')
  c2.classList.remove('show')
  c3.classList.remove('show')
  }
})
c2.addEventListener('click',() => {
if(c2.classList.contains('show')){
	c2.classList.remove('show')
} else {
	c2.classList.add('show')
  c1.classList.remove('show')
  c3.classList.remove('show')
  }
})

c3.addEventListener('click',() => {
if(c3.classList.contains('show')){
	c3.classList.remove('show')
} else {
	c3.classList.add('show')
  c1.classList.remove('show')
  c2.classList.remove('show')
  }
})

