import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Beaters`;
        } else {
            document.title = 'Beaters | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
