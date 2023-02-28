// Write your code here
//  <MoviesSlider moviesList={moviesList} />
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="prime-container">
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
