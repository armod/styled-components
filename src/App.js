import styled, { ThemeProvider } from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@mui/material'
// import Card from './components/Card'
import GlobalStyles from './components/global-styles'

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`

function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <Card /> */}
    </div>
  )
}

export default App
