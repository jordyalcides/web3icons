
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCph = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m9.428 8.1.956.266v3.553c.043.407.369 1.358 1.303 1.924l2.314 1.397v1.157l-3.484-2.143a2.62 2.62 0 0 1-1.089-2.185V8.096zm-1.53-.437.798.227a4 4 0 0 0-.022.377v4.659c.043.407.377 1.358 1.329 1.924l.835.497-1.028.515-.999-.6a2.6 2.6 0 0 1-1.105-2.186V8.614c0-.231.047-.578.192-.955zm6.103 9.578L11.58 15.79l-1.029.527 2.306 1.397c.184.111.364.18.531.223l.618-.652v-.043z"/>
    <path fill="currentColor" d="M5.571 9.57v4.393a3.28 3.28 0 0 0 1.569 2.799l3.411 2.1a2.767 2.767 0 0 0 4.235-2.379v-2.16l-1.072.57v1.701a1.641 1.641 0 0 1-2.511 1.419l-3.279-2.014a2.69 2.69 0 0 1-1.281-2.293V9.514A1.676 1.676 0 0 1 9.21 8.1l3.257 2.032a2.7 2.7 0 0 1 1.247 2.327v1.5l1.072-.588v-1.414c0-.951-.429-1.834-1.243-2.335L9.72 7.273A2.717 2.717 0 0 0 5.57 9.57"/>
    <path fill="currentColor" d="M8.511 6.202v.145c.437-.193 1.127-.021 1.419.09l4.303 2.572a2.97 2.97 0 0 1 1.41 1.988v4.822a3.76 3.76 0 0 1-.677 2.1l.042.085c1.286-.655 1.71-1.971 1.706-2.55v-4.611a2.73 2.73 0 0 0-1.251-2.259L11.28 6.043a1.9 1.9 0 0 0-1.093-.283c-.831 0-1.466.296-1.676.442"/>
    <path fill="currentColor" d="M10.333 5.306V5.16c.508-.3 1.09-.452 1.68-.441.171-.022.634.008 1.093.283l1.83 1.114-1.063.548-2.117-1.268c-.292-.112-.986-.283-1.423-.09m4.307 1.817 1.414.844a2.74 2.74 0 0 1 1.303 1.989v4.821c0 .999-.356 1.817-.57 2.1l.043.086c1.29-.656 1.603-1.972 1.598-2.55V9.802a2.7 2.7 0 0 0-1.144-2.259l-1.573-.956z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#CPH__a)" d="m9.428 8.1.956.266v3.553c.043.407.369 1.358 1.303 1.924l2.314 1.397v1.157l-3.484-2.143a2.62 2.62 0 0 1-1.089-2.185V8.096zm-1.53-.437.798.227a4 4 0 0 0-.022.377v4.659c.043.407.377 1.358 1.329 1.924l.835.497-1.028.515-.999-.6a2.6 2.6 0 0 1-1.105-2.186V8.614c0-.231.047-.578.192-.955zm6.103 9.578L11.58 15.79l-1.029.527 2.306 1.397c.184.111.364.18.531.223l.618-.652v-.043z"/>
    <path fill="url(#CPH__b)" d="M5.571 9.57v4.393a3.28 3.28 0 0 0 1.569 2.799l3.411 2.1a2.767 2.767 0 0 0 4.235-2.379v-2.16l-1.072.57v1.701a1.641 1.641 0 0 1-2.511 1.419l-3.279-2.014a2.69 2.69 0 0 1-1.281-2.293V9.514A1.676 1.676 0 0 1 9.21 8.1l3.257 2.032a2.7 2.7 0 0 1 1.247 2.327v1.5l1.072-.588v-1.414c0-.951-.429-1.834-1.243-2.335L9.72 7.273A2.717 2.717 0 0 0 5.57 9.57"/>
    <path fill="url(#CPH__c)" d="M8.511 6.202v.145c.437-.193 1.127-.021 1.419.09l4.303 2.572a2.97 2.97 0 0 1 1.41 1.988v4.822a3.76 3.76 0 0 1-.677 2.1l.042.085c1.286-.655 1.71-1.971 1.706-2.55v-4.611a2.73 2.73 0 0 0-1.251-2.259L11.28 6.043a1.9 1.9 0 0 0-1.093-.283c-.831 0-1.466.296-1.676.442"/>
    <path fill="url(#CPH__d)" d="M10.333 5.306V5.16c.508-.3 1.09-.452 1.68-.441.171-.022.634.008 1.093.283l1.83 1.114-1.063.548-2.117-1.268c-.292-.112-.986-.283-1.423-.09m4.307 1.817 1.414.844a2.74 2.74 0 0 1 1.303 1.989v4.821c0 .999-.356 1.817-.57 2.1l.043.086c1.29-.656 1.603-1.972 1.598-2.55V9.802a2.7 2.7 0 0 0-1.144-2.259l-1.573-.956z"/>
    <defs>
        <linearGradient id="CPH__a" x1="7.277" x2="16.111" y1="6.818" y2="16.758" gradientUnits="userSpaceOnUse">
            <stop stopColor="#262223"/>
            <stop offset="1" stopColor="#6B6A6F"/>
        </linearGradient>
        <linearGradient id="CPH__b" x1="7.277" x2="16.111" y1="6.818" y2="16.758" gradientUnits="userSpaceOnUse">
            <stop stopColor="#262223"/>
            <stop offset="1" stopColor="#6B6A6F"/>
        </linearGradient>
        <linearGradient id="CPH__c" x1="7.277" x2="16.111" y1="6.818" y2="16.758" gradientUnits="userSpaceOnUse">
            <stop stopColor="#262223"/>
            <stop offset="1" stopColor="#6B6A6F"/>
        </linearGradient>
        <linearGradient id="CPH__d" x1="7.277" x2="16.111" y1="6.818" y2="16.758" gradientUnits="userSpaceOnUse">
            <stop stopColor="#262223"/>
            <stop offset="1" stopColor="#6B6A6F"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconCph.displayName = 'Cph';

export default IconCph;
