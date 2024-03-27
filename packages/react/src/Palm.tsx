
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPalm = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M18.429 12A6.429 6.429 0 1 1 5.57 12a6.429 6.429 0 0 1 12.858 0M12 10.5c-.141-.356-.428-1.243-.428-1.928 0-.686.287-1.715.428-2.143.142.428.429 1.457.429 2.143S12.142 10.144 12 10.5m.429-.214c.355-.716 1.457-2.143 3-2.143zm.428.428c.716-.141 2.4-.128 3.429 1.072-.999-.356-3.086-1.072-3.429-1.072m-.214.215c.716.287 2.228 1.2 2.571 2.571zm-1.286 0c-.784.214-2.4 1.028-2.571 2.571.643-.784 2.057-2.4 2.571-2.571m-.214-.215c-.784-.141-2.572-.128-3.429 1.072.716-.429 2.4-1.243 3.429-1.072M8.57 8.143c.643 0 2.143.428 3 2.143-.715-.716-2.314-2.143-3-2.143m-.857 1.5c1.5-.429 2.915-.043 4.286 1.5 1.371-1.543 2.786-1.929 4.286-1.5-1.496-.15-3.223.454-4.187 1.616 1.131 1.358 1.225 3.102.223 4.307a3.66 3.66 0 0 0 1.392.934.54.54 0 0 1 .643.214c-.171 0-.501.288-.643.429-.343 0-.287-.287-.214-.429A4 4 0 0 1 12 15.9c-.386.343-.887.626-1.5.814.073.142.129.429-.214.429-.142-.142-.472-.429-.643-.429.073-.12.3-.33.643-.214.53-.2 1.007-.52 1.393-.934-1.003-1.2-.909-2.949.223-4.307-.965-1.162-2.692-1.766-4.188-1.616M12 11.387a3.15 3.15 0 0 0-.643 1.685c-.049.758.18 1.51.643 2.112a3.14 3.14 0 0 0 .643-2.112A3.15 3.15 0 0 0 12 11.387m-3.304 3.866h-.407l-.069.171h-.167l.347-.857h.184l.343.857h-.163zm-.043-.116-.159-.398-.158.398zm.913.176H9.24v-.742h-.159v.858h.485zm1.148.116v-.857h-.171l-.334.672-.343-.672h-.172v.857h.163v-.588l.296.588h.107l.3-.588v.588zm-2.785-.48a.236.236 0 0 0-.12-.343.5.5 0 0 0-.189-.034h-.334v.857h.158v-.348h.172q.128 0 .197-.038a.22.22 0 0 0 .111-.094zm-.172-.018a.25.25 0 0 1-.137.035h-.176v-.279h.172q.185-.002.184.137a.13.13 0 0 1-.043.107m8.529-.36-.326.55v.308h-.163v-.309l-.33-.548h.18l.232.42.227-.42zm-1.543.686h.416l.068.172h.172l-.356-.857h-.184l-.356.857h.171zm.206-.514.162.394h-.32zm-.545.086a.2.2 0 0 1-.034.12.26.26 0 0 1-.111.098.6.6 0 0 1-.202.034h-.18v.348h-.163v-.857h.343q.11 0 .193.034a.26.26 0 0 1 .159.223zm-.347.137a.24.24 0 0 0 .137-.034.13.13 0 0 0 .043-.103q0-.142-.18-.142h-.18v.279z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#45651C" d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#45651C" d="M18.428 12a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0M12 10.5c-.142-.356-.429-1.243-.429-1.928 0-.686.287-1.715.429-2.143.141.428.428 1.457.428 2.143S12.141 10.144 12 10.5m.428-.214c.356-.716 1.457-2.143 3-2.143zm.429.428c.715-.141 2.4-.128 3.428 1.072-.998-.356-3.085-1.072-3.428-1.072m-.215.215c.716.287 2.229 1.2 2.572 2.571zm-1.285 0c-.785.214-2.4 1.028-2.572 2.571.643-.784 2.057-2.4 2.572-2.571m-.215-.215c-.784-.141-2.571-.128-3.428 1.072.716-.429 2.4-1.243 3.428-1.072M8.571 8.143c.643 0 2.143.428 3 2.143-.716-.716-2.314-2.143-3-2.143m-.857 1.5c1.5-.429 2.914-.043 4.286 1.5 1.371-1.543 2.785-1.929 4.285-1.5-1.495-.15-3.223.454-4.187 1.616 1.132 1.358 1.226 3.102.223 4.307.386.415.863.734 1.393.934a.54.54 0 0 1 .643.214c-.172 0-.502.288-.643.429-.343 0-.287-.287-.214-.429A4 4 0 0 1 12 15.9c-.386.343-.888.626-1.5.814.072.142.128.429-.215.429-.141-.142-.471-.429-.643-.429.073-.12.3-.33.643-.214.53-.2 1.007-.52 1.393-.934-1.003-1.2-.908-2.949.223-4.307-.964-1.162-2.691-1.766-4.187-1.616M12 11.387a3.15 3.15 0 0 0-.643 1.685c-.05.758.18 1.51.643 2.112a3.14 3.14 0 0 0 .642-2.112A3.15 3.15 0 0 0 12 11.387m-3.305 3.866h-.407l-.068.171h-.168l.348-.857h.184l.343.857h-.163zm-.043-.116-.158-.398-.159.398zm.913.176H9.24v-.742h-.16v.858h.484zm1.149.116v-.857h-.172l-.334.672-.343-.672h-.171v.857h.163v-.588l.295.588h.108l.3-.588v.588zm-2.786-.48a.236.236 0 0 0-.12-.343.5.5 0 0 0-.188-.034h-.335v.857h.159v-.348h.171q.128 0 .197-.038a.22.22 0 0 0 .112-.094zm-.171-.018a.25.25 0 0 1-.137.035h-.176v-.279h.171q.186-.002.185.137a.13.13 0 0 1-.043.107m8.528-.36-.325.55v.308h-.163v-.309l-.33-.548h.18l.231.42.227-.42zm-1.543.686h.416l.069.172h.171l-.356-.857h-.184l-.356.857h.172zm.206-.514.163.394h-.321zm-.544.086a.2.2 0 0 1-.034.12.26.26 0 0 1-.112.098.6.6 0 0 1-.201.034h-.18v.348h-.163v-.857h.343q.11 0 .193.034a.26.26 0 0 1 .158.223zm-.347.137a.24.24 0 0 0 .137-.034.13.13 0 0 0 .043-.103q0-.142-.18-.142h-.18v.279z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconPalm.displayName = 'Palm';

export default IconPalm;
