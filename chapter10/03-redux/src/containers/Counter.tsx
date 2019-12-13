import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { add, decrement, increment } from '../actions/counter';
import Counter from '../components/Counter';
import { CounterState } from '../reducer';

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispacth: Dispatch): DispatchProps =>
  bindActionCreators({ add, decrement, increment }, dispacth);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
