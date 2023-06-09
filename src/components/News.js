import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                <div className="container my-3">
                <h2>Top Headlines of the day</h2>
                    <div className="row my-2">
                        <div className="col-md-4">
                            <NewsItem title="Title - 1" description="Description of the News" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 2" description="Description of the News" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 3" description="Description of the News" />
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-4">
                            <NewsItem title="Title - 4" description="Description of the News" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 5" description="Description of the News" />
                        </div>
                        <div className="col-md-4">
                            <NewsItem title="Title - 6" description="Description of the News" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
