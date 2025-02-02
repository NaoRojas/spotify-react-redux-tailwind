import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.attributes.name === song.attributes.name ? (
    <FaPauseCircle onClick={handlePause} size={35} className="text-gray-300" />
  ) : (
    <FaPlayCircle onClick={handlePlay} size={35} className="text-gray-300" />
  )

export default PlayPause
