import React from 'react'

import style from './ColorConfig.scss'

const colors = [
  '#ff0000', '#ff4000', '#ff8000',
  '#ffbf00', '#ffff00', '#bfff00',
  '#80ff00', '#40ff00', '#00ff00',
  '#00ff40', '#00ff80', '#00ffbf',
  '#00ffff', '#00bfff', '#0080ff',
  '#0040ff', '#0000ff', '#4000ff',
  '#8000ff', '#bf00ff', '#ff00ff',
  '#ff00bf', '#ff0080', '#ff0040',
  '#ffffff', '#d9d9d9', '#a6a6a6',
  '#737373', '#404040', '#000000',
]

class ColorConfig extends React.Component {
  constructor(props) {
    super(props);

    this.setBrushColor = this.setBrushColor.bind(this)
  }

  setBrushColor(color) {
    return () => this.props.setBrushConfig({ color })
  }

  render() {
    return (
      <div className={style['wrap']}>
        {colors.map(color => {
          return (
            <div
              key={color}
              className={style['color']}
              style={{ background: color }}
              onClick={this.setBrushColor(color)}
            />
          )
        })}
      </div>
    );
  }
}

export default ColorConfig;