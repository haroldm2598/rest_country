import { useGetAllCountriesQuery } from '../action/reducer/apiSlice';

function Data() {
	const { data } = useGetAllCountriesQuery();

	// console.log(data);
	return <div>Data</div>;
}

export default Data;
