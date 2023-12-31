import { useEffect, useRef, useState } from 'react';

// This is your Layout Component
const Visibale = ({ children,...props }:any) => {
  const ref = useRef<any>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(isVisible === false){
          setIsVisible(entry.isIntersecting);
        }
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]); // Empty array ensures effect is only run on mount and unmount

  return (
    <div ref={ref} {...props} >
      {isVisible && children}
    </div>
  );
};

export default Visibale;
