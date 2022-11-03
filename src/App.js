import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import { Button } from '@mui/material'

const StyledBtn = styled(Button)`
  text-transform: capitalize;
`

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button color='primary' variant='contained'>
        hello word
      </Button>
      <StyledBtn color='primary' variant='contained'>
        hello word
      </StyledBtn>
      {/* <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton> */}
    </div>
  )
}

export default App
