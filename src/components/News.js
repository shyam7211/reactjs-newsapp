import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';



const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async (page) => {
        setLoading(true);

        props.setProgress(10);

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70);
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults)
            setPage(page);
        props.setProgress(100);
        setLoading(false);
        
    }




    const fetchMoreData = async () => {
        // updateNews(page + 1);
        // props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // props.setProgress(70);
            setArticles(articles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults)
            setPage(page+1);

        // props.setProgress(100);
        // document.title = `Portal News - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`;
    };

    useEffect(() => {
        document.title = `Portal News - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`;
        updateNews(1);
        // setLoading(false);
    }, [])
    

  

    // async componentDidMount() {
    //     props.setProgress(10);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page}&pagesize=${props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     props.setProgress(60);
    //     this.setState({ 
    //         articles: parsedData.articles, 
    //         loading: false, 
    //         totalResults: parsedData.totalResults 
    //     })
    //     props.setProgress(100);
    //     document.title = `Portal News - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`;
    // }

        return (

            <>
                <div className="container my-3">
                    <h2 className='text-center my-4'>{(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} - Top Headlines</h2>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                    <div className="container">

                        <div className="row my-2">
                            {!loading && articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-2" key={element.url}>
                                        <NewsItem title={element?.title} description={element?.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    </InfiniteScroll>
                </div>
            </>
        )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
