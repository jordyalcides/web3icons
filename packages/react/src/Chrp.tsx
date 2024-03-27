
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconChrp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M15 10.492a1.07 1.07 0 0 1-1.072 1.08 1.07 1.07 0 0 1-1.071-1.08 1.07 1.07 0 0 1 1.83-.76 1.07 1.07 0 0 1 .313.76m-.857-.206a.429.429 0 1 1-.858 0 .429.429 0 0 1 .858 0m.214.428a.214.214 0 1 0 0-.428.214.214 0 0 0 0 .428" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M18.857 12.321c0 2.91-1.646 5.409-4.024 6.536 1.92-2.044 1.885-4.56 1.881-5.066v-.055a1.12 1.12 0 0 1-.784.407c-1.341 0-2.644-1.089-4.029-2.563-1.38-1.466-2.044-3.073-2.044-3.613 0-.278.154-.463.257-.591l.065-.077c.06-.082.107-.146.107-.228 0-.21-.24-.21-.502-.21-.947 0-2.143.468-3.115.952A6.73 6.73 0 0 1 12 5.143c3.789 0 6.857 3.214 6.857 7.178M6.103 15.986A7.1 7.1 0 0 0 7.804 18H9.4c1.778 0 3.458-1.17 3.458-3.043 0-1.869-1.68-3.377-3.458-3.377H5.177a7.6 7.6 0 0 0 .643 3.848h6.609c-.588.288-2.1.858-3.459.858-.921 0-2.027-.15-2.867-.3M12 8.606c0-.712.861-.892 1.294-.892 2.906 0 2.992 2.893 2.992 3.326 0 .064-.005.129-.018.21l1.402.356c.368.094.45.523.137.715l-1.556.965-.235-1.277c-.142.24-.343.42-.605.42-.6 0-1.607-.755-2.117-1.209S12 9.497 12 8.606" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#F24139" d="M15 10.492a1.07 1.07 0 1 1-2.142 0 1.07 1.07 0 0 1 1.83-.76 1.07 1.07 0 0 1 .312.76m-.857-.206a.429.429 0 1 1-.857 0 .429.429 0 0 1 .857 0m.214.428a.214.214 0 1 0 0-.428.214.214 0 0 0 0 .428" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#F24139" d="M18.857 12.321c0 2.91-1.646 5.409-4.024 6.536 1.92-2.044 1.885-4.56 1.881-5.066v-.055a1.12 1.12 0 0 1-.784.407c-1.341 0-2.644-1.089-4.029-2.563-1.38-1.466-2.044-3.073-2.044-3.613 0-.278.154-.463.257-.591l.065-.077c.06-.082.107-.146.107-.228 0-.21-.24-.21-.502-.21-.947 0-2.143.468-3.115.952A6.73 6.73 0 0 1 12 5.143c3.789 0 6.857 3.214 6.857 7.178M6.103 15.986A7.1 7.1 0 0 0 7.804 18H9.4c1.778 0 3.458-1.17 3.458-3.043 0-1.869-1.68-3.377-3.458-3.377H5.177a7.6 7.6 0 0 0 .643 3.848h6.609c-.588.288-2.1.858-3.459.858-.921 0-2.027-.15-2.867-.3M12 8.606c0-.712.861-.892 1.294-.892 2.906 0 2.992 2.893 2.992 3.326 0 .064-.005.129-.018.21l1.402.356c.368.094.45.523.137.715l-1.556.965-.235-1.277c-.142.24-.343.42-.605.42-.6 0-1.607-.755-2.117-1.209S12 9.497 12 8.606" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconChrp.displayName = 'Chrp';

export default IconChrp;
