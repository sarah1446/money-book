import React from 'react';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    }
  }
  componentDidMount() {
    this.date();
  }
  date = () => {
    let time = new Date();
    let years = time.getFullYear();
    let months = time.getMonth();
    let days = time.getDate();
    this.setState({
      date: `${years}년 ${months + 1}월 ${days}일`,
    })
  }

  render() {
    return (
      <div className="date">
        <span>{this.state.date}</span>
      </div>
    )
  }
}

export default Today;