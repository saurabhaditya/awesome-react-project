import Square from './Square'
import {useImmer} from 'use-immer';
import {useState} from 'react';

export default function Board() {
    const [values, updateValues] = useImmer(Array(9));
    const [isX, setIsX] = useState(true);
    return <>
        <div className="board-row">
            {/*for (var i = 0; i <  3; i ++) {*/}
            {/*renderSquare(i);*/}
            {/*}*/}
            {/*{Array(3).map(i => {renderSquare(i)})}*/}
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
        updateValues(values => {
            values[i] = isX? 'X':'O';
        });
        setIsX(isX => !isX);
    }

    function renderSquare(i) {
        return <Square value={values[i]} handleClick={() => handleClick(i)}/>
    }
}
