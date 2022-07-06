import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

	const getWindowDimensions = () => {
		const hasWindow = typeof window !== 'undefined';
		const width = hasWindow ? window.innerWidth : 1024;
		const height = hasWindow ? window.innerHeight : 1024;
		return { width, height, };
	}

	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => setWindowDimensions(getWindowDimensions())
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	});

	return windowDimensions;
}