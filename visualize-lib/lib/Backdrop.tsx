type BackdropProps = {
	show: boolean;
	onClick?: () => void;
	style: React.CSSProperties;
	color?: string;
};

export default function Backdrop(props: BackdropProps) {
	const { onClick, style, color } = props;

	return <div className="visualize-backdrop" onClick={() => onClick && onClick()} style={{ ...style, backgroundColor: color }} />;
}
