import  Container  from "react-bootstrap/Container"
import Image from 'react-bootstrap/Image'
import reactLogo from "../assets/react.svg"




const Header = () => {
  return (
    <Container>
      <Image width="250px"  src={reactLogo}></Image>
    </Container>
  )
}

export default Header

