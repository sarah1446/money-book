import React from 'react';
import MoneyList from './MoneyList';
// import AddBar from './AddBar.js'

class MoneyListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: '0'
    }
  }


  render() {
    // const _total = this.props.totalPrice
    return (
      <div>
        <div className="date">2020.06</div>
        {
          this.props.moneyList.map((list, key) => {
            return (
              <MoneyList
                list={list}
                key={key}
                deleteList={this.props.deleteList}
                updatingMoneyList={this.props.updatingMoneyList}
              >
              </MoneyList>
            )
          })
        }
        <p>{this.props.totalPrice}</p>
      </div>
    )
  }
}

export default MoneyListWrap;