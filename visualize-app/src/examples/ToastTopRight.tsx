import { hideElement } from 'react-visualize';
import './toastTopRight.css';

export default function ToastTopRight() {
	return (
		<div className='toast-top-right'>
			<p>Toast top right that closes after 5 seconds</p>
			<button onClick={() => hideElement('toast-top-right')}>X</button>
		</div>
	);
}
