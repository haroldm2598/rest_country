function Dropdown({ handleDropdown }) {
	return (
		<>
			<select
				className='select select-bordered w-full max-w-xs'
				onChange={handleDropdown}
			>
				<option disabled selected>
					Filter by Region
				</option>
				<option className='font-nunitoSans' value='africa'>
					Africa
				</option>
				<option className='font-nunitoSans' value='america'>
					America
				</option>
				<option className='font-nunitoSans' value='asia'>
					Asia
				</option>
				<option className='font-nunitoSans' value='europe'>
					Europe
				</option>
				<option className='font-nunitoSans' value='oceania'>
					Oceania
				</option>
			</select>
		</>
	);
}

export default Dropdown;
