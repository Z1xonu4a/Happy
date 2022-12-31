import './App.css'
import { Headers } from './Header'
import { Navbar } from './Navbar'

function App() {
	return (
		<div className='App mx-9 rounded-2xl bg-black/60'>
			<Navbar />
			<Headers />
			<br />
			<div className=''>
				Дорогая тетя! Я хочу с любовью Пожелать лишь счастья, крепкого здоровья,
				Отдыхать побольше, а трудиться в меру, Жить всегда с надеждой и горячей
				верой. С праздником, родная! Этот день рожденья Пусть тебе подарит
				лучшие мгновенья Средь родных и близких в теплом милом доме И пополнит
				фото с праздником в альбоме.
			</div>
		</div>
	)
}
export default App
