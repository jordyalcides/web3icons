
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconApollo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18.4 14.465a6.86 6.86 0 0 1-6.503 4.391l2.169-4.966a7.33 7.33 0 0 0 4.335.575m.049-.129q.06-.167.112-.339c-.458.094-.93.146-1.418.146a6.9 6.9 0 0 1-2.906-.643l2.722-6.236-.223-.223-6 2.692a6.86 6.86 0 0 1-.155-4.443 6.857 6.857 0 0 1 7.868 9.046M10.1 5.41a6.86 6.86 0 0 0-4.954 6.826l5.194-2.327a7.27 7.27 0 0 1-.24-4.5m-4.923 7.284a6.84 6.84 0 0 0 1.825 3.999l4.637-4.633a7.3 7.3 0 0 1-1.132-1.757zM7.308 17a6.83 6.83 0 0 0 4.135 1.835l2.237-5.138a7.3 7.3 0 0 1-1.753-1.324zm8.755-8.763-2.207 5.066a6.9 6.9 0 0 1-1.625-1.23zm-.322-.278-3.801 3.797a6.9 6.9 0 0 1-1.041-1.629z" fillRule="evenodd" clipRule="evenodd"/>
        </>
      ) : (
        <>
          <g clipPath="url(#APOLLO__a)"><path fill="#F0F3FA" d="M0 0h24v24H0z"/><path fill="#00DC55" d="M18.4 14.465a6.86 6.86 0 0 1-6.502 4.392l2.168-4.967a7.33 7.33 0 0 0 4.335.575m.052-.136q.058-.165.11-.332c-.46.094-.93.146-1.42.146a6.9 6.9 0 0 1-2.905-.643l2.722-6.236-.223-.223-6 2.692a6.86 6.86 0 0 1-.155-4.443 6.857 6.857 0 0 1 7.87 9.04M10.1 5.41a6.86 6.86 0 0 0-4.954 6.827l5.195-2.327a7.27 7.27 0 0 1-.24-4.5m1.342 13.426 2.237-5.138a7.3 7.3 0 0 1-1.753-1.324L7.307 17a6.83 6.83 0 0 0 4.136 1.834M7.212 16.91a7 7 0 0 1-.21-.216l4.638-4.633a7.3 7.3 0 0 1-1.131-1.757l-5.331 2.391a6.84 6.84 0 0 0 2.034 4.215m8.85-8.672-2.206 5.066a6.9 6.9 0 0 1-1.624-1.23zm-.32-.278-3.802 3.797a6.9 6.9 0 0 1-1.041-1.629z" fillRule="evenodd" clipRule="evenodd"/></g><defs><clipPath id="APOLLO__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
        </>
      )}
    </BaseIcon>
));

IconApollo.displayName = 'Apollo';

export default IconApollo;