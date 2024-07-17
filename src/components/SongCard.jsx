import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import PlayPause from './PlayPause'

const SongCard = ({ song, index }) => {
  console.log(song)
  const activeSong = 'Test'
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 rounded-lg animmate-slideup cursor-pointer backdrop-blur-sm">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title != song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause />
        </div>
        <img src={song.src} alt={song.title} className="w-100 h-100" />
      </div>
      <div className="mt-4 flex flex-col">
        <p>
          <Link
            to={`/song/${song?.key}`}
            className="font-semibold text-white text-lg"
          >
            {song.attributes.albumName}
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
