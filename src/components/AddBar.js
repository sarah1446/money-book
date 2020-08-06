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
    this.props.addList({
      content: this.state.text,
      price: this.state.price
    });
    this.setState({
      text: '',
      price: '',
    });
    this.props.storage();
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

const mapStateToProps = (state) => {
  return {
    money: state.moneyList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addList: add => dispatch(addList(add))
  }
};

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectToStore(AddBar);
// export default AddBar;

