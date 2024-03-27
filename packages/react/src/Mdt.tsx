
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMdt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.863 5.186 7.286 7.954c.167.142.33.523.36.609l3.926-2.409v2.91c0 .155.205.36.428.365.223 0 .429-.215.429-.365v-2.91l3.934 2.417c.064-.188.287-.54.352-.604a209 209 0 0 0-4.522-2.781c-.171-.069-.291-.03-.33 0m0 13.628-4.577-2.768c.157-.179.28-.385.36-.609l3.926 2.409v-2.91c0-.155.205-.36.428-.364.223 0 .429.214.429.364v2.91l3.934-2.417c.064.188.287.54.352.604a209 209 0 0 1-4.522 2.781c-.171.069-.291.03-.33 0M5.572 13.93v-3.84c.488.162 1.063.068 1.285 0v3.84a2.17 2.17 0 0 0-1.285 0m11.571 0v-3.84c.489.162 1.063.068 1.286 0v3.84a2.17 2.17 0 0 0-1.286 0m-5.983-1.51L7.097 9.986c.339-.282.571-.67.66-1.102l4.063 2.435c-.35.272-.585.664-.66 1.101m1.732 0 4.067-2.434a1.95 1.95 0 0 1-.66-1.102l-4.067 2.435c.48.385.643.895.66 1.101m4.894-2.563a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-11.572 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0-6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>
    <path fill="currentColor" d="M11.992 13.08a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      ) : (
        <>
          
    <path fill="#BBE3FF" d="M11.863 5.186 7.285 7.954c.168.142.33.523.36.609l3.926-2.409v2.91c0 .155.206.36.429.365.223 0 .428-.215.428-.365v-2.91l3.935 2.417c.064-.188.287-.54.351-.604a209 209 0 0 0-4.521-2.781c-.172-.069-.292-.03-.33 0m0 13.628-4.578-2.768a1.9 1.9 0 0 0 .36-.609l3.926 2.409v-2.91c0-.155.206-.36.429-.364.223 0 .428.214.428.364v2.91l3.935-2.417c.064.188.287.54.351.604a209 209 0 0 1-4.521 2.781c-.172.069-.292.03-.33 0M5.57 13.93v-3.84c.489.162 1.063.068 1.286 0v3.84a2.17 2.17 0 0 0-1.286 0m11.572 0v-3.84c.488.162 1.062.068 1.285 0v3.84a2.17 2.17 0 0 0-1.285 0m-5.982-1.51L7.097 9.986c.338-.282.57-.67.66-1.102l4.063 2.435c-.35.272-.585.664-.66 1.101m1.731 0 4.067-2.434a1.95 1.95 0 0 1-.66-1.102l-4.067 2.435c.48.385.643.895.66 1.101"/>
    <path fill="#fff" d="M17.785 9.857a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0 6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m-11.571 0a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m0-6.429a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143m5.777 3.223a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"/>

        </>
      )}
    </BaseIcon>
));

IconMdt.displayName = 'Mdt';

export default IconMdt;
