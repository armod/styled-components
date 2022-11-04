import styled, { ThemeProvider } from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@mui/material'
// import Card from './components/Card'
import GlobalStyles from './components/global-styles'
import { useState } from 'react'
import Loading from './components/Loading'

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`

const BaseTheme = {
  color: '#222',
  background: '#fff',
}
const DarkTheme = {
  color: '#FFF',
  background: '#222',
}

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`
function App() {
  const [baseTheme, setTheme] = useState(true)
  const toggleTheme = () => {
    setTheme(!baseTheme)
  }
  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
      <GlobalStyles />
      <Container>
        <Loading />
        <h1>hello world</h1>
        <button className='btn' onClick={toggleTheme}>
          toggle me
        </button>
      </Container>
      {/* <Card /> */}
    </ThemeProvider>
  )
}

export default App
