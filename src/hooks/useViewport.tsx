import { FC, createContext, useContext, useEffect, useState } from 'react';
import theme from 'theme';

interface IViewport {
  width: number;
  isMobile: boolean;
}

const ViewportContext = createContext<IViewport>({
  width: window.innerWidth,
  isMobile: false,
});

export const ViewportProvider: FC = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = Number(theme.layout.md.replace('px', ''));
  const isMobile = width < breakpoint;

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, isMobile }}>{children}</ViewportContext.Provider>
  );
};

export function useViewport() {
  return useContext<IViewport>(ViewportContext);
}
