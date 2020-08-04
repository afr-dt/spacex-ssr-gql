import { useQuery } from '@apollo/client';
import { GET_COMPANY } from '../gql/get_company';
import ErrorMessage from '../components/ErrorMessage';

const Company = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (error) return <ErrorMessage message="Error al cargar la Empresa." />;
  if (loading) return <div>Cargando</div>;

  const { company } = data;

  return (
    <div className="flex flex-col flex-1 md:justify-center w-full">
      <div
        className="bg-auto h-auto text-white py-24 px-10 mt-5 mx-2"
        style={{
          backgroundImage: `url(https://live.staticflickr.com/65535/49636202657_e81210a3ca_o.jpg)`,
        }}
      >
        <div className="md:w-1/2">
          <p className="text-3xl font-bold">{company.name}</p>
          <p className="font-bold text-sm uppercase">{company.cto}</p>
          <p className="text-2xl mb-10">{company.founder}</p>
          <p className="text-2xl mb-10">{company.summary}</p>
          <a href={company.links.elon_twitter}>Elon Musk Twitter</a>
          <a href={company.links.twitter}> Company Twitter </a>
          <a href={company.links.website}>Website</a>
        </div>
      </div>
    </div>
  );
};

export default Company;
