import React from 'react';
import Jimp from 'jimp';

class NewsCard extends React.Component
{

    
    render()
    {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.news.image} style={{ height: '300px', width: '100%' }} />
                </div>
                <div className="content">
                    <a className="header">{this.props.news.title}</a>
                    <div className="meta">
                    <span className="date">{new Date(this.props.news.timestamp).toDateString()}</span>
                    </div>
                    <div className="description">
                    {this.props.news.description}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                    <i className="user icon"></i>
                    {this.props.news.author}
                    </a>
                </div>
            </div>
        )
    }
};

export default NewsCard;