import React, {Component} from 'react';
import axios from 'axios';
import './company.css';
import Card from './Card';

class Company extends Component {
  state = {
   count : 0,
   companys : [],
 }

  componentDidMount() {
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

  companyDetails = (id) => {
    this.props.history.push(`/company/${id}`);
  }

  render(){
    const { count, companys } = this.state;
    return(
      <div>
        <div>{count}</div>
        <hr style={{ margin : '10px 0' }} />
        <div className="container">
          { companys.map((value)=>{
            return (
              <div key={value.id} onClick={()=>{this.companyDetails(value.id)}}>
                <Card info={value} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Company;
