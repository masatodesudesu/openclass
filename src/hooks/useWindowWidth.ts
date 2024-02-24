import { useState, useEffect } from 'react';

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        // 初期値の設定
        handleResize();

        // クリーンアップ関数
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}