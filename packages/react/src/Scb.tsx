
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconScb = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M5.28 8.571h4.41a1.05 1.05 0 0 1 1.024 1.072c0 .591-.458 1.071-1.024 1.071h-.904v.857H7.714V9.214H6.37c-.326 0-.27.296-.197.407.244.257.737.887.737 1.342 0 .458-.36.6-.54.608H3.857v-.857h1.539c.317 0 .197-.223.094-.321l-.608-.815c-.322-.707.132-.968.398-1.007m3.506.643h.566c.158 0 .291.146.291.322 0 .175-.129.321-.291.321h-.566zm4.474-.643h-1.663l-.883 3h1.042l.116-.428h1.174l.129.428h.968zm-.407 1.929h-.801l.33-1.2h.111zm2.577-1.93a1.5 1.5 0 0 0 0 3h1.286v-.857H15.43a.643.643 0 0 1 0-1.286h1.286V8.57zm4.286 0v.857H18v.429h1.286v.429H18v.428h2.572v.857h-3.429v-3zM4.894 12.514l-.647.763a.643.643 0 1 0-.008.467l.69.707A1.6 1.6 0 0 1 3.716 15a1.54 1.54 0 0 1-1.573-1.5c0-.827.703-1.5 1.573-1.5.471 0 .891.197 1.178.514M18.43 12h1.07l.643.857.643-.857h1.071l-1.285 1.714V15h-.857v-1.286zM8.143 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.857 0A.643.643 0 1 1 6 13.5a.643.643 0 0 1 1.285 0M17.357 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-.857a.643.643 0 1 0 0-1.286.643.643 0 0 0 0 1.286M9 15l-.857-3H9l.429 1.286L9.857 12h.857l.43 1.286L11.64 12h3.09a.703.703 0 0 1 .373 1.303A.883.883 0 0 1 14.76 15h-2.33v-2.143h-.172L11.572 15h-.857l-.472-1.067L9.857 15zm4.5-2.143h.772a.214.214 0 1 1 0 .429H13.5zm0 .857h.75a.321.321 0 0 1 0 .643h-.75z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M5.28 8.571h4.41a1.05 1.05 0 0 1 1.024 1.072c0 .591-.459 1.071-1.024 1.071h-.905v.857H7.714V9.214H6.368c-.325 0-.27.296-.197.407.244.257.737.887.737 1.342 0 .458-.36.6-.54.608H3.857v-.857h1.538c.318 0 .198-.223.095-.321l-.609-.815c-.321-.707.133-.968.399-1.007m3.505.643h.566c.159 0 .292.146.292.322 0 .175-.129.321-.292.321h-.566zm4.475-.643h-1.663l-.883 3h1.041l.116-.428h1.174l.129.428h.969zm-.407 1.929h-.802l.33-1.2h.112zm2.575-1.929a1.5 1.5 0 0 0 0 3h1.286v-.857h-1.286a.643.643 0 0 1 0-1.286h1.286v-.857zm4.286 0v.857H18v.429h1.285v.429H18v.428h2.571v.857h-3.428v-3z" fillRule="evenodd" clipRule="evenodd"/>
    <path fill="#FC0" d="m4.894 12.514-.647.763a.643.643 0 1 0-.009.467l.69.707A1.6 1.6 0 0 1 3.715 15a1.54 1.54 0 0 1-1.572-1.5c0-.827.702-1.5 1.572-1.5.472 0 .892.197 1.179.514M18.428 12H19.5l.643.857.642-.857h1.072l-1.286 1.714V15h-.857v-1.286zM8.143 13.5a1.5 1.5 0 1 1-3.001 0 1.5 1.5 0 0 1 3 0m-.858 0A.643.643 0 1 1 6 13.5a.643.643 0 0 1 1.285 0M17.357 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-.857a.642.642 0 1 0 0-1.285.642.642 0 0 0 0 1.285M9 15l-.857-3H9l.428 1.286L9.857 12h.857l.429 1.286L11.64 12h3.09a.703.703 0 0 1 .373 1.303A.883.883 0 0 1 14.76 15h-2.332v-2.143h-.171L11.57 15h-.857l-.471-1.067L9.857 15zm4.5-2.143h.771a.214.214 0 1 1 0 .429H13.5zm0 .857h.75a.321.321 0 0 1 0 .643h-.75z" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconScb.displayName = 'Scb';

export default IconScb;
