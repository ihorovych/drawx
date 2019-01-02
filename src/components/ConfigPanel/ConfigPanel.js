import React from 'react'
import style from './ConfigPanel.scss'

import BrushSize from 'components/BrushSize'
import ColorConfig from 'components/ColorConfig'

const ConfigPanel = ({ setBrushConfig, brush }) => {
  return (
    <div className={style['wrap']}>
      <ColorConfig setBrushConfig={setBrushConfig} />
      <BrushSize brush={brush} setBrushConfig={setBrushConfig} />
    </div>
  )
}

export default ConfigPanel