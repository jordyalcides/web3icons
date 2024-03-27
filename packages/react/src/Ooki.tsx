
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOoki = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.673 18.364c-.85.334-1.76.494-2.673.471a6.85 6.85 0 0 1-7.15-6.846A6.853 6.853 0 0 1 12 5.143a6.849 6.849 0 0 1 2.673 13.221m-4.941-6.49a.428.428 0 1 1-.606-.605.428.428 0 0 1 .606.606m5.143 0a.429.429 0 1 1-.607-.605.429.429 0 0 1 .606.606m-3.526.362c.008-.133.094-.227.222-.236h.862a.24.24 0 0 1 .214.184.5.5 0 0 1-.038.28.6.6 0 0 1-.155.235.63.63 0 0 1-.445.158.75.75 0 0 1-.472-.162.58.58 0 0 1-.188-.46" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#F6BE4E" d="M14.673 18.364c-.85.334-1.76.494-2.673.471a6.85 6.85 0 0 1-7.15-6.846A6.853 6.853 0 0 1 12 5.143a6.849 6.849 0 0 1 2.673 13.221m-4.941-6.49a.428.428 0 1 1-.606-.605.428.428 0 0 1 .606.606m5.143 0a.429.429 0 1 1-.607-.605.429.429 0 0 1 .606.606m-3.526.362c.008-.133.094-.227.222-.236h.862a.24.24 0 0 1 .214.184.5.5 0 0 1-.038.28.6.6 0 0 1-.155.235.63.63 0 0 1-.445.158.75.75 0 0 1-.472-.162.58.58 0 0 1-.188-.46" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#E38329" d="M18.78 10.946c.866 3.223-1.406 6.673-5.027 7.641-3.617.969-7.311-.887-8.173-4.114 1.697 2.057 4.629 2.949 7.449 2.276 2.974-.707 5.28-3.03 5.751-5.803" opacity=".69"/>

        </>
      )}
    </BaseIcon>
));

IconOoki.displayName = 'Ooki';

export default IconOoki;
