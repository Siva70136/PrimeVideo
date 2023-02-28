// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  // const {categoryId} = item

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: 'slick-class',
  }

  const renderActionItem = each => {
    if (each.categoryId === 'ACTION') {
      return <MovieItem key={each.id} item={each} />
    }
    return null
  }

  const renderComdeyItem = each => {
    if (each.categoryId === 'COMEDY') {
      return <MovieItem key={each.id} item={each} />
    }
    return null
  }

  return (
    <>
      <h1 className="heading">Action Movies</h1>
      <Slider {...settings}>
        {moviesList.map(each => renderActionItem(each))}
      </Slider>

      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings}>
        {moviesList.map(each => renderComdeyItem(each))}
      </Slider>
    </>
  )
}

export default MoviesSlider
