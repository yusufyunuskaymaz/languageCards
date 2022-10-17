import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Image from "react-bootstrap/Image"
import { useState } from 'react'

const Language = ({name,img, options}) => {

  const [showDesc, setShowDesc] = useState(false)
  console.log(showDesc)

  return (
    <Container className='p-4 rounded-2 h-100 lang' style={{background:"peachpuff"}} onClick={() => setShowDesc(!showDesc)}>
      {!showDesc && (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Image className='lang-logo'  width="70%" src={img}></Image>
        <h3 className='display-6'>{name}</h3>
      </Container>
      )}

      {showDesc && (
        <ol className='h-100 d-flex flex-column justify-content-center'>
        {options.map((item) => {
          return (
            <li className='h5 text-start'>{item}</li>
          )
        })}
      </ol>
      )}
      

      
    </Container>
  )
}

export default Language