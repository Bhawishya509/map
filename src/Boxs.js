import React from 'react'
import {
    Box,
    Input,
  
  } from '@chakra-ui/react' 
  import {
    Autocomplete,
    
  } from '@react-google-maps/api'
const Boxs = (props) => {

  const change=(e)=>
  {
  
  }
  return (
    <>
 
 
            <Autocomplete >
              <Input
              style={{marginTop:"1px"}}
                type='text'
                placeholder='Destination'
                value={"1"}
                onChange={""}
              />
            </Autocomplete>
        
        

    </>
  )
}

export default Boxs