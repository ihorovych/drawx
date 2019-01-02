import React from 'react'

import style from './Root.scss'

import ConfigPanel from 'components/ConfigPanel'
import Canvas from 'components/Canvas'

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brush: {
        color: 'black',
        size: 10,
      }
    }

    this.setBrushConfig = this.setBrushConfig.bind(this)
  }

  setBrushConfig(newBrush) {
    this.setState(state => ({ brush: { ...state.brush, ...newBrush } }))
  }

  render() {
    const { brush } = this.state
    return (
      <div className={style['wrap']}>
        <ConfigPanel brush={brush} setBrushConfig={this.setBrushConfig}/>
        <Canvas brush={brush} />
      </div>
    );
  }
}

export default Root;

