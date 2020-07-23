import React from 'react';

class MoneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      price: '',
      time: '',
      contentUpdatingMode: false,
      priceUpdatingMode: false,
    }
  }

  deleteList = () => {
    this.props.deleteList(this.props.list, this.props.list.price);
  }

  contentUpdatingOpen = (e) => {
    this.setState({
      contentUpdatingMode: true,
      content: e.target.value,
      // price: e.target.value
    })
  }

  priceUpdatingOpen = (e) => {
    this.setState({
      priceUpdatingMode: true,
      // price: e.target.value
    })
  }

  contentUpdating = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        contentUpdatingMode: false,
      });
      this.props.updatingMoneyList({
        ...this.props.list,
        content: e.target.value
      });
    }
  }

  priceUpdating = e => {
    if (e.keyCode === 13) {
      this.setState({
        priceUpdatingMode: false,
      });
      this.props.updatingMoneyList2({
        ...this.props.list,  // 
        price: e.target.value
      });
    }
  }



  render() {
    const { content, price, time } = this.props.list;
    return (
      <div className="money-list">
        <div className="delete" onClick={this.deleteList}>x</div>
        <ul className="list-wrap">
          <li className="time">{time}</li>
          <li className="cont" onDoubleClick={this.contentUpdatingOpen}>
            {this.state.contentUpdatingMode === false ?
              //내용
              content
              :
              //수정모드 
              <input type="text" defaultValue={content} onKeyDown={this.contentUpdating} />
            }
          </li>
          <li className="price" onDoubleClick={this.priceUpdatingOpen}>
            {this.state.priceUpdatingMode === false ?
              price
              :
              <input type="text" defaultValue={price} onKeyDown={this.priceUpdating} />
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default MoneyList;
