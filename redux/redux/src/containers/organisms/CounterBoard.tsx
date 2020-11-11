import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, decrement, increment } from "../../actions";
import { CounterState } from "../../reducer";
import CounterBoards from "../../components/organisms/CounterBoards";

const EnhancedCounterBoard: FC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoards
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
