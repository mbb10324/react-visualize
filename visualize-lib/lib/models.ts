import { CSSProperties, type ReactNode } from "react";

export type ElementOptions = {
	position?: Position;
	animation?: Animation;
	showBackdrop?: boolean;
	backdropAnimation?: Animation;
	backdropColor?: string;
	clickBackdropToClose?: boolean;
	timeout?: number;
};

export type VisualizeContextType = {
	state: ElementState[];
};

export type ElementState = {
	id: string;
	show: boolean;
	body: ReactNode | null;
	options: ElementOptions;
};

export type VisualizeAction =
	| { type: Actions.REGISTER; payload: ElementState }
	| { type: Actions.SHOW; payload: string }
	| { type: Actions.HIDE; payload: string };

export enum Actions {
	REGISTER = "REGISTER",
	SHOW = "SHOW",
	HIDE = "HIDE",
}

export type Position = {
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	transform?: string;
};

export type Animation = {
	shown?: CSSProperties;
	hidden?: CSSProperties;
	always?: CSSProperties;
};
