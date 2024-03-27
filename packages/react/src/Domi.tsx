
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDomi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.429 8.786c-.343-.172-.57-.643-.643-.857.514.342 1.787.428 2.357.428-.343.172-.57.356-.643.429.514-.172 1.359-.214 1.714-.214a3.43 3.43 0 0 1 2.572 1.07c-.343.515-.429 1.214-.429 1.5C11.237 10.287 10.5 9 9.214 9c-1.028 0-1.714.716-1.928 1.072l.428-.215V13.5c-.171 0-.355-.141-.428-.214.343.857 1.286 1.286 1.928 1.286.72 0 1.217-.296 1.556-.7.643-.77.669-1.79.844-2.73.309-1.67 1.457-2.57 3.172-2.57 1.714 0 3.214 1.285 3.214 3C18 13.8 16.93 15 14.786 15c-1.2 0-2.143-.643-2.572-1.286.343-.343.57-1.144.643-1.5.215.643.857 1.929 1.929 1.929 1.286 0 1.928-.857 1.928-2.889C16.714 9.626 15.643 9 14.786 9c-1.286 0-2.057 1.191-2.25 2.254-.103.558-.18 1.218-.322 1.603C11.357 15.214 9.43 15 8.143 15c-1.029 0-1.573.857-1.714 1.286z"/>
    <path fill="currentColor" d="M7.714 9.579v-.365l-.428.215c-.214-.215-.214-.429-.214-.643l-1.286-.857c.073.214.3.685.643.857v7.5C6.57 15.857 7.114 15 8.143 15h.3c1.046.013 2.391.03 3.274-1.187l.146-.214a4 4 0 0 0 .283-.562l-.36-.18c-.214.57-.943 1.757-2.143 1.929-1.2.171-2.07-.214-2.357-.429l-.086-.214.3-.214h-.428c-.172-.515-.172-1.029 0-.857a.68.68 0 0 0 .428.214c0-.172-.287-.502-.428-.643v-1.929s-.215-.214-.215-.428c0-.343.287-.142.429 0l.214-.322-.214.107c.081-.132.223-.317.428-.492m7.252 4.56c1.165-.082 1.748-.952 1.748-2.885C16.714 9.626 15.643 9 14.786 9c-.073 0-.146 0-.214.013V9c1.5-.214 3 .857 3 2.572 0 2.357-1.5 3-2.572 3z"/>
    <path fill="currentColor" d="m15 14.996-.214.004c-1.2 0-2.143-.643-2.572-1.286h.643c.215.287.943.857 2.143.857z"/>
    <path fill="currentColor" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="url(#DOMI__a)" d="M6.428 8.786c-.343-.172-.57-.643-.643-.857.515.342 1.787.428 2.357.428-.342.172-.57.356-.642.429.514-.172 1.358-.214 1.714-.214a3.43 3.43 0 0 1 2.571 1.07c-.343.515-.428 1.214-.428 1.5C11.237 10.287 10.5 9 9.214 9c-1.029 0-1.714.716-1.929 1.072l.429-.215V13.5c-.172 0-.356-.141-.429-.214.343.857 1.286 1.286 1.929 1.286.72 0 1.217-.296 1.556-.7.642-.77.668-1.79.844-2.73.308-1.67 1.457-2.57 3.171-2.57 1.715 0 3.215 1.285 3.215 3C18 13.8 16.928 15 14.785 15c-1.2 0-2.143-.643-2.571-1.286.343-.343.57-1.144.643-1.5.214.643.857 1.929 1.928 1.929 1.286 0 1.929-.857 1.929-2.889C16.714 9.626 15.642 9 14.785 9c-1.285 0-2.057 1.191-2.25 2.254-.103.558-.18 1.218-.321 1.603C11.357 15.214 9.428 15 8.142 15c-1.028 0-1.572.857-1.714 1.286z"/>
    <path fill="url(#DOMI__b)" d="M7.714 9.579v-.365l-.429.215c-.214-.215-.214-.429-.214-.643l-1.286-.857c.073.214.3.685.643.857v7.5C6.57 15.857 7.114 15 8.142 15h.3c1.046.013 2.392.03 3.275-1.187l.145-.214a4 4 0 0 0 .283-.562l-.36-.18c-.214.57-.943 1.757-2.143 1.929-1.2.171-2.07-.214-2.357-.429l-.085-.214.3-.214h-.43c-.171-.515-.171-1.029 0-.857a.68.68 0 0 0 .429.214c0-.172-.288-.502-.429-.643v-1.929s-.214-.214-.214-.428c0-.343.287-.142.428 0l.215-.322-.215.107a2.1 2.1 0 0 1 .429-.492"/>
    <path fill="url(#DOMI__c)" d="M14.965 14.139c1.166-.082 1.749-.952 1.749-2.885C16.714 9.626 15.642 9 14.785 9c-.073 0-.145 0-.214.013V9c1.5-.214 3 .857 3 2.572 0 2.357-1.5 3-2.571 3z"/>
    <path fill="url(#DOMI__d)" d="m15 14.996-.215.004c-1.2 0-2.143-.643-2.571-1.286h.643c.214.287.943.857 2.143.857z"/>
    <path fill="url(#DOMI__e)" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/>
    <defs>
        <linearGradient id="DOMI__a" x1="19.285" x2="5.992" y1="11.813" y2="11.813" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F3D856"/>
            <stop offset=".28" stopColor="#F8EE5D"/>
            <stop offset=".56" stopColor="#C8742A"/>
            <stop offset=".8" stopColor="#F7EE5D"/>
            <stop offset="1" stopColor="#805321"/>
        </linearGradient>
        <linearGradient id="DOMI__b" x1="19.442" x2="6.187" y1="11.813" y2="11.813" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC7E2E"/>
            <stop offset=".67" stopColor="#ED7E1C"/>
            <stop offset=".88" stopColor="#6E4720"/>
            <stop offset=".97" stopColor="#613D19"/>
            <stop offset="1" stopColor="#F47429"/>
        </linearGradient>
        <linearGradient id="DOMI__c" x1="18.244" x2="7.836" y1="10.92" y2="10.92" gradientUnits="userSpaceOnUse">
            <stop offset=".21" stopColor="#6B4822"/>
            <stop offset=".38" stopColor="#ED7022"/>
            <stop offset=".73" stopColor="#F8B23C"/>
            <stop offset="1" stopColor="#F7EB5C"/>
        </linearGradient>
        <linearGradient id="DOMI__d" x1="4.714" x2="19.285" y1="7.143" y2="7.143" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F18023"/>
            <stop offset=".46" stopColor="#F59C1F"/>
            <stop offset=".99" stopColor="#F8ED5D"/>
        </linearGradient>
        <linearGradient id="DOMI__e" x1="6.214" x2="18.857" y1="8.357" y2="16.072" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FBEE"/>
            <stop offset=".22" stopColor="#FFF7A0"/>
            <stop offset=".44" stopColor="#CFA34F"/>
            <stop offset=".72" stopColor="#884A1D"/>
            <stop offset=".88" stopColor="#8F5114"/>
            <stop offset="1" stopColor="#5C1C01"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconDomi.displayName = 'Domi';

export default IconDomi;
