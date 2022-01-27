import Square from './Square'
import {useImmer} from 'use-immer';
import {useState} from 'react';

export default function Board() {
    const [values, updateValues] = useImmer(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const winner = calculateWinner(values);
    let status = 'Next Player: ' + (isX ? 'X' : 'O');
    if (winner != null) {
        status = 'Winner: ' + winner
    }
    //debugger;
    return <>
        {status}
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </>

    function handleClick(i) {
        if (winner || values[i]) {
            return;
        }
        updateValues(values => {
            values[i] = isX? 'X':'O';
        });
        setIsX(isX => !isX);
    }

    function renderSquare(i) {
        return <Square value={values[i]} handleClick={() => handleClick(i)}/>
    }
}

// calculateWinner returns the winner as 'X' or 'O'.
function calculateWinner(squares) {
    const winningSquares = [
        // rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //columns
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diagonals
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningSquares.length; i++) {
        const winningRow = winningSquares[i]
        if (squares[winningRow[0]] == 'X' && squares[winningRow[1]] == 'X' && squares[winningRow[2]] == 'X') {
            return 'X';
        } else if (squares[winningRow[0]] == 'O' && squares[winningRow[1]] == 'O' && squares[winningRow[2]] == 'O') {
            return 'O'
        }
    }
    return null;
}