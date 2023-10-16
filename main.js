const minNumInput = document.getElementById('min-input');
const maxNumInput = document.getElementById('max-input');
const currentValueEl = document.getElementById('current-number')
const input = document.querySelector('.input')

input.addEventListener('input', function(){
  this.value = this.value.replace(/[^0-9]/g, "")
})

const bar = document.querySelector('.bar');
const minValueEl = document.getElementById('min-value');
const maxValueEl = document.getElementById('max-value');
const halfValueEl = document.getElementById('half-value');

const updateInput = () => {

  const minNum = parseInt(minNumInput.value)
  const maxNum = parseInt(maxNumInput.value)
  const halfNum = (minNum + maxNum) / 2

  minValueEl.textContent = minNum
  maxValueEl.textContent = maxNum
  halfValueEl.textContent = halfNum

  if (minNum >= maxNum ) {
    alert('최솟값은 최댓값보다 작아야 함')
    minNumInput.value = 0
    updateInput()
  }
}

const updateRandomNum = () => {
  const minNum = parseInt(minNumInput.value)
  const maxNum = parseInt(maxNumInput.value)
  const halfNum = parseInt(minNum+maxNum/2)
  let curVal = Math.floor(Math.random()*(maxNum-minNum-1) +minNum +1)
  currentValueEl.textContent = curVal
  const fill = (curVal - minNum) / (maxNum - minNum) * 100;

  if (curVal < halfNum) {
    bar.style.background = `linear-gradient(to right, red 0%, red ${fill}%, black ${fill}%, black calc(${fill}% + 1px), lightgray calc(${fill}% + 1px), lightgray 100%)`
  } else {
    bar.style.background = `linear-gradient(to right, green 0%, green ${fill}%, black ${fill}%, black calc(${fill}% + 1px), lightgray calc(${fill}% + 1px), lightgray 100%)`
  }

}
updateInput()
setInterval(updateRandomNum, 3000)