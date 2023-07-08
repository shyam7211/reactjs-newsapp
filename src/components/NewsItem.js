import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{title}...</h6>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
