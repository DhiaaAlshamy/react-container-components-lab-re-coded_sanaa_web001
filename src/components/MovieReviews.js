// Code MovieReviews Here
import React from 'react'
const MovieReviews = ({reviews}) =>
 <div className='review-list'>
    {reviews.map(
        review=>{return <div className='review'>
        return (

          <div key={review.headline} className="review">
          <header> <a  className="review-link" href={review.link.url}>
          {review.headline}
          </a>
          <br/>
          <span className="author">{review.byline}</span>
          </header>
          <blockquote>{review.summary_short}</blockquote>
          </div>
              );
        </div>}
    )}
</div>;

 export default MovieReviews
