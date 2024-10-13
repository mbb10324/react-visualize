import { hideElement, showElement } from 'react-visualize';
import './drawerTop.css';

export default function DrawerTop() {
	return (
		<div className='drawer-top'>
			<h1>Drawer Right</h1>
			<p>This is an example on how to make a drawer appear from the top.</p>
			<button
				onClick={() => {
					hideElement('drawer-top');
					showElement('regular');
				}}
			>
				Close This And Modal
			</button>
		</div>
	);
}
