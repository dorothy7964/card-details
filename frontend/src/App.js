import React, {Component} from 'react';
import './company.css';
import Card from './Card';

class App extends Component {
  render(){
    return(
      <div>
        <button>데이터 가져오기</button>
        <div>count</div>
        <hr style={{ margin : '10px 0' }} />
        <div className="container">
            <Card />
        </div>

        {/*<div>{this.state.company.length > 0 && this.state.company[0].name}</div>*/}
      </div>
    )
  }
}

export default App;
