import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Bicycle = ({ bicycle: { id, title, text } }: { bicycle: { id: string; title: string; text: string } }) => {
	const truncateText = (text: string, maxLength: number) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...';
		}
		return text;
	};
	return (
		<Link href={{ pathname: `/demo1/${id}`, query: { title: title, text: text, id: id } }} className=' text-center'>
			<Image className='mt-[30px]' src={`/img1/img/${id}.jpg`} width={640} height={424} alt='bicycle' />
			<h2 className='font-bold my-[10px]'>{title}</h2>
			<p>{truncateText(text, 12)}</p>
		</Link>
	);
};

export default Bicycle;
