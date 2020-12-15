import cuid from 'cuid';

export default function manageRestaurants(state = { 
  restaurants: [],
  reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = { id: cuid(), text: action.text };
      return { ...state, restaurants: [...state.restaurants, newRestaurant] }

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter((r) => r.id !== action.id) }
    
    case 'ADD_REVIEW':
      const newReview = {...action.review, id: cuid() };
      return { ...state, reviews: [...state.reviews, newReview] }
    
    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter((r) => r.id !== action.id) }

    default:
      return state
  }
}

// export default function manageBand(state = {
//   bands: []
// }, action) {
//   switch (action.type) {
//     case 'ADD_BAND':

//       const newBand = { id: uuid(), name: action.name };

//       return { ...state, bands: [...state.bands, newBand] }

//     case 'DELETE_BAND':

//       return { ...state, bands: state.bands.filter((band) => band.id !== action.id) }

//     default:
//       return state;
//   }
// };