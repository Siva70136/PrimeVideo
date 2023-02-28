import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import './index.css'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  return (
    <div className="movie-item">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose className="menu" />
            </button>
            <ReactPlayer url={videoUrl} />
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
