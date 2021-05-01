import React from 'react';
import NewsCard from './NewsCard';

const CardList = (props) =>
{
    const news = props.newslist.map((news) => {
        return <NewsCard news={news}/>
    });
   
    return (
        <div className="ui cards" style={{ marginTop: '80px', padding: '20px' }}>
            {news}
        </div>
    );
}

export default CardList;