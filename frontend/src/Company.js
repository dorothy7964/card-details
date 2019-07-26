import React, {Component} from 'react';
import axios from 'axios';
import './company.css';
import Card from './Card';

class Company extends Component {
  state = {
   count : 0,
   companys : [],
 }

  getList = () => {
   axios.get('http://localhost:4000/company')
     .then((response) => {
       console.log(response.data);
       this.setState({
         count : response.data.count,
         companys : response.data.companys
       });
     }).catch((error) => {
       console.log(error);
     });
  }

  render(){
    const { count, companys } = this.state;
    return(
      <div>
        <button onClick={this.getList}>데이터 가져오기</button>
        <div>{count}</div>
        <hr style={{ margin : '10px 0' }} />
        <div className="container">
          { companys.map((value)=>{
            return <Card key={value.id} info={value} />
          })}
        </div>
      </div>
    )
  }
}

export default Company;
