import React, {Component} from 'react';
import axios from 'axios';

class Details extends Component {
  state = {
    count : 0,
    details : [],
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    // render 끝난 후 실행 됨
    axios.get(`http://localhost:4000/company/${id}`)
      .then(response=>{
        this.setState({
          details : response.data.details
        });
      }).catch(error=>{
        console.log(error);
      });
  }

  render(){
    const { details } = this.state;
    const { id } = this.props.match.params;
    return(
      <div>
        Company {id} 상세내용
         { details.map((value) => {
            return (
              <div key={value.id}>{value.name}</div>
            )
          })}
      </div>
    )
  }
}

export default Details;
