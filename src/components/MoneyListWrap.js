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
              // <div key={key}>{list.content} {Number(list.price)}</div>
              <MoneyList
                // save={this.props.save}
                list={list}
                key={key}
                // deleteList={this.props.deleteList}
                updatingContentt={this.props.updatingContent}
                updatingPrice={this.props.updatingPrice}
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
  // mapDispatchToProps
);

export default connectToStore(MoneyListWrap);


// export default MoneyListWrap;