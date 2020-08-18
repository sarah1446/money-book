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
    return (
      <div className="money-list-wrap">
        {
          this.props.money.moneyList.map((list, key) => {
            return (
              <MoneyList
                list={list}
                key={key}
              >
              </MoneyList>
            )
          })
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    money: state.money
  }
}

const connectToStore = connect(
  mapStateToProps,
);

export default connectToStore(MoneyListWrap);