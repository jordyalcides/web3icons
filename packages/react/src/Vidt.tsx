
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconVidt = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M8.572 5.143c.422 0 .858.29.858 1.234v9.568c-.003.072.04.194.238.108s1.329-.67 1.808-.957c.034-.017.096-.085.096-.214V8.484c0-.158 0-.56.498-.88.367-.238.914-.095 1.128.05l5.95 3.452c.196.12.582.364.566.907s-.444.815-.652.922L9.02 18.772c-.181.081-.693.172-.953-.077-.297-.287-.346-.592-.352-.69V6.377c-.016-.386.087-1.234.857-1.234M13.5 14.13q.058 0 .108-.029l3.219-1.888a.216.216 0 0 0-.001-.371l-3.22-1.888a.213.213 0 0 0-.32.184v3.776a.213.213 0 0 0 .214.216" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#00CCDA" d="M8.572 5.143c.422 0 .858.29.858 1.234v9.568c-.003.072.04.194.238.108s1.329-.67 1.808-.957c.034-.017.096-.085.096-.214V8.484c0-.158 0-.56.498-.88.367-.238.914-.095 1.128.05l5.95 3.452c.196.12.582.364.566.907s-.444.815-.652.922L9.02 18.772c-.181.081-.693.172-.953-.077-.297-.287-.346-.592-.352-.69V6.377c-.016-.386.087-1.234.857-1.234M13.5 14.13q.058 0 .108-.029l3.219-1.888a.216.216 0 0 0-.001-.371l-3.22-1.888a.213.213 0 0 0-.32.184v3.776a.213.213 0 0 0 .214.216" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconVidt.displayName = 'Vidt';

export default IconVidt;
