import { Dispatch } from "redux";
import { connect } from "react-redux";

import { add, decrement, increment } from "../../actions";
import Counter from "../../components/organisms/CounterBoards"
import { CounterState } from "../../reducer";

type StateProps = {
  count: number;
};

type DispatchProps = {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
};

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: (amount: number) => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
