import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { hash, pathname } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [hash, pathname]);

    return null;
}

export default ScrollToTop;
