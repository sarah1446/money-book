import React from 'react';
// import MoneyList from './MoneyList';
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
          this.props.moneyList.map((list, key) => {
            return (
              <div key={key}>{list.content}</div>
              // <MoneyList
              //   save={this.props.save}
              //   list={list}
              //   key={key}
              //   deleteList={this.props.deleteList}
              //   updatingMoneyList={this.props.updatingMoneyList}
              //   updatingMoneyList2={this.props.updatingMoneyList2}
              // >
              // </MoneyList>
            )
          })
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    moneyList: state.moneyList
  }
}

const connectToStore = connect(
  mapStateToProps,
  // mapDispatchToProps
);

export default connectToStore(MoneyListWrap);


// export default MoneyListWrap;