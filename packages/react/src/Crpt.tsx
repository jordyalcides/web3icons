
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCrpt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15.523 8.103a4.84 4.84 0 0 0-3.155-1.155 5.006 5.006 0 0 0-4.948 4.71h-.515a5.503 5.503 0 0 1 5.464-5.235c1.285 0 2.514.474 3.514 1.314zm-.177 1.725a3.66 3.66 0 0 0-2.972-1.542A3.697 3.697 0 0 0 8.705 12a3.704 3.704 0 0 0 3.663 3.743A3.64 3.64 0 0 0 15.34 14.2l.366.366a4.16 4.16 0 0 1-3.338 1.702A4.23 4.23 0 0 1 8.197 12a4.217 4.217 0 0 1 4.171-4.24 4.15 4.15 0 0 1 3.338 1.703zm.588-1.337.36-.365c.126.131.228.262.331.394l-.36.366a5 5 0 0 0-.331-.395m-3.588 9.11a5.5 5.5 0 0 1-5.463-5.235h.514a5.006 5.006 0 0 0 4.949 4.714 4.87 4.87 0 0 0 3.154-1.154l.36.365a5.42 5.42 0 0 1-3.514 1.315zm3.588-2.07c.126-.131.228-.257.331-.388l.36.366a5 5 0 0 1-.331.388zM6.163 12a6.285 6.285 0 0 0 6.205 6.331 6.04 6.04 0 0 0 4.772-2.302l.36.365a6.57 6.57 0 0 1-5.131 2.463c-3.715 0-6.715-3.086-6.715-6.857 0-3.794 3.029-6.857 6.715-6.857 1.977 0 3.851.891 5.131 2.457l-.36.371a6.12 6.12 0 0 0-4.771-2.302A6.285 6.285 0 0 0 6.169 12z"/>

        </>
      ) : (
        <>
          
    <path fill="#2992FB" d="M15.523 8.103a4.84 4.84 0 0 0-3.155-1.155 5.006 5.006 0 0 0-4.948 4.71h-.515a5.503 5.503 0 0 1 5.464-5.235c1.285 0 2.514.474 3.514 1.314zm-.177 1.725a3.66 3.66 0 0 0-2.972-1.542A3.697 3.697 0 0 0 8.705 12a3.704 3.704 0 0 0 3.663 3.743A3.64 3.64 0 0 0 15.34 14.2l.366.366a4.16 4.16 0 0 1-3.338 1.702A4.23 4.23 0 0 1 8.197 12a4.217 4.217 0 0 1 4.171-4.24 4.15 4.15 0 0 1 3.338 1.703zm.588-1.337.36-.365c.126.131.228.262.331.394l-.36.366a5 5 0 0 0-.331-.395m-3.588 9.11a5.5 5.5 0 0 1-5.463-5.235h.514a5.006 5.006 0 0 0 4.949 4.714 4.87 4.87 0 0 0 3.154-1.154l.36.365a5.42 5.42 0 0 1-3.514 1.315zm3.588-2.07c.126-.131.228-.257.331-.388l.36.366a5 5 0 0 1-.331.388zM6.163 12a6.285 6.285 0 0 0 6.205 6.331 6.04 6.04 0 0 0 4.772-2.302l.36.365a6.57 6.57 0 0 1-5.131 2.463c-3.715 0-6.715-3.086-6.715-6.857 0-3.794 3.029-6.857 6.715-6.857 1.977 0 3.851.891 5.131 2.457l-.36.371a6.12 6.12 0 0 0-4.771-2.302A6.285 6.285 0 0 0 6.169 12z"/>

        </>
      )}
    </BaseIcon>
));

IconCrpt.displayName = 'Crpt';

export default IconCrpt;
