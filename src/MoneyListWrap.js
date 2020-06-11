import React from 'react';
import MoneyList from './MoneyList';

class MoneyListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0'
    }
  }


  render() {
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
      </div>
    )
  }
}

export default MoneyListWrap;