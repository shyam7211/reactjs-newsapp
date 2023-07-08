import React, { Component } from 'react'
import defaultImage from './defaultImage.jpeg'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, author, source } = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex: 1}}>
                        {source}
                    </span>
                    <img src={imageUrl?imageUrl:defaultImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} at {new Date(publishedAt).toGMTString()} </small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
