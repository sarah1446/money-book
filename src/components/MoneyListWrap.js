import React from 'react';
import MoneyList from './MoneyList';
// import AddBar from './AddBar.js'
import { connect } from "react-redux";

class MoneyListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ''
    }
  }

  render() {
    // const _total = this.props.totalPrice
    return (
      <div className="money-list-wrap">
        {
          this.props.money.map((list, key) => {
            return (
              <MoneyList
                save={this.props.save}
                list={list}
                key={key}
              // deleteList={this.props.deleteList}
              // updatingMoneyList={this.props.updatingMoneyList}
              // updatingMoneyList2={this.props.updatingMoneyList2}
              >
              </MoneyList>
            )
          })
        }

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    money: state.moneyList
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   addTodo: todo => dispatch(addTodo(todo)),
//   getTodos: dispatch(getTodos())
// });

const connectToStore = connect(
  mapStateToProps
  // mapDispatchToProps
);

export default connectToStore(MoneyListWrap);

// export default MoneyListWrap;