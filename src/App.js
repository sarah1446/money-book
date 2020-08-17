import React from 'react';
import './App.css';
import AddBar from './components/AddBar';
import MoneyListWrap from './components/MoneyListWrap';
import TotalPrice from './components/TotalPrice';
import Today from './components/Today';
// import { v4 as uuidv4 } from "uuid";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moneyList: [],
      totalPrice: 0
    }
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
        // let changedPrice = Number(list.price).toLocaleString();
        let changedPrice = list.price;
        moneyList[i].price = changedPrice;
      }
    }

    let total = 0;
    for (var i = 0; i < this.state.moneyList.length; i++) {
      total += Number(this.state.moneyList[i].price);
    }
    this.setState({
      ...moneyList,
      totalPrice: total,
    });
  }

  storage = () => {
    localStorage.setItem('list', JSON.stringify(this.state.moneyList));
    localStorage.setItem('totalPrice', JSON.stringify(this.state.totalPrice));
  }
  saveDate = (date) => {
    // console.log(date);
    localStorage.setItem('date', date);
  }

  //컴포넌트 업데이트 될때마다 갱신
  componentDidUpdate() {
    this.storage();
  }

  //새로고침했을 때 데이터가 있다면 그려주기 
  componentWillMount() {
    if (localStorage.getItem('list')) {
      //기존데이터 그리기
      this.setState({
        moneyList: JSON.parse(localStorage.list),
        totalPrice: JSON.parse(localStorage.totalPrice)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Today saveDate={this.saveDate}></Today>
        <MoneyListWrap
          moneyList={this.state.moneyList}
          deleteList={this.deleteList}
          updatingMoneyList={this.updatingMoneyList}
          updatingMoneyList2={this.updatingMoneyList2}
        ></MoneyListWrap>
        <div className="bottom">
          <TotalPrice totalPrice={this.state.totalPrice}></TotalPrice>
          <AddBar storage={this.storage} totalPrice={this.totalPrice} addMoneyList={this.addMoneyList} moneyList={this.state.moneyList}></AddBar>
        </div>
      </div>
    )

  }
}
export default App;