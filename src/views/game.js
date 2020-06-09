import React, { useState } from 'react';
import FormGame from './form-game';
import TableGame from './table-game';

const Game = () => {
    const [state, setState] = useState({
        player1: null,
        player2: null,
        jugada: null,
    })

    const handleChange = e => {
        console.log("desde handleChange");
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const handleClick = e => {
        console.log("desde handleClick");
        let data = {
            [e.target.name]: e.target.innerHTML
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const handleChangeJugada = () => {
        console.log("desde handleJugada");
        let data = {
            jugada: state.jugada === "X" ? "O" : "X"
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    return (
        <>
            <h1>Game</h1>
            {
                state.player1 === null || state.player2 === null || state.jugada === null ?
                    (
                        <FormGame handleChange={handleChange} handleClick={handleClick} />
                    ) : (
                        <TableGame {...state} handleChangeJugada={handleChangeJugada}/>
                    )
            }
        </>
    )
}

export default Game;