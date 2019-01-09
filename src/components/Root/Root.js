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
      },
      imageDataUrl: '',
    }

    this.setBrushConfig = this.setBrushConfig.bind(this)
    this.setImageDataUrl = this.setImageDataUrl.bind(this)
  }

  setBrushConfig(newBrush) {
    this.setState(state => ({ brush: { ...state.brush, ...newBrush } }))
  }

  setImageDataUrl(imageDataUrl) {
    this.setState({ imageDataUrl })
  }

  render() {
    const { brush, imageDataUrl } = this.state
    return (
      <div className={style['wrap']}>
        <ConfigPanel
          brush={brush}
          imageDataUrl={imageDataUrl}
          setBrushConfig={this.setBrushConfig}
          />
        <Canvas
          brush={brush}
          setImageDataUrl={this.setImageDataUrl}
        />
      </div>
    );
  }
}

export default Root;

