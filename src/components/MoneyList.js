import React from 'react';
import { connect } from "react-redux";
import { deleteList, updatingContent } from "../actions";
class MoneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // content: '',
      // price: '',
      // time: '',
      updatingContentMode: false,
      updatingPriceMode: false
    }
  }

  deleteList = () => {
    this.props.deleteList({
      price: this.props.list.price,
      id: this.props.list.id
    });
  }

  updatingContentOpen = e => {
    this.setState({
      updatingContentMode: true,
      content: e.target.value,
      // price: e.target.value
    })
  }

  updatingContent = e => {
    if (e.keyCode === 13) {
      this.setState({
        updatingContentMode: false,
      });
      this.props.updatingContent({
        ...this.props.list,
        content: e.target.value
      });
    }
  }

  updatingPriceOpen = e => {
    this.setState({
      updatingPriceMode: true,
      // price: e.target.value
    })
  }

  updatingPrice = e => {
    if (e.keyCode === 13) {
      this.setState({
        updatingPriceMode: false,
      });
      this.props.updatingPrice({
        ...this.props.list,  // 
        price: e.target.value
      });
    }
  }



  render() {
    const { content, price, time } = this.props.list;
    // console.log('price ' + price);
    return (
      <div className="money-list">
        <ul className="list-wrap">
          <li className="time">{time}</li>
          <li className="cont listCont" onDoubleClick={this.updatingContentOpen}>
            {this.state.updatingContentMode === false ?
              //내용
              content
              :
              //수정모드 
              <input type="text" defaultValue={content} onKeyDown={this.updatingContent} className="modi-cont" />
            }
          </li>
          <li className="price priceCont" onDoubleClick={this.updatingPriceOpen}>
            {this.state.updatingPriceMode === false ?
              '-' + price + '원'
              :
              <input type="number" defaultValue={price} onKeyDown={this.updatingPrice} className="modi-price" />
            }
          </li>
        </ul>
        <div className="delete" onClick={this.deleteList}><span>-</span></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteList: del => dispatch(deleteList(del)),
    updatingContent: updating => dispatch(updatingContent(updating)),
  }
}
const connectToStore = connect(
  null,
  mapDispatchToProps
)

export default connectToStore(MoneyList);

// export default MoneyList;
