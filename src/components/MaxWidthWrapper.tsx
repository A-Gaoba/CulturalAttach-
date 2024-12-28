import React from "react";

const MaxWidthWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	children,
	...props
}) => {
	return (
		<div className={className + "max-w-7xl"} {...props}>
			{children}
		</div>
	);
};

export default MaxWidthWrapper;
