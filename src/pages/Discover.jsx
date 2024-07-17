import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading songs" />
  if (error) return <Error />
  return (
    <div className="flex flex-col">
      <div className="w-full flex justity-between sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          className="bg-black rounded-lg outline-none text-gray-300 p-3 text-sm sm:mt-0 mt-5"
          onChange={() => {}}
        >
          {genres.map((genre) => (
            <option value={genre} key={genre}>
              {genre.title}
            </option>
          ))}
        </select>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.data.map((song, i) => (
            <SongCard
              key={song}
              song={{
                ...song,
                src: song.attributes.artwork.url.replace(
                  '{w}x{h}bb.jpg',
                  '288x240bb.jpg'
                ),
              }}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover
