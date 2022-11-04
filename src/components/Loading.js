import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
to{
 transform: rotate(360deg);
}`

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-color: transparent;
  border-top-color: var(--primary3);
  animation: ${spinner} 0.9s linear infinite;
`

export default Loading
