import { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

import ErrorMessage from './ErrorMessage';

export const GET_LAUNCHES_PAST = gql`
  query launchesPast {
    launchesPast {
      id
      mission_name
      launch_date_local
    }
  }
`;

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
            <span>{index + 1}</span>
            <span>{launch.mission_name}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default LaunchesList;
