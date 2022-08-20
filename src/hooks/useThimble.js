import { useState } from "react"
const useThimble = () => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
 // format user guesses into array of objects
 //key 'b' , colour: 'green'
 const formatGuess = () => {

 }
 const addNewGuess = () => {

 }
 const handleKeyup = () => {

 }
 return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useThimble