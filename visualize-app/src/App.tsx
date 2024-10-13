import useVisualizeRegistration from './useVisualizeRegistration';
import { showElement } from 'react-visualize';
import './App.css';

function App() {
	useVisualizeRegistration();

	return (
		<div className='app'>
			<h1>React Visualize</h1>
			<div className='buttons'>
				<button onClick={() => showElement('regular')}>Regular Modal</button>
				<button onClick={() => showElement('drawer-right')}>Drawer Right</button>
				<button onClick={() => showElement('toast-top-right')}>Toast Top Right</button>
				<button onClick={() => showElement('drawer-top')}>Drawer Top Into Modal</button>
			</div>
			<p>React visualize is a library that manages the state for hiding and showing ui components.</p>
		</div>
	);
}

export default App;
