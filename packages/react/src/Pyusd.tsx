
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconPyusd = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.983 6.034a.53.53 0 0 1 .523-.463h4.817A3.943 3.943 0 0 1 17.987 9.9c-.236 3.116-2.691 4.243-3.973 4.243h-1.68l-.716 3.848a.525.525 0 0 1-.522.437h-3.18a.53.53 0 0 1-.509-.382.5.5 0 0 1-.019-.226L8.181 12h-.788a.53.53 0 0 1-.532-.536c0-.296.236-.536.532-.536h.934l.287-2.142H7.393a.53.53 0 0 1-.532-.536.53.53 0 0 1 .527-.536h1.368zm.698 2.752-.291 2.142h3.827a1.03 1.03 0 0 0 1.063-1.071 1.03 1.03 0 0 0-1.063-1.071zM9.248 12h3.969a2.1 2.1 0 0 0 2.121-2.143c0-1.2-.917-2.143-2.121-2.143h-3.39l.141-1.071h4.286a2.87 2.87 0 0 1 2.675 3.171c-.185 2.456-2.08 3.257-2.915 3.257h-2.121a.536.536 0 0 0-.523.437l-.711 3.849H8.524z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#3B6FEF" d="M8.983 6.034a.53.53 0 0 1 .523-.463h4.817A3.943 3.943 0 0 1 17.987 9.9c-.236 3.116-2.691 4.243-3.973 4.243h-1.68l-.716 3.848a.525.525 0 0 1-.522.437h-3.18a.53.53 0 0 1-.509-.382.5.5 0 0 1-.019-.226L8.181 12h-.788a.53.53 0 0 1-.532-.536c0-.296.236-.536.532-.536h.934l.287-2.142H7.393a.53.53 0 0 1-.532-.536.53.53 0 0 1 .527-.536h1.368zm.698 2.752-.291 2.142h3.827a1.03 1.03 0 0 0 1.063-1.071 1.03 1.03 0 0 0-1.063-1.071zM9.248 12h3.969a2.1 2.1 0 0 0 2.121-2.143c0-1.2-.917-2.143-2.121-2.143h-3.39l.141-1.071h4.286a2.87 2.87 0 0 1 2.675 3.171c-.185 2.456-2.08 3.257-2.915 3.257h-2.121a.536.536 0 0 0-.523.437l-.711 3.849H8.524z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconPyusd.displayName = 'Pyusd';

export default IconPyusd;
