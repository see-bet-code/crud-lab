import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }
  handleOnChange = (e) => {
    this.setState({text: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurantId})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
