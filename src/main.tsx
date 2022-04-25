import React from 'react'
import ReactDOM from 'react-dom'
import './index.tsx'
import App from '.'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { Provider } from 'react-redux'
import store from './store'
import GlobalStyle from "./styles/global"

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient } >
      <Provider store={ store }>
        <GlobalStyle />
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
