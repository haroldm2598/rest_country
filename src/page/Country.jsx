import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	useGetAllCountriesQuery,
	useSearchCountryQuery,
	useSearchRegionQuery
} from '../action/reducer/apiSlice';
import { selectedRegion, selectCountry } from '../action/reducer/countrySlice';

import Card from '../component/Card';
import Input from '../component/Input';
import Dropdown from '../component/Dropdown';

function Country() {
	const { isSelected, hasSearch } = useSelector((state) => state.dataTemplate);
	const dispatch = useDispatch();
	const { data: countryApi, isLoading } = useGetAllCountriesQuery();
	const { data: searchCountry } = useSearchCountryQuery(hasSearch);
	const { data: regionApi } = useSearchRegionQuery(isSelected);

	if (isLoading) {
		return (
			<div className='flex items-center justify-center'>
				<h1 className='font-nunitoSans font-bold uppercase'>
					Loading pasiya guys!!!!
				</h1>
			</div>
		);
	}

	return (
		<section className='bg-slate-50 py-10'>
			<div className='max-w-7xl mx-auto px-5 xl:px-0 flex flex-col gap-10'>
				<div className='flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-0'>
					<Input
						placeholder='Search Country...'
						handleInput={(e) => dispatch(selectCountry(e.target.value))}
					/>
					<Dropdown
						handleDropdown={(e) => dispatch(selectedRegion(e.target.value))}
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
					{isSelected === undefined
						? countryApi?.map((item, index) => (
								<Fragment key={index}>
									<Card
										imageSrc={item.flags.png}
										title={item.name.common}
										population={item.population}
									/>
								</Fragment>
						  ))
						: regionApi?.map((item, index) => (
								<Fragment key={index}>
									<Card
										imageSrc={item.flags.png}
										title={item.name.common}
										population={item.population}
									/>
								</Fragment>
						  ))}

					{hasSearch &&
						searchCountry?.map((item, index) => (
							<Fragment key={index}>
								<Card
									imageSrc={item.flags.png}
									title={item.name.common}
									population={item.population}
								/>
							</Fragment>
						))}
				</div>
			</div>
		</section>
	);
}

export default Country;
