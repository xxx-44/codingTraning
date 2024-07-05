import Image from 'next/image';
import Bicycle from './Bicycle';
import bicycleContent from './contents/bicycleContent';

const demo1 = () => {
	const bicycles = bicycleContent;
	return (
		<div>
			<div>
				<Image
					className='w-full max-w-[1980px] h-[600px] object-cover'
					src='/img1/img/mainvisual.jpg'
					width={1980}
					height={600}
					alt='hero'
				/>
			</div>
			<div className='mx-auto px-[4%] max-w-[960px]  mt-20 mb-[97px] flex flex-col items-center justify-center'>
				<section id='About' className='font-bold text-4xl h-12 border-b-2 border-gray-400'>
					About
				</section>
				<div className='flex  flex-col sm:flex-row mt-[70px] items-center justify-center'>
					<Image className='rounded-full mr-[30px]' src='/img1/img/about.jpg' width={100} height={100} alt='avater' />
					<div className='mt-[10px] sm:mt-0'>
						<h2 className='font-bold mb-[10px]'>KAKERU MIYAUTI</h2>
						<p className='block w-[403px]'>
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</p>
					</div>
				</div>
			</div>
			<div className='mx-auto px-[4%] max-w-[960px]  mb-[110px] flex flex-col items-center justify-center'>
				<section id='Bicycle' className='mb-[30px] font-bold text-4xl h-12 border-b-2 border-gray-400'>
					Bicycle
				</section>
				<div className='flex flex-col sm:flex-row items-center justify-center space-x-4'>
					{bicycles.map((bicycle) => (
						<Bicycle key={bicycle.id} bicycle={bicycle} />
					))}
				</div>
			</div>
		</div>
	);
};

export default demo1;
