import React from 'react';
import './App.css';
import AddBar from './components/AddBar';
import MoneyListWrap from './components/MoneyListWrap';
import TotalPrice from './components/TotalPrice';
import Today from './components/Today';
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moneyList: [],
      totalPrice: 0
    }
  }

  addMoneyList = (text, price) => {
    const time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    this.setState({
      moneyList: [
        ...this.state.moneyList,
        {
          content: text,
          price: Number(price).toLocaleString(),
          // time: t.toLocaleTimeString(),
          time: hours + ':' + mins,
          id: uuidv4()
        }
      ],
      totalPrice: this.state.totalPrice + Number(price)
    })
  }

  //내역 수정
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

  //가격 수정
  updatingMoneyList2 = (list) => {
    let moneyList = this.state.moneyList.slice();
    for (var i = 0; i < moneyList.length; i++) {
      if (moneyList[i].id === list.id) {
        // moneyList[i].price = list.price;
        let changedPrice = Number(list.price).toLocaleString();
        //console.log(typeof test); // number
        moneyList[i].price = changedPrice;
      }
      //price: Number(price).toLocaleString(),
    }

    let total = 0;
    // console.log('total ' + typeof total);
    for (var i = 0; i < this.state.moneyList.length; i++) {
      total += Number(this.state.moneyList[i].price);
    }
    this.setState({
      ...moneyList,
      totalPrice: total,
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

  render() {
    return (
      <div className="App">
        <Today></Today>

        <MoneyListWrap
          moneyList={this.state.moneyList}
          deleteList={this.deleteList}
          updatingMoneyList={this.updatingMoneyList}
          updatingMoneyList2={this.updatingMoneyList2}
        ></MoneyListWrap>
        <div className="bottom">
          <TotalPrice totalPrice={this.state.totalPrice}></TotalPrice>
          <AddBar totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
        </div>
      </div>
    )
  }
}
export default App;