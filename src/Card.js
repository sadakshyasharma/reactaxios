import React from 'react'
import testData from './testData';
import CardList from './CardList';

const Card = (props) => {

  const { profile } = props;

  if (!profile) return;
  
    return (
      
      <div className="github-profile">
        <img src= {profile.avatar_url} />
        
                <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );   

}

export default Card;
