import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 9,
        category : 'general',
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26131e3ab15949a2b2ac180087639f0b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults })
        document.title = `Portal News - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}` ;
    }
    async componentDidMount() {
        this.updateNews();
    }

    //     async componentDidMount() {

    //         // fetch("https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26131e3ab15949a2b2ac180087639f0b").then((response) => response.json())
    //         // .then((data) => {
    //         //     this.setState({
    //         //         articles: data.articles
    //         //     });
    //         // });

    //         fetch('https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26131e3ab15949a2b2ac180087639f0b')
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
        this.updateNews();
        this.setState({ page: this.state.page - 1, loading: false });
    }

    nxtPage = async () => {
        this.updateNews();
            this.setState({ page: this.state.page + 1, loading: false })
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2 className='text-center my-4'>{(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row my-2">
                        {this.state?.articles?.length && !this.state.loading && this.state?.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element?.title} description={element?.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
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
