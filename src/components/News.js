import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26131e3ab15949a2b2ac180087639f0b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData)
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults })
    }

    //     async componentDidMount() {

    //         // fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=26131e3ab15949a2b2ac180087639f0b").then((response) => response.json())
    //         // .then((data) => {
    //         //     this.setState({
    //         //         articles: data.articles
    //         //     });
    //         // });

    //         fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=26131e3ab15949a2b2ac180087639f0b')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Do something with the fetched data
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // Handle any errors that occur during the fetch
    //     console.error('Error:', error);
    //   });
    //     }

    prevPage = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26131e3ab15949a2b2ac180087639f0b&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData)
        this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
    }

    nxtPage = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {

            console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26131e3ab15949a2b2ac180087639f0b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData)
            this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false })
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container my-3">
                    <h2 className='text-center'>Top Headlines of the day</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row my-2">
                        {this.state?.articles?.length && !this.state.loading && this.state?.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element?.title} description={element?.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page === 1} onClick={this.prevPage} className="btn btn-info">&larr; Previous</button>
                        <button type="button" disabled={!(this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.nxtPage} className="btn btn-info">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
