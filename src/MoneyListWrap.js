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
        {
          this.props.moneyList.map((list, key) => {
            return (
              <MoneyList
                list={list}
                key={key}
                deleteList={this.props.deleteList}
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