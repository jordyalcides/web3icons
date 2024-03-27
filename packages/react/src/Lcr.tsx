
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconLcr = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M6 15.596v-6.54c0-.116.133-.189.236-.129l1.478.875v4.731l4.072 2.391v1.783a.153.153 0 0 1-.232.129zm12 0v-6.54c0-.116-.133-.189-.236-.129l-1.478.875v4.731l-4.072 2.391v1.783c0 .116.129.189.232.129z"/>
    <path fill="currentColor" d="m7.821 9.57-1.555-.95a.073.073 0 0 1 0-.129l5.704-3.347 5.713 3.347a.073.073 0 0 1 0 .129l-1.607.956a.08.08 0 0 1-.086 0L13.843 8.29c-.052-.034-.129 0-.129.06v4.808c0 .026-.008.052-.03.065l-1.671 1.05a.08.08 0 0 1-.082 0l-1.62-1.05c-.025-.013-.025-.039-.025-.065V8.35c0-.06-.082-.095-.129-.065L7.903 9.57a.08.08 0 0 1-.086 0zm2.006 3.922-1.414.827a.145.145 0 0 0-.057.203.14.14 0 0 0 .057.054l1.414.844a.26.26 0 0 0 .249 0l1.35-.848a.146.146 0 0 0 0-.249l-1.355-.827a.24.24 0 0 0-.244-.004m4.084 0-1.414.827a.145.145 0 0 0-.056.203.14.14 0 0 0 .056.054l1.414.844a.26.26 0 0 0 .249 0l1.35-.848a.146.146 0 0 0 0-.249l-1.35-.827a.24.24 0 0 0-.249-.004m-3.437 2.027 1.415-.827a.24.24 0 0 1 .24 0l1.35.831a.141.141 0 0 1 0 .249l-1.346.844a.24.24 0 0 1-.249.004l-1.414-.844a.145.145 0 0 1 0-.257z"/>

        </>
      ) : (
        <>
          
    <path fill="#fff" d="M6 15.596v-6.54c0-.116.133-.189.236-.129l1.478.875v4.731l4.072 2.391v1.783a.153.153 0 0 1-.232.129zm12 0v-6.54c0-.116-.133-.189-.236-.129l-1.478.875v4.731l-4.072 2.391v1.783c0 .116.129.189.232.129z"/>
    <path fill="#B3E2FF" d="m7.821 9.57-1.555-.95a.073.073 0 0 1 0-.129l5.704-3.347 5.713 3.347a.073.073 0 0 1 0 .129l-1.607.956a.08.08 0 0 1-.086 0L13.843 8.29c-.052-.034-.129 0-.129.06v4.808c0 .026-.008.052-.03.065l-1.671 1.05a.08.08 0 0 1-.082 0l-1.62-1.05c-.025-.013-.025-.039-.025-.065V8.35c0-.06-.082-.095-.129-.065L7.903 9.57a.08.08 0 0 1-.086 0z"/>
    <path fill="#fff" d="m9.827 13.492-1.414.827a.145.145 0 0 0-.057.203.14.14 0 0 0 .057.054l1.414.844a.26.26 0 0 0 .249 0l1.35-.848a.146.146 0 0 0 0-.249l-1.355-.827a.24.24 0 0 0-.244-.004m4.084 0-1.414.827a.145.145 0 0 0-.056.203.14.14 0 0 0 .056.054l1.414.844a.26.26 0 0 0 .249 0l1.35-.848a.146.146 0 0 0 0-.249l-1.35-.827a.24.24 0 0 0-.249-.004m-3.437 2.027 1.415-.827a.24.24 0 0 1 .24 0l1.35.831a.141.141 0 0 1 0 .249l-1.346.844a.24.24 0 0 1-.249.004l-1.414-.844a.145.145 0 0 1 0-.257z"/>

        </>
      )}
    </BaseIcon>
));

IconLcr.displayName = 'Lcr';

export default IconLcr;
