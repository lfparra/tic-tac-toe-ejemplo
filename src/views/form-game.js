import React from 'react';

const FormGame = (props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                <div className="col mb-2">
                    <input type="text"
                        className="form-control"
                        placeholder="Player 1"
                        name="player1"
                        onChange={props.handleChange} />
                </div>
                <div className="col">
                    <input type="text"
                        className="form-control"
                        placeholder="Player 2"
                        name="player2"
                        onChange={props.handleChange} />
                </div>
            </div>
            <div className="row">
                <div className="col text-right">
                    <button className="btn btn-primary btn-lg" 
                    name="jugada" onClick={props.handleClick}>X</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary btn-lg" 
                    name="jugada" onClick={props.handleClick}>0</button>
                </div>
            </div>
        </form>
    )
}

export default FormGame;