import { Fragment } from 'react';
import { useQuery } from '@apollo/client';

import { GET_LAUNCHES_PAST } from '../gql/get_launches_past';

import ErrorMessage from './ErrorMessage';

const LaunchesList = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES_PAST);

  if (error) return <ErrorMessage message="Error al cargar lanzamientos." />;
  if (loading) return <div>Cargando</div>;

  // console.log('data', data);
  const { launchesPast } = data;
  return (
    <Fragment>
      {launchesPast.map((launch, index) => (
        <div key={launch.id}>
          <div>
            <span>{index + 1}</span> - <span>{launch.mission_name}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default LaunchesList;
