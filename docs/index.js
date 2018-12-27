const COLORS = ['black', 'red', 'green', 'blue']
const BRUSH = {
  color: 'black',
  size: 10
}

window.onload = () => {
  const dCanv = document.getElementById('canvas')
  if (dCanv && dCanv.getContext) {
    renderColors()
    let isMouseDown = false

    dCanv.width = window.innerWidth
    dCanv.height = window.innerHeight - 20

    const ctx = dCanv.getContext('2d')
    ctx.lineWidth = BRUSH.size * 2


    dCanv.addEventListener('mousedown', startDrawing)
    dCanv.addEventListener('mouseup', stopDrawing)
    dCanv.addEventListener('mousemove', drawLine)


    dCanv.addEventListener('touchstart', startDrawing)
    dCanv.addEventListener('touchend', stopDrawing)
    dCanv.addEventListener('touchmove', drawLine)

    function startDrawing() {
      isMouseDown = true
    }

    function stopDrawing() {
      isMouseDown = false
      ctx.beginPath()
    }

    function drawLine(e) {
      const position = { X: 0, Y: 0 }
      if (e.changedTouches) {
        position.Y = e.changedTouches[0].clientY - 20
        position.X = e.changedTouches[0].clientX
      } else {
        position.Y = e.clientY - 20
        position.X = e.clientX
      }
      ctx.fillStyle = BRUSH.color
      ctx.strokeStyle = BRUSH.color
      if (isMouseDown) {
        ctx.lineTo(position.X, position.Y)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(position.X, position.Y, BRUSH.size, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(position.X, position.Y)
      }
    }

  }

  function renderColors() {
    const colorsSelector = document.querySelector('.colors')
    COLORS.forEach(color => {
      const colorButton = document.createElement('div')
      colorButton.innerText = color
      colorButton.classList = ['color']
      colorButton.addEventListener('mousedown', () => BRUSH.color = color)
      colorsSelector.appendChild(colorButton)
    })
  }
}
