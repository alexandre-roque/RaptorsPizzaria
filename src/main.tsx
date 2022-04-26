import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.tsx'
import App from '.'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from "./styles/global"
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient } >
      <Provider store={ store }>
        <ThemeProvider theme={store.getState().theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
