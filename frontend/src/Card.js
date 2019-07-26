import React from 'react';

 const Card = ({ info }) => {
  return (
    <div>
      <div className="card">
        <div className="item">
          <div className="photo">
          </div>
          <div className="info">
            <h3>{info.recruit}</h3>
          <div className="name">{info.name}</div>
            <p>채용 보상금 {info.rebate}원</p>
          </div>
          <div className="opt">
            <div className="recom">
              <span>O명 추천</span>
            </div>
            <div className="favorite" style={{ background : 'red' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

 export default Card;
