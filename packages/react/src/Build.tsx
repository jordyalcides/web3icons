
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBuild = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M14.143 12.476v-1.363c0-.459-.861-.827-1.929-.827-1.067 0-1.928.368-1.928.827v1.363c.021.45.878.81 1.928.81s1.908-.36 1.929-.81m-2.143.42v-.776c.934.086 1.573-.231 1.714-.403v.759c-.45.433-1.371.458-1.714.42m.214-1.166c.798 0 1.445-.248 1.445-.553 0-.3-.643-.553-1.445-.553-.797 0-1.444.249-1.444.557 0 .3.643.549 1.444.549" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M18.429 9.399c0-.459-.862-.828-1.929-.828-.497 0-.951.082-1.294.215l-1.063-.425v-.677c0-.458-.861-.827-1.929-.827-1.067 0-1.928.369-1.928.827v.549l-1.243.488a3.9 3.9 0 0 0-1.114-.15C6.862 8.571 6 8.94 6 9.4v.514l-2.57 1.002v2.331l8.635 3.467 8.508-3.308v-2.49l-2.143-.849zm-4.286-.352c-.021.45-.879.81-1.929.81s-1.907-.36-1.928-.81v-.42l-.78.296c.223.133.351.3.351.476v1.363c-.021.45-.878.81-1.928.81s-1.907-.36-1.929-.81v-.515l-1.821.686 7.834 3.034 7.95-3.034-1.534-.57v.399c-.022.45-.879.81-1.929.81s-1.907-.36-1.928-.81V9.399c0-.142.081-.27.222-.386l-.651-.244zm-1.714 5.237v1.873l7.714-2.957v-1.933zm1.23-6.535c0 .304-.643.557-1.445.557-.797 0-1.444-.253-1.444-.557 0-.3.643-.553 1.444-.553.798 0 1.445.248 1.445.557zM12 8.69v.772c.343.043 1.264.017 1.714-.416V8.29c-.141.171-.78.488-1.714.402m-2.627.772c0 .304-.643.557-1.444.557-.797 0-1.445-.253-1.445-.557 0-.3.643-.553 1.445-.553.797 0 1.444.249 1.444.557zm-1.659.943v.771c.343.043 1.265.017 1.715-.415v-.76c-.142.172-.78.49-1.715.404m10.23-.943c0 .304-.642.557-1.444.557-.797 0-1.444-.253-1.444-.557 0-.3.643-.553 1.444-.553.797 0 1.444.249 1.444.557zm-1.658.943v.771c.343.043 1.264.017 1.714-.415v-.76c-.141.172-.78.49-1.714.404" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#BUILD__a)" d="M14.143 12.476v-1.363c0-.459-.861-.827-1.929-.827-1.067 0-1.928.368-1.928.827v1.363c.021.45.878.81 1.928.81s1.908-.36 1.929-.81m-2.143.42v-.776c.934.086 1.573-.231 1.714-.403v.759c-.45.433-1.371.458-1.714.42m.214-1.166c.798 0 1.445-.248 1.445-.553 0-.3-.643-.553-1.445-.553-.797 0-1.444.249-1.444.557 0 .3.643.549 1.444.549" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="url(#BUILD__b)" d="M18.429 9.399c0-.459-.862-.828-1.929-.828-.497 0-.951.082-1.294.215l-1.063-.425v-.677c0-.458-.861-.827-1.929-.827-1.067 0-1.928.369-1.928.827v.549l-1.243.488a3.9 3.9 0 0 0-1.114-.15C6.862 8.571 6 8.94 6 9.4v.514l-2.57 1.002v2.331l8.635 3.467 8.508-3.308v-2.49l-2.143-.849zm-4.286-.352c-.021.45-.879.81-1.929.81s-1.907-.36-1.928-.81v-.42l-.78.296c.223.133.351.3.351.476v1.363c-.021.45-.878.81-1.928.81s-1.907-.36-1.929-.81v-.515l-1.821.686 7.834 3.034 7.95-3.034-1.534-.57v.399c-.022.45-.879.81-1.929.81s-1.907-.36-1.928-.81V9.399c0-.142.081-.27.222-.386l-.651-.244zm-1.714 5.237v1.873l7.714-2.957v-1.933zm1.23-6.535c0 .304-.643.557-1.445.557-.797 0-1.444-.253-1.444-.557 0-.3.643-.553 1.444-.553.798 0 1.445.248 1.445.557zM12 8.69v.772c.343.043 1.264.017 1.714-.416V8.29c-.141.171-.78.488-1.714.402m-2.627.772c0 .304-.643.557-1.444.557-.797 0-1.445-.253-1.445-.557 0-.3.643-.553 1.445-.553.797 0 1.444.249 1.444.557zm-1.659.943v.771c.343.043 1.265.017 1.715-.415v-.76c-.142.172-.78.49-1.715.404m10.23-.943c0 .304-.642.557-1.444.557-.797 0-1.444-.253-1.444-.557 0-.3.643-.553 1.444-.553.797 0 1.444.249 1.444.557zm-1.658.943v.771c.343.043 1.264.017 1.714-.415v-.76c-.141.172-.78.49-1.714.404" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="BUILD__a" x1="6.619" x2="14.832" y1="8.566" y2="24.973" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1E21"/>
            <stop offset="1" stopColor="#06060A"/>
        </linearGradient>
        <linearGradient id="BUILD__b" x1="6.619" x2="14.832" y1="8.566" y2="24.973" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A1E21"/>
            <stop offset="1" stopColor="#06060A"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconBuild.displayName = 'Build';

export default IconBuild;
