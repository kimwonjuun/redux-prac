// src/App.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subtractNumber } from './redux/modules/counter';

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const globalNumber = useSelector((state) => state.counter.number);
  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };
  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };
  const onClicksubtractNumberHandler = () => {
    dispatch(subtractNumber(number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClicksubtractNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
