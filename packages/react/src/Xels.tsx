
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconXels = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m3.429 8.143 3.8 7.286h.505L3.9 8.143zm1.247 7.286 1.17-1.986-.429-.727-1.61 2.713zm4.292-7.286-1.802 3.058-.398-.759 1.365-2.299zm-.839 7.286-3.8-7.286h.836L9 15.43zm4.088-7.28c-2.032.103-3.645 1.692-3.645 3.637 0 1.944 1.613 3.534 3.645 3.637v-.858c-1.482-.096-2.667-1.192-2.78-2.565h2.135v-.857H9.509c.297-1.167 1.384-2.05 2.708-2.136zm.428.859v-.86c2.03.107 3.64 1.694 3.64 3.638 0 1.118-.532 2.117-1.37 2.786h2.228l-.429.857h-4.071v-.857h.002v-.008c1.556-.103 2.784-1.307 2.784-2.778 0-1.47-1.228-2.676-2.784-2.778m5.954 3.198a3 3 0 0 1-.238-.024 2 2 0 0 1-.431-.102 1.7 1.7 0 0 1-.536-.291l.003-.003a2.04 2.04 0 0 1-.786-1.617c0-1.062.8-1.935 1.818-2.02v.875c-.49.11-.857.585-.857 1.155 0 .635.457 1.153 1.029 1.178q.08.009.177.027c1.006.097 1.794.965 1.794 2.021 0 1.072-.81 1.948-1.835 2.025h-1.594l.429-.857h1.2c.531-.07.942-.571.942-1.18 0-.655-.48-1.187-1.071-1.187z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#4DB135" d="m3.429 8.143 3.8 7.286h.505L3.9 8.143zm1.247 7.286 1.17-1.986-.429-.727-1.61 2.713zm4.292-7.286-1.802 3.058-.398-.759 1.365-2.299zm-.839 7.286-3.8-7.286h.836L9 15.43zm4.088-7.28c-2.032.103-3.645 1.692-3.645 3.637 0 1.944 1.613 3.534 3.645 3.637v-.858c-1.482-.096-2.667-1.192-2.78-2.565h2.135v-.857H9.509c.297-1.167 1.384-2.05 2.708-2.136zm.428.859v-.86c2.03.107 3.64 1.694 3.64 3.638 0 1.118-.532 2.117-1.37 2.786h2.228l-.429.857h-4.071v-.857h.002v-.008c1.556-.103 2.784-1.307 2.784-2.778 0-1.47-1.228-2.676-2.784-2.778m5.954 3.198a3 3 0 0 1-.238-.024 2 2 0 0 1-.431-.102 1.7 1.7 0 0 1-.536-.291l.003-.003a2.04 2.04 0 0 1-.786-1.617c0-1.062.8-1.935 1.818-2.02v.875c-.49.11-.857.585-.857 1.155 0 .635.457 1.153 1.029 1.178q.08.009.177.027c1.006.097 1.794.965 1.794 2.021 0 1.072-.81 1.948-1.835 2.025h-1.594l.429-.857h1.2c.531-.07.942-.571.942-1.18 0-.655-.48-1.187-1.071-1.187z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconXels.displayName = 'Xels';

export default IconXels;
