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

  // updatingMoneyList = (text, price) => {
  //   let moneyList = this.state.moneyList.slice();
  //   console.log(this.state.moneyList.uuid);

  // }

  updatingMoneyList = (list) => {
    let moneyList = this.state.moneyList.slice();
    let { content, price, id } = list;
    console.log(list.content);
    for (var i = 0; i < moneyList.length; i++) {

      if (moneyList[i].id === list.id) {
        console.log(`${moneyList[i].content} ==  ${list.content}`);
        //moneyList[i].content = list.content;
        //console.log(`${moneyList[i].id} === ${list.id} `);
        moneyList[i].content = list.content;
        console.log(moneyList);
      }
    }
    this.setState({
      ...moneyList
      // moneyList: moneyList

    });
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
        ></MoneyListWrap>
        <TotalPrice totalPrice={this.state.totalPrice}></TotalPrice>
        <AddBar totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
      </div>
    )
  }
}
export default App;