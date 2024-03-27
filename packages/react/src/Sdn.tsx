
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSdn = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M17.361 7.299c-7.688 1.594-8.13 4.692-7.384 6.042-.446-1.062.317-3.612 6.947-5.331z"/>
    <path fill="currentColor" d="M9.686 9.909c-.883 1.362-.545 2.314-.266 2.627-.446-3.377 5.25-5.229 8.156-5.726L18 5.966c-2.691.317-7.217 2.241-8.314 3.943"/>
    <path fill="currentColor" d="M8.271 8.353c-1.508 2.323.532 4.521 1.74 5.327C8.14 11.357 7.77 9.608 9.46 7.989c1.688-1.63 4.577-2.782 7.157-3.202l-.862-.501c-1.868.385-5.983 1.74-7.487 4.067z"/>
    <path fill="currentColor" d="M16.911 5.057c-.9.09-3.355.677-5.957 2.28-2.558 1.582-2.567 3.441-2.241 4.213-.03-.566.407-2.057 2.391-3.514 1.985-1.457 5.16-2.216 6.497-2.413l-.685-.566zM6.639 16.701c7.688-1.594 8.13-4.693 7.384-6.042.446 1.062-.317 3.612-6.947 5.33z"/>
    <path fill="currentColor" d="M14.314 14.091c.883-1.362.545-2.314.266-2.627.446 3.377-5.25 5.229-8.156 5.726L6 18.034c2.691-.317 7.217-2.241 8.314-3.943"/>
    <path fill="currentColor" d="M15.729 15.647c1.508-2.323-.532-4.521-1.74-5.327 1.872 2.323 2.241 4.071.552 5.691-1.688 1.629-4.577 2.782-7.157 3.202l.862.501c1.868-.386 5.983-1.74 7.487-4.067z"/>
    <path fill="currentColor" d="M7.089 18.943c.9-.09 3.355-.677 5.957-2.28 2.558-1.582 2.567-3.442 2.241-4.213.03.566-.407 2.057-2.391 3.514-1.985 1.457-5.16 2.216-6.497 2.413l.685.566z"/>

        </>
      ) : (
        <>
          
    <path fill="#592BB0" d="M17.361 7.299c-7.688 1.594-8.13 4.692-7.384 6.042-.446-1.062.317-3.612 6.947-5.331z"/>
    <path fill="#734BBB" d="M9.686 9.909c-.883 1.362-.545 2.314-.266 2.627-.446-3.377 5.25-5.229 8.156-5.726L18 5.966c-2.691.317-7.217 2.241-8.314 3.943"/>
    <path fill="#BCA1E6" d="M8.271 8.353c-1.508 2.323.532 4.521 1.74 5.327C8.14 11.357 7.77 9.608 9.46 7.989c1.688-1.63 4.577-2.782 7.157-3.202l-.862-.501c-1.868.385-5.983 1.74-7.487 4.067z"/>
    <path fill="#804FC5" d="M16.911 5.057c-.9.09-3.355.677-5.957 2.28-2.558 1.582-2.567 3.441-2.241 4.213-.03-.566.407-2.057 2.391-3.514 1.985-1.457 5.16-2.216 6.497-2.413l-.685-.566z"/>
    <path fill="#592BB0" d="M6.639 16.701c7.688-1.594 8.13-4.693 7.384-6.042.446 1.062-.317 3.612-6.947 5.33z"/>
    <path fill="#734BBB" d="M14.314 14.091c.883-1.362.545-2.314.266-2.627.446 3.377-5.25 5.229-8.156 5.726L6 18.034c2.691-.317 7.217-2.241 8.314-3.943"/>
    <path fill="#BCA1E6" d="M15.729 15.647c1.508-2.323-.532-4.521-1.74-5.327 1.872 2.323 2.241 4.071.552 5.691-1.688 1.629-4.577 2.782-7.157 3.202l.862.501c1.868-.386 5.983-1.74 7.487-4.067z"/>
    <path fill="#804FC5" d="M7.089 18.943c.9-.09 3.355-.677 5.957-2.28 2.558-1.582 2.567-3.442 2.241-4.213.03.566-.407 2.057-2.391 3.514-1.985 1.457-5.16 2.216-6.497 2.413l.685.566z"/>

        </>
      )}
    </BaseIcon>
));

IconSdn.displayName = 'Sdn';

export default IconSdn;
