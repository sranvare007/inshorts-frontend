import React from 'react';
import mapper from '../utils/mapper';

class Navbar extends React.Component
{

    onCategoryClick = (category) => {
        this.props.onCategoryClick(mapper[category]);
        // console.log(event);
    }

    render()
    {
        return (
            <div className="ui top fixed menu">
                <div className="item">
                    <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" style={{ height: '40px', width: '100px' }}/>
                </div>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>All News</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>India</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Business</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Sports</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>World</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Politics</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Technology</a>
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Startup</a>                
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Entertainment</a>                
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Science</a>                
                <a className="item" onClick={ (event) => this.onCategoryClick(event.target.innerHTML) }>Automobile</a>
            </div>
        );
    }
}

export default Navbar;