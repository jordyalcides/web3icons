
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBean = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M13.663 5.43c-2.687-.986-4.783.686-5.872 3.047-1.35 2.91-1.542 7.414 1.522 9.377a6.92 6.92 0 0 0 6.111.515 4 4 0 0 0 1.569-1.012c1.029-1.114.497-2.456-.129-3.591l-.27-.463c-.415-.707-.844-1.427-.831-2.285 0-.304.081-.642.163-.98.056-.232.111-.472.141-.695.257-1.933-.685-3.283-2.404-3.913m-3.12 4.444a.72.72 0 0 0 .716-.72.72.72 0 0 0-.716-.72.717.717 0 0 0-.712.72c0 .399.322.72.712.72m2.871 1.054a.72.72 0 0 0 .716-.72.714.714 0 0 0-.711-.72.72.72 0 0 0 0 1.44z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#B31F39" d="M13.663 5.43c-2.687-.986-4.783.686-5.872 3.047-1.35 2.91-1.542 7.414 1.522 9.377a6.92 6.92 0 0 0 6.111.515 4 4 0 0 0 1.569-1.012c1.029-1.114.497-2.456-.129-3.591l-.27-.463c-.415-.707-.844-1.427-.831-2.285 0-.304.081-.642.163-.98.056-.232.111-.472.141-.695.257-1.933-.685-3.283-2.404-3.913m-3.12 4.444a.72.72 0 0 0 .716-.72.72.72 0 0 0-.716-.72.717.717 0 0 0-.712.72c0 .399.322.72.712.72m2.871 1.054a.72.72 0 0 0 .716-.72.714.714 0 0 0-.711-.72.72.72 0 0 0 0 1.44z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconBean.displayName = 'Bean';

export default IconBean;
