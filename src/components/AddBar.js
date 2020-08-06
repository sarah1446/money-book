import React from 'react';

import { connect } from "react-redux";
import { addList } from "../action";

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      price: '',
      time: ''
    }
  }
  changeText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }
  changePrice = (e) => {
    this.setState({
      price: e.target.value,
    })
  }

  sendList = () => {
    // const t = new Date();
    //왜 여기서 new Date하면 안되지
    // this.props.addMoneyList(this.state.text, this.state.price);
    this.props.addList({
      content: '수동',
      price: 900
    })
    this.setState({
      text: '',
      price: '',
      // time: t
    });
    this.props.storage();
    // this.props.totalPrice(this.state.price);
  }

  render() {
    return (
      <div className="add-bar">
        <input type="text" onChange={this.changeText} value={this.state.text} className="textInput" />
        <input type="number" onChange={this.changePrice} value={this.state.price} className="priceInput" />
        <button onClick={this.sendList} className="sendBtn">추가</button>
      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    money: state.moneyList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addList: add => dispatch(addList(add))
});

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(AddBar);

// export default AddBar;