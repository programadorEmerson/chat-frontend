import axios from 'axios';

interface StateProps { id: number; sigla: string; nome: string }
interface CityProps extends Omit<StateProps, 'sigla'> { municipio: { nome: string }}

export interface TypeValuesSelect { id: number; value: string; key: string }

const apiUrl = process.env.NEXT_PUBLIC_API_IBGE;

async function getAllStates() {
  if (!apiUrl) throw new Error('API_URL not found');

  try {
    const { data } = await axios.get<StateProps[]>(apiUrl);
    const states = data.sort((a, b) => a.nome.localeCompare(b.nome));
    return states.map((state) => ({ id : state.id, value : state.nome, key : state.sigla }));
  } catch (error) {
    console.error(error);
    throw new Error('Error to get states.');
  }
}

export const getCitiesFromState = async (uf: string) => {
  if (!apiUrl) throw new Error('API_URL not found');

  try {
    const { data } = await axios.get<CityProps[]>(`${apiUrl}/${uf}/distritos`);
    const cities = data.sort((a, b) => a.municipio.nome.localeCompare(b.municipio.nome));
    return cities.map((city) => ({ id : city.id, value : city.municipio.nome, key : city.municipio.nome }));
  } catch (error) {
    console.error(error);
    throw new Error('Error to get cities.');
  }
};

export { getAllStates };
