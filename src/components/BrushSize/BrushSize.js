import React from 'react'

import style from './BrushSize.scss'

class BrushSize extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.brushPreviewRef = React.createRef()
    this.gridRef = React.createRef()

    this.drawBrushPreview = this.drawBrushPreview.bind(this)
    this.drawGrid = this.drawGrid.bind(this)

    this.setBrushSize = this.setBrushSize.bind(this)
  }

  componentDidMount() {
    this.brushPreviewRef.current.width = 75
    this.brushPreviewRef.current.height = 75

    this.gridRef.current.width = 75
    this.gridRef.current.height = 75

    this.brushCanvas = this.brushPreviewRef.current.getContext('2d')
    this.gridCanvas = this.gridRef.current.getContext('2d')

    this.drawBrushPreview()
    this.drawGrid()
  }

  componentDidUpdate() {
    this.drawBrushPreview()
  }

  drawGrid() {
    const ctx = this.gridCanvas
    for (let i = 8; i <= 75; i += 10) {
      ctx.moveTo(i, 0)
      ctx.lineTo(i, 75)
    }

    for (let i = 8; i <= 75; i += 10) {
      ctx.moveTo(0, i)
      ctx.lineTo(75, i)
    }

    ctx.strokeStyle = "grey"
    ctx.lineWidth = 0.1
    ctx.stroke()
  }

  drawBrushPreview() {
    const ctx = this.brushCanvas
    const { brush } = this.props

    ctx.fillStyle = brush.color
    
    ctx.beginPath()
    ctx.clearRect(0, 0, 75, 75)
    ctx.closePath()


    ctx.beginPath()
    ctx.arc(38, 38, brush.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
  }

  setBrushSize(e) {
    const newSize = e.target.value / 1000 * 350
    this.props.setBrushConfig({ size: newSize })
  }


  render() {
    return (
      <div className={style['wrap']}>
        <input
          onChange={this.setBrushSize}
          type="range"
          name="brush-size"
          className={style['brush-size']}
        />
        <div className={style['canvas-wrap']}>
          <canvas ref={this.gridRef} className={style['canvas']}></canvas>
          <canvas ref={this.brushPreviewRef} className={style['canvas']}></canvas>
        </div>
      </div>
    )
  }
}

export default BrushSize;
