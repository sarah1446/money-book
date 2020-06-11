import React from 'react';

class MoneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ''
    }
  }

  deleteList = () => {
    // this.props.deleteList(this.props.moneyList);
    this.props.deleteList(this.props.list);
  }



  render() {
    const { content, price, time } = this.props.list;
    return (
      <div className="money-list">
        <span onClick={this.deleteList}>x</span>
        <ul className="list-wrap">
          <li className="time">{time}</li>
          <li className="cont">{content}</li>
          <li className="price">{price}</li>
        </ul>
      </div>
    )
  }
}

export default MoneyList;