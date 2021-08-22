import React from 'react'
import { useHistory } from 'react-router-dom';
const Cards = ({id,title, picture, author, description, date, category}) => {
    const history = useHistory();
    const handleRedirect = (id) =>{
        return history.push(`/blogs/${id}`);
    }

    return (
        <div className="ui cards">
        <div className="card">
          <div className="content">
            <img className="right floated mini ui image" src={picture} alt={author}/>
            <div className="header">
              {title}
            </div>
            <div className="meta">
              {category}
            </div>
            <div className="description">
              {description}
              
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div className="ui basic green button">{author} - Date : {date}</div>
              
              <button className="ui basic red button" onClick={() => handleRedirect(id)}>Details</button>
              
            </div>
          </div>
        </div>
        </div>
    )
}

export default Cards;
