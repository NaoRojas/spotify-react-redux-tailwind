import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import PlayPause from './PlayPause'

const SongCard = ({ song, activeSong, isPlaying, index, data }) => {
  console.log(song)
  const dispatch = useDispatch()

  const handlePlayClick = () => {
    dispatch(playPause(true))
    dispatch(setActiveSong({ song, data }))
  }
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 rounded-lg animmate-slideup cursor-pointer backdrop-blur-sm">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.attributes?.name === song?.attributes?.name
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          src={song.src}
          alt={song.attributes.name}
          className="w-100 h-100"
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p>
          <Link
            to={`/song/${song?.key}`}
            className="font-semibold text-white text-lg"
          >
            {song.attributes.name}
          </Link>
        </p>
        <p>
          <Link
            to={`${song.attributes.artistName}`}
            className="text-sm text-gray-300 mt-1"
          >
            {song.attributes.artistName}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard
