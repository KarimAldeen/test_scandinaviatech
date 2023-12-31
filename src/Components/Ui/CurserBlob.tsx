import React, { useEffect } from 'react';

const CursorBlob = () => {
    useEffect(() => {
        const blob = document.getElementById('Blob');

    const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    blob && blob.animate(
        {
            top: `${clientY + scrollTop}px`,
            left: `${clientX + scrollLeft}px`,
        },
        { duration: 5000, fill: "forwards" }
    );
};

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div id='Blob' className='Blob2'></div>;
};

export default CursorBlob;
