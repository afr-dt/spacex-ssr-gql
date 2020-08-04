import wikipediaUrl from '../components/WikiButton';
import { randomImage, dateFormat, dateTimeFormat } from '../utils';

const LaunchItems = ({ launch }) => {
  const {
    mission_name,
    launch_success,
    launch_date_local,
    details,
    links,
  } = launch;

  return (
    <div className="bg-gray-100 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 my-px px-px">
      <div className="md:flex-shrink-0">
        <img
          className="w-full"
          src={randomImage(links.flickr_images)}
          alt={mission_name}
        />
      </div>
      <div className="px-6 py-4 items-center">
        <div
          className={`font-bold text-xl mb-2
          ${launch_success === true ? 'text-green-500' : 'text-red-500'}`}
        >
          {mission_name}
        </div>
        <hr className="border-solid" />
        <p className="text-gray-700 text-sm">{details}</p>
        <div className="flex content-between bg-gray-300">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-pink-700 mr-2">
            Fecha Lanzamiento: {dateFormat(launch_date_local)}{' '}
            {dateTimeFormat(launch_date_local)}
          </span>
        </div>
        <div className="flex content-between bg-gray-100 ">
          <span className="py-1">{wikipediaUrl(links.wikipedia)}</span>
        </div>
      </div>
    </div>
  );
};
export default LaunchItems;
