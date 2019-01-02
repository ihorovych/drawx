import React from 'react'
import style from './Canvas.scss'

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.isBrushDown = false

    this.canvasDOM = React.createRef()

    this.startDrawing = this.startDrawing.bind(this)
    this.stopDrawing = this.stopDrawing.bind(this)
    this.drawLine = this.drawLine.bind(this)
  }

  componentDidMount() {
    this.canvas = this.canvasDOM.current
    this.canvas.width = window.innerWidth - 75
    this.canvas.height = window.innerHeight

    this.ctx = this.canvas.getContext('2d')
    this.addCanvasEventListeners()
  }

  addCanvasEventListeners() {
    this.canvas.addEventListener('mousedown', this.startDrawing)
    this.canvas.addEventListener('mouseup', this.stopDrawing)
    this.canvas.addEventListener('mousemove', this.drawLine)

    this.canvas.addEventListener('touchstart', this.startDrawing)
    this.canvas.addEventListener('touchend', this.stopDrawing)
    this.canvas.addEventListener('touchmove', this.drawLine)
  }

  startDrawing() {
    this.isBrushDown = true
  }

  stopDrawing() {
    this.isBrushDown = false
    this.ctx.beginPath()
  }

  drawLine(e) {
    if (this.isBrushDown) {
      const { brush } = this.props
      const { ctx } = this

      const position = { X: 0, Y: 0 }
      if (e.changedTouches) {
        position.Y = e.changedTouches[0].clientY
        position.X = e.changedTouches[0].clientX - 75
      } else {
        position.Y = e.clientY
        position.X = e.clientX - 75
      }

      ctx.fillStyle = brush.color
      ctx.strokeStyle = brush.color
      ctx.lineWidth = brush.size * 2

      ctx.lineTo(position.X, position.Y)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(position.X, position.Y, brush.size, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(position.X, position.Y)
    }
  }


  render() {
    return (
      <canvas ref={this.canvasDOM} className={style.canvas} >Lol, it's doesn't work</canvas>
    );
  }
}

export default Canvas
