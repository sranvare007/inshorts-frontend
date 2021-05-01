import React from 'react';
import Navbar from './Navbar';
import axios from '../utils/api';
import CardList from './CardList';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { newslist: [] };
    }

    onCategoryClick = async (category) => {
        const news = await axios.get('/', {
            params: { category: category }
        });
        this.setState({ newslist: news.data.articles })
        console.log(news.data);

    }

    render()
    {
        return (
            <div>
                <Navbar onCategoryClick={this.onCategoryClick}/>
                <CardList newslist={this.state.newslist} />
            </div>
        );
    }
};

export default App;