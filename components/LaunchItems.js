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
    <div className="bg-gray-200 rounded overflow-hidden w-full md:w-1/2 lg:w-1/3 px-2 my-2">
      <div className="shadow-md bg-red">
        <img
          className="h-48 w-full object-cover"
          src={randomImage(links.flickr_images)}
          alt={mission_name}
        />
        <div className="flex flex-col p-4">
          <p
            className={`text-lg
          ${launch_success === true ? 'text-green-500' : 'text-red-500'}`}
          >
            {mission_name}
          </p>
          <hr className="border-solid" />
          <p className="text-gray-900 text-sm">{details}</p>
          <div className="flex content-between bg-gray-300">
            <span className="text-gray-600 text-xs">
              Fecha Lanzamiento: {dateFormat(launch_date_local)}{' '}
              {dateTimeFormat(launch_date_local)}
            </span>
          </div>
          <div className="self-end mt-4">
            <span className="py-1">{wikipediaUrl(links.wikipedia)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaunchItems;
