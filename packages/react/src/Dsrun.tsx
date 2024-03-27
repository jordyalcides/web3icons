
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDsrun = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.956 6.621a4.77 4.77 0 0 1 2.228-2.335c0 1.345-.098 1.697-.15 1.705.197.018.647.073.9.168.27-.266 1.56-.588 1.852-.588a2.28 2.28 0 0 1-.887 1.248c.171.11.531.44.612.608.12-.188.84-.141 1.059-.141.227-.592 1.123-.866 1.333-.866.321-.536 1.251-.814 1.526-.849-.086.292-.485.72-.703.72a.8.8 0 0 0-.429.129h.373c-.09.236-.519.617-.93.617-.33 0-.609.197-.703.249h.772c-.163.471-.463.514-1.166.514-.562 0-.943.27-1.072.343h1.312c-.133.595-.986.557-1.402.523.112.043.386.128.596.128.214 0 .416-.085.493-.128.039.36.857 1.08 1.406 1.525.548.446 1.028.579 1.144.943.086.283.026.892-.283 1.526-.116.236-.321.291-.857.643-.544.36-.604.484-.771.484a.93.93 0 0 1-.575-.236c-.437-.463-1.324-.497-1.517-.497-.188 0-.493.043-.694.155 0 .454.566 1.958 1.47 2.442a4.08 4.08 0 0 1 2.228 3.206c-.968-2.387-3.934-2.67-4.791-2.953s-1.564-1.688-1.83-2.19c1.487 1.299 1.826 1.53 2.786 1.929-1.972-1.235-2.555-3.652-2.572-4.715.497 1.295.947 1.535 2.563 1.535 1.727 0 2.529.887 2.842.887.308 0 .342-.189.711-.386.291-.163.514-.3.596-.347v-.219c.115-.17.355-.557.355-.754 0-.244-.18-.488-.638-.488-.364 0-.759.317-.857.415l.235-.561a22 22 0 0 0-.771-.771c-.964-1.003-1.629-1.393-2.057-1.573-.433-.185-.45-.33-.45-.6 0-.275-.934-.892-.934-1.029s.128-.189.347-.317c-1.243 0-2.087.424-2.357.634.115.009.33.095.415.146a4.6 4.6 0 0 0-1.885.99c-.052.086-.408 1.037-.408 1.817 0 .626-.094 1.371-.064 1.693-.038-.056-.086-.167-.214-.429 0 2.76 1.286 3.292 1.286 4.929A1.67 1.67 0 0 1 8.57 18v-.429c-.904 1.127-1.495 1.286-2.142 1.286.565-.214 1.015-.827 1.015-1.38 0-.446-.415-1.101-.587-1.406v.643c-.986-.96-.656-2.768-.428-3.643-.065.107-.275.373-.429.643.266-4.941 3.094-6.741 3.956-7.093"/>
    <path fill="currentColor" d="M12 8.601c.047-.008 1.226-.257 1.286.827-.326 0-.96-.23-1.286-.827"/>

        </>
      ) : (
        <>
          
    <path fill="url(#DSRUN__a)" d="M9.956 6.621a4.77 4.77 0 0 1 2.228-2.335c0 1.345-.098 1.697-.15 1.705.197.018.647.073.9.168.27-.266 1.56-.588 1.852-.588a2.28 2.28 0 0 1-.887 1.248c.171.11.531.44.612.608.12-.188.84-.141 1.059-.141.227-.592 1.123-.866 1.333-.866.321-.536 1.251-.814 1.526-.849-.086.292-.485.72-.703.72a.8.8 0 0 0-.429.129h.373c-.09.236-.519.617-.93.617-.33 0-.609.197-.703.249h.772c-.163.471-.463.514-1.166.514-.562 0-.943.27-1.072.343h1.312c-.133.595-.986.557-1.402.523.112.043.386.128.596.128.214 0 .416-.085.493-.128.039.36.857 1.08 1.406 1.525.548.446 1.028.579 1.144.943.086.283.026.892-.283 1.526-.116.236-.321.291-.857.643-.544.36-.604.484-.771.484a.93.93 0 0 1-.575-.236c-.437-.463-1.324-.497-1.517-.497-.188 0-.493.043-.694.155 0 .454.566 1.958 1.47 2.442a4.08 4.08 0 0 1 2.228 3.206c-.968-2.387-3.934-2.67-4.791-2.953s-1.564-1.688-1.83-2.19c1.487 1.299 1.826 1.53 2.786 1.929-1.972-1.235-2.555-3.652-2.572-4.715.497 1.295.947 1.535 2.563 1.535 1.727 0 2.529.887 2.842.887.308 0 .342-.189.711-.386.291-.163.514-.3.596-.347v-.219c.115-.17.355-.557.355-.754 0-.244-.18-.488-.638-.488-.364 0-.759.317-.857.415l.235-.561a22 22 0 0 0-.771-.771c-.964-1.003-1.629-1.393-2.057-1.573-.433-.185-.45-.33-.45-.6 0-.275-.934-.892-.934-1.029s.128-.189.347-.317c-1.243 0-2.087.424-2.357.634.115.009.33.095.415.146a4.6 4.6 0 0 0-1.885.99c-.052.086-.408 1.037-.408 1.817 0 .626-.094 1.371-.064 1.693-.038-.056-.086-.167-.214-.429 0 2.76 1.286 3.292 1.286 4.929A1.67 1.67 0 0 1 8.57 18v-.429c-.904 1.127-1.495 1.286-2.142 1.286.565-.214 1.015-.827 1.015-1.38 0-.446-.415-1.101-.587-1.406v.643c-.986-.96-.656-2.768-.428-3.643-.065.107-.275.373-.429.643.266-4.941 3.094-6.741 3.956-7.093"/>
    <path fill="url(#DSRUN__b)" d="M12 8.601c.047-.008 1.226-.257 1.286.827-.326 0-.96-.23-1.286-.827"/>
    <defs>
        <linearGradient id="DSRUN__a" x1="16.542" x2="5.66" y1="5.847" y2="14.265" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F1912B"/>
            <stop offset="1" stopColor="#F25F2B"/>
        </linearGradient>
        <linearGradient id="DSRUN__b" x1="16.542" x2="5.66" y1="5.847" y2="14.265" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F1912B"/>
            <stop offset="1" stopColor="#F25F2B"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconDsrun.displayName = 'Dsrun';

export default IconDsrun;
