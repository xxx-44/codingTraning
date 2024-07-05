import Link from 'next/link';

export default function Demo1Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja' className='scroll-smooth'>
			<body>
				<header className='px-[4%] max-w-[960px] flex justify-between mx-auto my-[10px] items-center'>
					<Link
						href={'/demo1'}
						className='justify-center items-center flex h-10 w-[120px] font-bold text-2xl tracking-wider bg-slate-700 text-white'
					>
						Profile
					</Link>
					<div className='flex'>
						<a href='/demo1#About' className='cursor-pointer hover:text-gray-400'>
							About
						</a>
						<a href='/demo1#Bicycle' className='ml-[30px] cursor-pointer hover:text-gray-400'>
							Bicycle
						</a>
					</div>
				</header>
				{children}
				<footer className='text-center mb-[10px] text-xs'>&copy; 2020 Profile</footer>
			</body>
		</html>
	);
}
