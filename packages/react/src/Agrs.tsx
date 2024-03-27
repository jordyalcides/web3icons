
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconAgrs = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M11.859 9.441a.84.84 0 0 0-.558.202 1.8 1.8 0 0 0-.402.531 3.5 3.5 0 0 0-.288.729 7.2 7.2 0 0 0-.278 1.534 6 6 0 0 0-.03.557q0 .7.193 1.072.192.362.617.364a.86.86 0 0 0 .557-.193q.247-.21.403-.497c.115-.206.214-.437.287-.699a7.4 7.4 0 0 0 .266-1.551q.025-.373.025-.643a2.6 2.6 0 0 0-.162-1.037c-.112-.249-.322-.369-.63-.369"/>
    <path fill="currentColor" d="M15.116 9.531h-.266c-.146 0-.394.086-.446.416-.197 1.35-.394 2.919-.42 3.099a3 3 0 0 0-.043.595c.013.223.069.386.116.459a.6.6 0 0 0 .386.283l-.214 1.586h-.438a3 3 0 0 1-.48-.09 1.6 1.6 0 0 1-.587-.343c-.15-.159-.3-.326-.433-.737a1.94 1.94 0 0 1-.737.827c-.243.148-.52.23-.806.235a1.81 1.81 0 0 1-1.49-.66C8.9 14.76 8.72 14.1 8.72 13.213c0-.9.086-1.68.245-2.336.163-.651.377-1.191.643-1.611.225-.38.538-.7.912-.935q.512-.3 1.037-.3c.395 0 .72.09.978.283q.386.283.587.784s.141-.5.758-.784c.729-.334 1.397.052 1.397.052zM12 5.143a6.857 6.857 0 1 0 0 13.714 6.857 6.857 0 0 0 0-13.714"/>
    <path fill="currentColor" d="M12 19.286c-4.072 0-7.286-3.215-7.286-7.286 0-4.072 3.214-7.286 7.286-7.286S19.286 7.928 19.286 12 16.07 19.286 12 19.286m0-15a7.714 7.714 0 1 0 0 15.428 7.714 7.714 0 0 0 0-15.428"/>

        </>
      ) : (
        <>
          
    <path fill="#FFC845" d="M11.859 9.441a.84.84 0 0 0-.557.202 1.8 1.8 0 0 0-.403.531 3.5 3.5 0 0 0-.287.729 7.2 7.2 0 0 0-.279 1.534c-.021.227-.03.416-.03.557q0 .7.193 1.072.193.362.617.364a.86.86 0 0 0 .557-.193q.249-.21.403-.497c.116-.206.215-.437.287-.699a7.4 7.4 0 0 0 .266-1.551q.026-.373.026-.643a2.6 2.6 0 0 0-.163-1.037c-.111-.249-.321-.369-.63-.369"/>
    <path fill="#FFC845" d="M15.116 9.531h-.266c-.145 0-.394.086-.445.416-.197 1.35-.395 2.919-.42 3.099a3 3 0 0 0-.043.595c.013.223.068.386.116.459a.6.6 0 0 0 .385.283l-.214 1.586h-.437a3 3 0 0 1-.48-.09 1.6 1.6 0 0 1-.587-.343c-.15-.159-.3-.326-.433-.737a1.94 1.94 0 0 1-.737.827c-.243.148-.521.23-.806.235a1.81 1.81 0 0 1-1.491-.66c-.356-.441-.536-1.101-.536-1.988 0-.9.086-1.68.244-2.336.163-.651.377-1.191.643-1.611.226-.38.539-.7.913-.935q.513-.3 1.037-.3c.394 0 .72.09.977.283q.387.283.587.784s.142-.5.759-.784c.728-.334 1.397.052 1.397.052zM12 5.143a6.857 6.857 0 1 0 0 13.714 6.857 6.857 0 0 0 0-13.714"/>
    <path fill="#FFC845" d="M12 19.286c-4.071 0-7.285-3.215-7.285-7.286 0-4.072 3.214-7.286 7.285-7.286 4.072 0 7.286 3.214 7.286 7.286S16.072 19.286 12 19.286m0-15a7.714 7.714 0 1 0 0 15.428 7.714 7.714 0 0 0 0-15.428"/>

        </>
      )}
    </BaseIcon>
));

IconAgrs.displayName = 'Agrs';

export default IconAgrs;
