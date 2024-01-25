function Input({ placeholder, handleInput }) {
	return (
		<>
			<input
				type='text'
				placeholder={placeholder}
				className='input input-bordered w-full max-w-xs'
				onChange={handleInput}
			/>
		</>
	);
}

export default Input;
