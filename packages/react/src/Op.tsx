
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconOp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M4.73 15.653q.887.633 2.273.633 1.678 0 2.68-.758 1.003-.769 1.41-2.318.245-.95.42-1.957.058-.36.058-.6 0-.791-.408-1.356a2.43 2.43 0 0 0-1.118-.86q-.711-.294-1.608-.294-3.298 0-4.09 3.11-.28 1.143-.432 1.957a4 4 0 0 0-.058.61q0 1.188.874 1.833m4.208-2.511c-.223.866-.839 1.43-1.772 1.43-.922 0-1.238-.624-1.072-1.43q.21-1.097.42-1.855c.24-.935.806-1.43 1.771-1.43.919 0 1.22.616 1.06 1.43q-.14.792-.407 1.855m3.53 3.063q.069.08.194.08h1.541a.34.34 0 0 0 .215-.08.33.33 0 0 0 .125-.21l.487-2.28H16.6c.99 0 1.764-.48 2.33-.907q.862-.64 1.146-1.978.068-.314.068-.605 0-1.011-.771-1.547-.76-.535-2.018-.535H14.34a.34.34 0 0 0-.215.082.34.34 0 0 0-.125.209l-1.564 7.561a.28.28 0 0 0 .034.21m5.51-5.398c-.142.623-.685 1.193-1.322 1.193h-1.304l.45-2.143h1.36c.463 0 .85.092.85.601q0 .15-.034.349" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#FE0420" d="M4.731 15.653q.885.633 2.273.633 1.677 0 2.68-.758 1.002-.769 1.41-2.318.245-.95.42-1.957.057-.36.058-.6 0-.791-.408-1.356a2.43 2.43 0 0 0-1.119-.86q-.711-.294-1.608-.294-3.297 0-4.09 3.11-.28 1.143-.431 1.957a4 4 0 0 0-.059.61q0 1.188.874 1.833m4.207-2.511c-.223.866-.838 1.43-1.771 1.43-.923 0-1.238-.624-1.072-1.43q.21-1.097.42-1.855c.24-.935.806-1.43 1.77-1.43.92 0 1.22.616 1.061 1.43q-.14.792-.408 1.855m3.531 3.063q.069.08.193.08h1.542a.34.34 0 0 0 .215-.08.33.33 0 0 0 .125-.21l.487-2.28h1.568c.99 0 1.764-.48 2.331-.907q.862-.64 1.145-1.978.069-.314.068-.605 0-1.011-.77-1.547-.76-.535-2.018-.535H14.34a.34.34 0 0 0-.216.082.34.34 0 0 0-.124.209l-1.565 7.561a.28.28 0 0 0 .034.21m5.51-5.398c-.142.623-.685 1.193-1.323 1.193h-1.303l.449-2.143h1.36c.463 0 .85.092.85.601q0 .15-.034.349" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconOp.displayName = 'Op';

export default IconOp;
