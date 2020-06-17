import React from 'react';

class MoneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      time: '',
      editingMode: false
    }
  }

  deleteList = () => {
    this.props.deleteList(this.props.list, this.props.list.price);
  }

  editing = (e) => {
    this.setState({
      editingMode: true,
      content: e.target.value,
      price: e.target.value
    })
  }

  render() {
    const { content, price, time } = this.props.list;
    return (
      <div className="money-list">
        <span onClick={this.deleteList}>x</span>
        <ul className="list-wrap">
          <li className="time">{time}</li>
          <li className="cont" onDoubleClick={this.editing}>
            {this.state.editingMode === false ?
              //내용
              content
              :
              //수정모드 
              <input type="text" defaultValue={content} />
            }
          </li>
          <li className="price">{price}</li>
        </ul>
      </div>
    )
  }
}

export default MoneyList;
