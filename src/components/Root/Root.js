import React from 'react'

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
  }

  
  render() {
    return (
      <>
        <ConfigPanel />
        <Canvas brush={this.state.brush} />
      </>
    );
  }
}

export default Root;

