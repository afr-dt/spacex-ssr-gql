import { useQuery, NetworkStatus } from '@apollo/client';

import {
  GET_LAUNCHES_PAST,
  launchesPastQueryVars,
} from '../gql/get_launches_past';

import ErrorMessage from '../components/ErrorMessage';
import LaunchItems from '../components/LaunchItems';

const LaunchesList = () => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_LAUNCHES_PAST,
    {
      variables: launchesPastQueryVars,
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadingMoreLaunchs = networkStatus === NetworkStatus.fetchMore;
  const loadMoreLaunchs = () => {
    fetchMore({
      variables: {
        offset: launchesPast.length,
      },
    });
  };

  if (error) return <ErrorMessage message="Error al cargar lanzamientos." />;
  if (loading && !loadingMoreLaunchs) return <div>Cargando</div>;
  if (!data) return <div>No hay lanzamientos.</div>;

  console.log('🔥', data);
  const { launchesPast } = data;

  const areMoreLaunches = launchesPast.length;

  return (
    <>
      <div className="flex flex-wrap px-1 py-1">
        {launchesPast.map((launch) => (
          <LaunchItems key={launch.id} launch={launch} />
        ))}
      </div>
      {areMoreLaunches && (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => loadMoreLaunchs()}
          disabled={loadingMoreLaunchs}
        >
          {loadingMoreLaunchs ? 'Carcango' : 'Mostrar mas'}
        </button>
      )}
    </>
  );
};

export default LaunchesList;
