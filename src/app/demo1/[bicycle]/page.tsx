'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const BicyclePage = () => {
	const params = useSearchParams();
	const title = params.get('title');
	const text = params.get('text');
	const id = params.get('id');
	console.log(id);

	return (
		<div className='mx-auto px-[4%] max-w-[960px] '>
			<Image
				className='mt-[10px] mb-[30px] w-full'
				src={`/img1/img/${id}.jpg`}
				width={640}
				height={424}
				alt='bicycle'
			/>
			<div className='px-[30px]'>
				<h1 className='font-extrabold text-2xl tracking-wide mb-[30px]'>{title}</h1>
				<p className='mb-[20px]'>{text}</p>
				<p className='mb-[20px]'>{text}</p>
				<p className='mb-[60px]'>{text}</p>
			</div>
			<Link className='flex items-center justify-center mb-[222px] sm:mb-[86px]' href={'/demo1'}>
				トップに戻る
			</Link>
		</div>
	);
};

export default BicyclePage;
