import React from 'react'

import {NavBar} from './components'
import Routes from './routes'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faFileAlt} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFileAlt)

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  )
}

export default App;
