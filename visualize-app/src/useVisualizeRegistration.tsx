import ToastTopRight from './examples/ToastTopRight';
import RegularModal from './examples/RegulatModal';
import DrawerRight from './examples/DrawerRight';
import { registerElements } from 'react-visualize';
import DrawerTop from './examples/DrawerTop';
import { useEffect } from 'react';

export default function useVisualizeRegistration() {
	useEffect(() => {
		registerElements([
			{ id: 'regular', body: <RegularModal /> },
			{
				id: 'drawer-right',
				body: <DrawerRight />,
				options: {
					position: { right: '0', top: '0' },
					animation: {
						shown: { transform: 'translateX(0)' },
						hidden: { transform: 'translateX(100%)' },
						always: { transition: 'all 0.3s ease-in-out' },
					},
					backdropAnimation: {
						shown: { transform: 'translateX(0)' },
						hidden: { transform: 'translateX(-100%)' },
						always: { transition: 'all 0.5s ease-in-out' },
					},

					backdropColor: 'rgba(128, 255, 0, 0.1)',
					backdropOnClick: () => console.log('backdrop clicked'),
				},
			},
			{
				id: 'toast-top-right',
				body: <ToastTopRight />,
				options: {
					position: { right: '20px', top: '20px' },
					animation: {
						shown: { transform: 'scale(1)', opacity: 1 },
						hidden: { transform: 'scale(0)', opacity: 0 },
						always: { transition: 'all 0.3s ease-in-out' },
					},
					timeout: 3000,
					showBackdrop: false,
				},
			},
			{
				id: 'drawer-top',
				body: <DrawerTop />,
				options: {
					position: { top: '0', left: '0' },
					animation: {
						shown: { transform: 'translateY(0)' },
						hidden: { transform: 'translateY(-100%)' },
						always: { transition: 'all 0.3s ease-in-out' },
					},
				},
			},
		]);
	}, []);
}
