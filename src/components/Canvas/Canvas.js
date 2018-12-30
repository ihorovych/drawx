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

    // this.responsiveCanvas = this.responsiveCanvas.bind(this)
    // this.updateCanvasSize = this.updateCanvasSize.bind(this)
  }

  componentDidMount() {
    this.canvas = this.canvasDOM.current
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - 18

    this.ctx = this.canvas.getContext('2d')
    this.addCanvasEventListeners()
    // this.responsiveCanvas()
  }

  addCanvasEventListeners() {
    this.canvas.addEventListener('mousedown', this.startDrawing)
    this.canvas.addEventListener('mouseup', this.stopDrawing)
    this.canvas.addEventListener('mousemove', this.drawLine)

    this.canvas.addEventListener('touchstart', this.startDrawing)
    this.canvas.addEventListener('touchend', this.stopDrawing)
    this.canvas.addEventListener('touchmove', this.drawLine)
  }

  // responsiveCanvas() {
  //   this.updateCanvasSize()
  //   window.addEventListener('resize', this.updateCanvasSize)
  // }

  // updateCanvasSize(h = 0, w = 0) {
  //   console.log('i w', window.innerWidth)
  //   console.log('i h', window.innerHeight)
  //   console.log('b w', this.canvas.width)
  //   console.log('b h',this.canvas.height)
  //   if ( this.canvas.width !== window.innerWidth - w) this.canvas.width = window.innerWidth - w
  //   if ( this.canvas.height !== window.innerHeight - h) this.canvas.height = window.innerHeight - h
  //   // this.canvas.width = window.innerWidth - w
  //   // this.canvas.height = window.innerHeight - h
  //   console.log('a w',this.canvas.width)
  //   console.log('a h',this.canvas.height)
  //   console.log('------------------------')
  // }

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
        position.Y = e.changedTouches[0].clientY - 20
        position.X = e.changedTouches[0].clientX
      } else {
        position.Y = e.clientY - 20
        position.X = e.clientX
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
