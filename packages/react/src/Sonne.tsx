
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconSonne = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 5.143c.236 0 .429.219.429.489v.535c0 .27-.193.489-.429.489s-.428-.214-.428-.489v-.535c0-.27.192-.489.428-.489m4.672 8.143H6.9q.06.445.189.857H15l.986 1.076a4.9 4.9 0 0 0 .686-1.933m-1.15 2.571H5.453c-.408 0-.738-.385-.738-.857h9.978l.844.845zm1.188-3.428H6.857c.034-.815.27-1.577.652-2.246l1.2 1.389h7.885q.097.418.116.857m-.386-1.715a4.93 4.93 0 0 0-8.383-1.157l1.072 1.157h7.316zM6 16.715c0 .472.313.858.694.858h10.612c.386 0 .694-.386.694-.857zm10.834-.857h1.732c.381 0 .69-.385.69-.857h-2.079q-.148.448-.343.857M5.2 12c-.266 0-.485.193-.485.429s.215.428.485.428h.531c.266 0 .484-.192.484-.428S6 12 5.73 12zm1.17-3.33a.484.484 0 0 0-.66.18.49.49 0 0 0 .171.669l.463.27a.48.48 0 0 0 .66-.18.49.49 0 0 0-.176-.669zm2.005-2.55a.484.484 0 0 1 .66.18l.266.459a.5.5 0 0 1-.176.673.484.484 0 0 1-.664-.18l-.266-.463a.493.493 0 0 1 .18-.669M18.802 12c.265 0 .484.193.484.429s-.215.428-.485.428h-.53c-.267 0-.485-.192-.485-.428S18 12 18.27 12zm-.506-3.15a.486.486 0 0 0-.665-.18l-.458.27a.493.493 0 0 0-.176.669.48.48 0 0 0 .66.18l.459-.27a.49.49 0 0 0 .175-.669zm-3.33-2.55a.476.476 0 0 1 .66-.18.493.493 0 0 1 .18.669l-.266.463a.484.484 0 0 1-.891-.12.5.5 0 0 1 .051-.373z"/>

        </>
      ) : (
        <>
          
    <path fill="#FE684F" d="M12 5.143c.235 0 .428.219.428.489v.535c0 .27-.193.489-.428.489-.236 0-.429-.214-.429-.489v-.535c0-.27.193-.489.429-.489m4.671 8.143H6.9q.058.445.188.857H15l.985 1.076a4.9 4.9 0 0 0 .686-1.933m-1.149 2.571H5.451c-.407 0-.737-.385-.737-.857h9.977l.844.845zm1.188-3.428H6.857c.034-.815.27-1.577.651-2.246l1.2 1.389h7.886q.096.418.116.857m-.386-1.715A4.93 4.93 0 0 0 7.94 9.558l1.071 1.157h7.316zM6 16.715c0 .472.312.858.694.858h10.611c.386 0 .695-.386.695-.857zm10.834-.857h1.731c.382 0 .69-.385.69-.857h-2.078q-.15.448-.343.857M5.198 12c-.266 0-.484.193-.484.429s.214.428.484.428h.532c.265 0 .484-.192.484-.428S6 12 5.73 12zm1.17-3.33a.484.484 0 0 0-.66.18.49.49 0 0 0 .172.669l.462.27a.48.48 0 0 0 .66-.18.49.49 0 0 0-.175-.669zm2.006-2.55a.484.484 0 0 1 .66.18l.266.459a.5.5 0 0 1-.176.673.484.484 0 0 1-.664-.18l-.266-.463a.493.493 0 0 1 .18-.669M18.8 12c.266 0 .484.193.484.429s-.214.428-.484.428h-.531c-.266 0-.485-.192-.485-.428S18 12 18.27 12zm-.506-3.15a.486.486 0 0 0-.664-.18l-.459.27a.493.493 0 0 0-.175.669.48.48 0 0 0 .66.18l.458-.27a.49.49 0 0 0 .176-.669zm-3.33-2.55a.476.476 0 0 1 .66-.18.493.493 0 0 1 .18.669l-.265.463a.484.484 0 0 1-.891-.12.5.5 0 0 1 .05-.373z"/>

        </>
      )}
    </BaseIcon>
));

IconSonne.displayName = 'Sonne';

export default IconSonne;
