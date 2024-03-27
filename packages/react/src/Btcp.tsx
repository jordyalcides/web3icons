
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBtcp = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="m12.252 4.353-.555 2.07L8.8 5.646l-.444 1.656 1.242.333a.43.43 0 0 1 .303.525l-1.552 5.795a.43.43 0 0 1-.525.303l-.828-.222-.858 1.545 2.898.777-.555 2.07 1.242.332 1.775-6.623 1.448.388c1.628.436 4.207.032 4.71-1.844.408-1.522-1.404-3.039-2.646-3.371l.555-2.07-1.242-.333-.555 2.07-.828-.222.555-2.07zm.243 4.058 1.68.45a1.286 1.286 0 1 1-.666 2.484l-1.68-.45z"/>
    <path fill="currentColor" d="M13.02 15.651a1.5 1.5 0 0 0 1.53-2.423c1.018 0 1.336-.124 1.913-.349l.182-.07c.61.73.872 1.701.618 2.647-.412 1.536-2.442 2.339-4.087 2.004l-.001.007-.828-.222-.555 2.07-1.242-.333.999-3.726z"/>

        </>
      ) : (
        <>
          
    <path fill="#272D63" d="m12.251 4.353-.554 2.07-2.898-.777-.444 1.656 1.242.333a.43.43 0 0 1 .303.525l-1.553 5.795a.43.43 0 0 1-.525.303l-.828-.222-.857 1.545 2.897.777-.554 2.07 1.242.332 1.774-6.623 1.449.388c1.627.436 4.207.032 4.71-1.844.407-1.522-1.405-3.039-2.647-3.371l.555-2.07-1.242-.333-.554 2.07-.828-.222.554-2.07zm.244 4.058 1.68.45a1.286 1.286 0 1 1-.666 2.484l-1.68-.45z"/>
    <path fill="#272D63" d="M13.02 15.651a1.5 1.5 0 0 0 1.53-2.423c1.017 0 1.336-.124 1.913-.349l.181-.07c.611.73.872 1.701.618 2.647-.411 1.536-2.441 2.339-4.086 2.004l-.002.007-.828-.222-.554 2.07-1.242-.333.998-3.726z"/>

        </>
      )}
    </BaseIcon>
));

IconBtcp.displayName = 'Btcp';

export default IconBtcp;
