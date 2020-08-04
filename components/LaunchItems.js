const LaunchItems = ({ launch }) => {
  const {
    mission_name,
    launch_success,
    launch_date_utc,
    details,
    links,
  } = launch;

  const randomImage = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];

  const wikipediaUrl = (urls) => {
    return urls === null ? (
      'Sin url Wikipedia'
    ) : (
      <a
        className="bg-green-500 hover:bg-gray-400 text-gray-200 font-bold py-2 px-4 rounded inline-flex items-center"
        href={urls}
        target="_blank"
      >
        Wikipedia
      </a>
    );
  };

  return (
    <div className="bg-gray-100 rounded overflow-hidden shadow-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 my-px px-px">
      <img
        className="w-full"
        src={randomImage(links.flickr_images)}
        alt={mission_name}
      />
      <div className="px-6 py-4 items-center">
        <div
          className={`font-bold text-xl mb-2
          ${launch_success === true ? 'text-green-500' : 'text-red-500'}`}
        >
          {mission_name}
        </div>
        <hr className="border-solid" />
        <p class="text-gray-700 text-sm">{details}</p>
        <div class="flex content-between bg-gray-300 py-2">
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {launch_date_utc}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {wikipediaUrl(links.wikipedia)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default LaunchItems;
