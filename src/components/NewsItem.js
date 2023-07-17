import React from 'react'
import defaultImage from './defaultImage.jpeg'

const NewsItem = (props) => {
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex: 1}}>
                        {props.source}
                    </span>
                    <img src={props.imageUrl?(props.imageUrl === ""?defaultImage:props.imageUrl):defaultImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">{props.title}...</h6>
                        <p className="card-text">{props.description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!props.author ? "Unknown" : props.author} at {new Date(props.publishedAt).toGMTString()} </small></p>
                        <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
