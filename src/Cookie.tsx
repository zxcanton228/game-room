import { IMG_URL } from "./sys"

const Cookie = ({
	setOpenWin,
}: {
	setOpenWin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<div className='cok'>
			<section className='cookies'>
				<img src={`${IMG_URL}cookie.svg`} alt='error!' />
				<h1>Мы используем файлы Cookie</h1>
				<section>
					<button onClick={() => setOpenWin(true)}>Принять</button>
					<button onClick={() => setOpenWin(true)}>Отказать</button>
				</section>
			</section>
		</div>
	)
}

export default Cookie
