import React from 'react'
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  selector?: string;
}

const Portal: React.FC<Props> = ({ children, selector }) => {
  const rootElement = selector && document.getElementById(selector);

  return (
      <>
        {rootElement ? createPortal(children,rootElement) : children}
      </>
  );
}

export default Portal;

