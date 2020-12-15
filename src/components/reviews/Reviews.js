import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  

  render() {
    const associatedReviews = this.props.reviews.filter(r => r.restaurantId === this.props.restaurantId )

    return (
      <ul>
        {associatedReviews.map(r => (<Review key={r.id} review={r} delete={this.props.delete}/>))}
      </ul>
    );
  }
};

export default Reviews;