function Card({ imageSrc, title, population }) {
	return (
		<div className='card w-full bg-base-100 shadow-xl transition-all duration-[250ms] ease-in-out hover:-translate-y-6 cursor-pointer'>
			<figure>
				<img src={imageSrc} alt='Shoes' className='w-full h-44 object-cover' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{title}</h2>
				<p>{population}</p>
			</div>
		</div>
	);
}

export default Card;
