
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconChz = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6.626 5.572h11.73L12.42 19.714l-.668-.724L5.778 6.112zm7.046 6.71c.128.074.128.15.128.3h.004c-.065.284-.019.582.129.832.133.073.133.15.069.3l-1.77 4.774-2.096-4.924a.38.38 0 0 1 0-.377.84.84 0 0 0 .128-.454.5.5 0 0 1 .052-.219.4.4 0 0 1 .146-.158l1.444-1.205a.27.27 0 0 1 .163-.06.27.27 0 0 1 .163.06c.234.195.487.389.74.583.239.183.477.366.7.549m-6.313-4.94 4.191 3.145-1.633 1.38a.58.58 0 0 1-.355.077c-.367-.067-.472-.307-.584-.567l-.055-.123-1.496-3.45a1.4 1.4 0 0 1-.066-.185c-.019-.06-.037-.12-.075-.2zm4.828 2.582A.33.33 0 0 1 12 9.866L7.517 6.578a.53.53 0 0 0-.223-.15h9.412v.069c0 .051-.03.07-.072.096a.4.4 0 0 0-.078.058c-.852.698-1.733 1.36-2.625 2.032-.517.389-1.038.78-1.558 1.183a.33.33 0 0 1-.186.058m2.26 1.789-1.701-1.226 3.896-2.991h.072a.3.3 0 0 1-.037.116.3.3 0 0 0-.035.11 240 240 0 0 0-.682 1.728c-.268.684-.537 1.37-.806 2.036 0 .077-.068.227-.141.227s-.146.009-.216.018c-.133.017-.257.032-.35-.018" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="currentColor" d="M9.12 13.727a.977.977 0 0 0 .965-.99.977.977 0 0 0-.965-.99.977.977 0 0 0-.964.99c0 .547.432.99.964.99m5.889 0a.977.977 0 0 0 .964-.99.977.977 0 0 0-.964-.99.977.977 0 0 0-.965.99c0 .547.432.99.965.99M6.214 7.286a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m11.572 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-5.571 13.285a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M18.356 5.572H6.626l-.849.54 5.975 12.878.668.724z"/>
    <path fill="#CD0124" d="M13.8 12.583c0-.15 0-.227-.128-.3-.459-.377-.986-.755-1.44-1.132a.27.27 0 0 0-.163-.06.27.27 0 0 0-.163.06l-1.444 1.205a.4.4 0 0 0-.146.158.5.5 0 0 0-.051.219.84.84 0 0 1-.129.454.38.38 0 0 0 0 .377l2.096 4.924 1.77-4.774c.064-.15.064-.227-.069-.3a1.14 1.14 0 0 1-.128-.831zm-2.25-2.096L7.36 7.341l-.073.077c.073.155.073.232.142.386l1.495 3.45c.142.305.215.613.639.69a.58.58 0 0 0 .356-.077zm.45-.621a.33.33 0 0 0 .373 0c1.419-1.098 2.837-2.113 4.183-3.215.073-.073.15-.073.15-.154v-.069H7.295a.53.53 0 0 1 .223.15zm.746.621 1.702 1.226c.141.077.355 0 .565 0 .073 0 .142-.15.142-.227.497-1.23.994-2.533 1.487-3.763 0-.073.073-.15.073-.227h-.073z"/>
    <path fill="#fff" d="M9.12 13.727a.977.977 0 0 0 .964-.99.977.977 0 0 0-.964-.99.977.977 0 0 0-.965.99c0 .547.432.99.965.99m5.888 0a.977.977 0 0 0 .965-.99.977.977 0 0 0-.965-.99.977.977 0 0 0-.964.99c0 .547.432.99.964.99M6.214 7.286a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m11.571 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-5.571 13.285a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      )}
    </BaseIcon>
));

IconChz.displayName = 'Chz';

export default IconChz;
