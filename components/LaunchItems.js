const LaunchItems = ({ index, launch }) => {
  const { mission_name, launch_success, launch_date_utc } = launch;

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 my-px px-px overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <span>{index + 1}</span>
        <div
          className={`font-bold text-xl mb-2
          ${launch_success === true ? 'text-green-500' : 'text-red-500'}`}
        >
          {mission_name}
        </div>
        <span>{launch_date_utc}</span>
      </div>
    </div>
  );
};
export default LaunchItems;
