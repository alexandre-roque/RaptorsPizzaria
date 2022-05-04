import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.tsx'
import App from '.'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { Provider } from 'react-redux'
import store from './store'
import Theme from './components/CustomThemeProvider'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient } >
      <Provider store={ store }>
        <Theme>
          <App />
        </Theme>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
