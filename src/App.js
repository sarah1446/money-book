import React from 'react';
import './App.css';
import AddBar from './AddBar';
import MoneyListWrap from './MoneyListWrap';
import TotalPrice from './TotalPrice';
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyList: [
        {
          content: "",
          price: "",
          time: "",
          id: uuidv4()
        }
      ],
      totalPrice: 0
    }
  }

  addMoneyList = (text, price) => {
    const t = new Date()
    this.setState({
      moneyList: [
        ...this.state.moneyList,
        {
          content: text,
          price: price,
          time: t.toLocaleTimeString(),
          id: uuidv4()
        }
      ]
    })
  }

  deleteList = (list) => {
    const moneyList = this.state.moneyList.slice();
    this.setState({
      moneyList: moneyList.filter(t => t !== list),
    })
  }

  totalPrice = (price) => {
    // this.state.moneyList로 했을땐 안됐음. this.state.totalPrice로 접근했어야 함.
    let totalPrice = this.state.totalPrice;
    this.setState({
      totalPrice: Number(price) + Number(totalPrice)
    })
  }

  render() {
    return (
      <div className="App">
        <AddBar totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
        <MoneyListWrap
          moneyList={this.state.moneyList}
          deleteList={this.deleteList}
        ></MoneyListWrap>
        <TotalPrice totalPrice={this.state.totalPrice}></TotalPrice>
      </div>
    )
  }
}
export default App;
