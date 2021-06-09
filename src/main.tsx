import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

import { App } from './App'

WebFont.load({
  google: {
    families: ['Noto Sans JP:400&display=swap', 'sans-serif'],
  },
})

ReactDOM.render(<App />, document.getElementById('root'))
