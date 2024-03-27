
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWell = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.86 17.04a6.18 6.18 0 0 0 2.35-11.897 6.917 6.917 0 1 1-8.066 8.066 6.18 6.18 0 0 0 5.717 3.831"/>
    <path fill="currentColor" d="M17.04 10.86a6.18 6.18 0 0 1-9.788 5.015 6.18 6.18 0 1 0 8.37-8.953 6.15 6.15 0 0 1 1.414 3.943z"/>
    <path fill="currentColor" d="M5.375 11.52c.197 1.535 1.55 4.672 5.408 4.933-.758-4.487-3.921-5.16-5.408-4.933m11.155 0c-.193 1.535-1.551 4.672-5.408 4.933.762-4.487 3.925-5.16 5.408-4.933"/>
    <path fill="currentColor" d="M10.68 14.953c.133.317.24.78.279.973.175-1.187 1.178-3.733 3.78-4.423.004-.686-.065-2.229-.365-2.966-3.39 1.547-3.874 4.92-3.694 6.416"/>
    <path fill="currentColor" d="M10.385 14.25c-.986-1.958-2.538-2.653-3.19-2.751-.03-.545-.008-1.895.335-2.949 2.122.994 3.069 2.683 3.275 3.407a6.6 6.6 0 0 0-.42 2.293"/>
    <path fill="currentColor" d="M9.407 9.497a7.9 7.9 0 0 1 1.569 2.13c.231-.475.866-1.572 1.543-2.13-.21-.544-.806-1.808-1.543-2.515-.759.698-1.363 1.971-1.569 2.515"/>

        </>
      ) : (
        <>
          
    <path fill="#FFCE6C" d="M10.86 17.04a6.18 6.18 0 0 0 2.348-11.897 6.917 6.917 0 1 1-8.065 8.066 6.18 6.18 0 0 0 5.717 3.831"/>
    <path fill="#FFF1B4" d="M17.04 10.86a6.18 6.18 0 0 1-9.789 5.015 6.18 6.18 0 1 0 8.37-8.953 6.15 6.15 0 0 1 1.414 3.943z"/>
    <path fill="#EFC705" d="M5.374 11.52c.197 1.535 1.551 4.672 5.409 4.933-.759-4.487-3.922-5.16-5.409-4.933"/>
    <path fill="#0082E4" d="M16.53 11.52c-.193 1.535-1.552 4.672-5.409 4.933.763-4.487 3.926-5.16 5.409-4.933"/>
    <path fill="#52C9C7" d="M10.68 14.953c.133.317.24.78.278.973.176-1.187 1.179-3.733 3.78-4.423.005-.686-.064-2.229-.364-2.966-3.39 1.547-3.874 4.92-3.694 6.416"/>
    <path fill="#ADD004" d="M10.384 14.25c-.986-1.958-2.537-2.653-3.189-2.751-.03-.545-.008-1.895.335-2.949 2.121.994 3.068 2.683 3.274 3.407a6.6 6.6 0 0 0-.42 2.293"/>
    <path fill="#5CCC4E" d="M9.407 9.497a7.9 7.9 0 0 1 1.568 2.13c.232-.475.866-1.572 1.543-2.13-.21-.544-.805-1.808-1.543-2.515-.758.698-1.362 1.971-1.568 2.515"/>

        </>
      )}
    </BaseIcon>
));

IconWell.displayName = 'Well';

export default IconWell;
