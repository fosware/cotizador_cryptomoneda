import styled from "@emotion/styled"

const TextMesage = styled.div`
    background-color: #B7323C;
    border-radius: 1rem;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <TextMesage>
      {children}
    </TextMesage>
  )
}

export default Error
