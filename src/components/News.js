import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,              // loading: false,
            page: 1,
            totalResults: 0,
        }
    }

    async updateNews(page) {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({ 
            articles: this.state.articles.concat(parsedData.articles), 
            // loading: false, 
            totalResults: parsedData.totalResults,
            page: page,
        })
        this.props.setProgress(100);
        document.title = `Portal News - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}`;
    }

    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ 
    //         articles: parsedData.articles, 
    //         loading: false, 
    //         totalResults: parsedData.totalResults 
    //     })
    //     // console.log('Console ====>>> UpdateNEWS')
    //     document.title = `Portal News - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}`;
    // }


    fetchMoreData = () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        // let pageNum = this.state.page;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(`Console before steState    page = ${this.state.page}`)
        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults,
        //     page: pageNum + 1,
        // })
        // console.log(`Console ====>>> fetchMoreData page = ${this.state.page}`);
        // document.title = `Portal News - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}`;
        this.updateNews(this.state.page + 1);
    };

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({ 
            articles: parsedData.articles, 
            loading: false, 
            totalResults: parsedData.totalResults 
        })
        this.props.setProgress(100);
        document.title = `Portal News - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)}`;
    }

    //     async componentDidMount() {

    //         // fetch("https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}").then((response) => response.json())
    //         // .then((data) => {
    //         //     this.setState({
    //         //         articles: data.articles
    //         //     });
    //         // });

    //         fetch('https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}')
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

    // prevPage = async () => {
    //     this.setState({ page: this.state.page - 1, loading: false });
    //     this.updateNews(this.state.page - 1);
    // }

    // nxtPage = async () => {
    //     this.setState({ page: this.state.page + 1, loading: false })
    //     console.log(this.state);
    //     this.updateNews(this.state.page + 1);
    // }

    render() {
        return (

            <>
                <div className="container my-3">
                    <h2 className='text-center my-4'>{(this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1)} - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                    <div className="container">

                        <div className="row my-2">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-2" key={element.url}>
                                        <NewsItem title={element?.title} description={element?.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </InfiniteScroll>
                        {/* Buttons for going to next and previous page if we not use infinite scroll. */}
                    {/* <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page === 1} onClick={this.prevPage} className="btn btn-info">&larr; Previous</button>
                        <button type="button" disabled={!(this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.nxtPage} className="btn btn-info">Next &rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}

export default News
