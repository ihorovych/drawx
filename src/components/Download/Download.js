import React from 'react'

import style from './Download.scss'

const Download = ({ imageDataUrl }) => (
  <a
    href={imageDataUrl || '#'}
    download="masterpiece.png"
    className={style['button']}
  >Download</a>
)

export default Download
