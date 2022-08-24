import React, { useEffect } from 'react'
import useThimble from '../hooks/useThimble'
import Grid from './Grid'


export default function Thimble({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useThimble(solution)
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
    </div>
  )
}