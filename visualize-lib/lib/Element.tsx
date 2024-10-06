import { useEffect, useState } from "react";
import { ElementState } from "./models";
import { hideElement } from "./index";
import Backdrop from "./Backdrop";

type ElementProps = {
	elementState: ElementState;
};

export default function Element(props: ElementProps) {
	const { elementState } = props;
	const { id, show, body, options } = elementState;
	const [managedStyles, setManagedStyles] = useState({});
	const [backdropStyles, setBackdropStyles] = useState({});

	useEffect(() => {
		if (show && options.animation?.shown && options.backdropAnimation?.shown) {
			setManagedStyles(options.animation?.shown);
			setBackdropStyles(options.backdropAnimation?.shown);
		} else if (options.animation?.hidden && options.backdropAnimation?.hidden) {
			setManagedStyles(options.animation?.hidden);
			setBackdropStyles(options.backdropAnimation?.hidden);
		}
		if (options.timeout) {
			const timeout = setTimeout(() => {
				hideElement(id);
			}, options.timeout);
			return () => clearTimeout(timeout);
		}
	}, [show, options.animation, options.backdropAnimation, options.timeout, id]);

	return (
		<>
			<div
				className="visualize-element"
				style={{
					...options.position,
					...options.animation?.always,
					...managedStyles,
				}}
			>
				{body}
			</div>
			{options.showBackdrop && (
				<Backdrop
					style={{
						...options.backdropAnimation?.always,
						...backdropStyles,
					}}
					color={options.backdropColor}
					show={show}
					onClick={() => options.clickBackdropToClose && hideElement(id)}
				/>
			)}
		</>
	);
}
