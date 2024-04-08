import React from 'react'
import OutputCard from '../../components/outputCard'

const GenerateOutput = ({furnitureSuggestions}) => {
  console.log(furnitureSuggestions)
  return (
   <>
   <OutputCard furnitureSuggestions={furnitureSuggestions}/>  
   </>
  )
}

export default GenerateOutput