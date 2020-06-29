import React from 'react';

class MoneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      time: '',
      updatingMode: false
    }
  }

  deleteList = () => {
    this.props.deleteList(this.props.list, this.props.list.price);
  }

  updatingOpen = (e) => {
    this.setState({
      updatingMode: true,
      content: e.target.value,
      price: e.target.value
    })
  }

  updating = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        updatingMode: false,
      });
      //let newText = e.target.value;
      //console.log(newText);
      this.props.updatingMoneyList({
        ...this.props.list,
        content: e.target.value
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
          <li className="cont" onDoubleClick={this.updatingOpen}>
            {this.state.updatingMode === false ?
              //내용
              content
              :
              //수정모드 
              <input type="text" defaultValue={content} onKeyDown={this.updating} />
            }
          </li>
          <li className="price">{price}</li>
        </ul>
      </div>
    )
  }
}

export default MoneyList;
