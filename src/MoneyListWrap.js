import React from 'react';
import MoneyList from './MoneyList';

class MoneyListWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        {
          this.props.moneyList.map((a, key) => {
            return (
              <ul className="" key={key}>
                <li>{a.time}</li>
                <li>{a.content}</li>
                <li>{a.price}</li>
              </ul>
            )
          })
        }
      </div>
    )
  }
}

export default MoneyListWrap;