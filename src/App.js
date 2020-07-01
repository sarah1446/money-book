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
    const t = new Date();
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

  updatingMoneyList = (list) => {
    let moneyList = this.state.moneyList.slice();
    let { content, price, id } = list;
    for (var i = 0; i < moneyList.length; i++) {
      if (moneyList[i].id === list.id) {
        moneyList[i].content = list.content;
      }
    }
    this.setState({
      ...moneyList
    });
  }

  updatingMoneyList2 = (list) => {
    let moneyList = this.state.moneyList.slice();
    for (var i = 0; i < moneyList.length; i++) {
      if (moneyList[i].id === list.id) {
        moneyList[i].price = list.price;
      }
    }
    this.setState({
      ...moneyList,
      // totalPrice: 0
    })
  }

  deleteList = (list, price) => {
    const moneyList = this.state.moneyList.slice();
    const totalPrice = this.state.totalPrice;

    this.setState({
      moneyList: moneyList.filter(t => t !== list),
      totalPrice: Number(totalPrice) - Number(price)
    })
  }

  totalPrice = (price) => {
    //console.log(price);
    // this.state.moneyList로 했을땐 안됐음. this.state.totalPrice로 접근했어야 함.
    const totalPrice = this.state.totalPrice;
    this.setState({
      totalPrice: Number(price) + Number(totalPrice)
    })
  }

  render() {
    return (
      <div className="App">
        <MoneyListWrap
          moneyList={this.state.moneyList}
          deleteList={this.deleteList}
          updatingMoneyList={this.updatingMoneyList}
          updatingMoneyList2={this.updatingMoneyList2}
        ></MoneyListWrap>
        <TotalPrice totalPrice={this.state.totalPrice}></TotalPrice>
        <AddBar totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
      </div>
    )
  }
}
export default App;