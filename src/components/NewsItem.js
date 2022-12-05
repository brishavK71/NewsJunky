import React from 'react'

const NewsItem=(props)=> {
        let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card" >
                    <div style={{display:'flex',justifyContent: 'flexend', position: 'absolute', right: '-10px', top: '-8px'}}>
                    <span class=" badge rounded-pill bg-danger" >
                        {source}
                    </span>
                    </div>
                    <img src={!imgUrl ? "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/187005526/image_187005526.jpg?io=getty-c-w750" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
