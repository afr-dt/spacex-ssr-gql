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

  if (error) return <ErrorMessage message="Error al cargar lanzamientos." />;
  if (loading && !loadingMoreLaunchs) return <div>Cargando</div>;

  console.log('🔥', data);
  const { launchesPast } = data;

  return (
    <div className="flex -mx-px flex-wrap">
      {launchesPast.map((launch, index) => (
        <LaunchItems key={launch.id} index={index} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchesList;
