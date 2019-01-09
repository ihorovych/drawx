import React from 'react'
import style from './ConfigPanel.scss'

import BrushSize from 'components/BrushSize'
import ColorConfig from 'components/ColorConfig'
import Download from 'components/Download'

const ConfigPanel = ({ setBrushConfig, brush, imageDataUrl }) => {
  return (
    <div className={style['wrap']}>
      <ColorConfig setBrushConfig={setBrushConfig} />
      <BrushSize brush={brush} setBrushConfig={setBrushConfig} />
      <Download imageDataUrl={imageDataUrl} />
    </div>
  )
}

export default ConfigPanel