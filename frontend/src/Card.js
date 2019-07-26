import React from 'react';

 const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="item">
          <div className="photo">
          </div>
          <div className="info">
            <h3>모집</h3>
            <div className="name">회사이름</div>
            <p>채용 보상금</p>
          </div>
          <div className="opt">
            <div className="recom">
              <span>O명 추천</span>
            </div>
            <div className="favorite" style={{ background : 'red' }}></div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="item">
          <div className="photo">
          </div>
          <div className="info">
            <h3>모집</h3>
            <div className="name">회사이름</div>
            <p>채용 보상금</p>
          </div>
          <div className="opt">
            <div className="recom">
              <span>O명 추천</span>
            </div>
            <div className="favorite" style={{ background : 'red' }}></div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="item">
          <div className="photo">
          </div>
          <div className="info">
            <h3>모집</h3>
            <div className="name">회사이름</div>
            <p>채용 보상금</p>
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
