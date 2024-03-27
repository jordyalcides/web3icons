
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconClxy = forwardRef<SVGSVGElement, IconComponentProps>(({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
        
    <path fill="currentColor" d="M13.526 4.813c-.026.06.013.128.073.197-.888-.133-2.602-.159-3.446.51-.772.608-1.26 1.813-1.406 2.34a7.4 7.4 0 0 0-2.074.583c-.892.403-.729 1.157.051 1.157.407 0 .78-.116 1.042-.236A5.74 5.74 0 0 0 6 13.513a5.78 5.78 0 0 0 5.786 5.773 5.778 5.778 0 0 0 4.843-8.928 6.9 6.9 0 0 0 .492-2.202c-.051-1.805-1.787-2.64-2.76-2.958.03-.017.056-.042.06-.068.043-.163-.201-.317-.33-.356-.128-.034-.501-.133-.565.043zm-2.709.853C9.9 6.05 9.411 7.204 9.283 7.73c1.633-.36 3.921.815 4.86 1.449.21-.57.621-1.839.621-2.327 0-.485-.201-.9-.304-1.046-.857-.326-2.494-.63-3.643-.141M15.16 7.52l-.566 1.869c.368.21 1.191.651 1.56.733.15-.48.458-1.522.458-1.817 0-1.183-1.032-1.925-1.551-2.143.309.347.193 1.05.099 1.358M6.917 9.287c.643 0 1.453-.416 1.774-.626.712.626 2.61 1.693 4.5.965-1.538.317-2.982-.339-3.642-.699a3.02 3.02 0 0 0-2.13-.399c-.845.15-1.303.76-.502.76m.934 1.706c.3-.454.943-.45 1.329-.06l1.834 1.83a1.01 1.01 0 0 0 1.415 0l1.821-1.822c.386-.385 1.029-.394 1.329.065a4.607 4.607 0 0 1-3.866 7.11 4.606 4.606 0 0 1-3.857-7.123zm2.816 2.494-1.444-1.436c-.176-.18-.459-.193-.609.009a3.03 3.03 0 0 0-.535 1.791c0 .875.342 1.427.642 1.715.155.141.386.107.532-.035l1.406-1.328a.503.503 0 0 0 .008-.716m3.476-1.436-1.444 1.436a.5.5 0 0 0 .012.716l1.402 1.328c.15.142.377.176.531.035a2.3 2.3 0 0 0 .643-1.715c0-.827-.274-1.431-.536-1.791-.145-.202-.428-.189-.608-.009M12.32 7.568a.21.21 0 0 1-.184-.102l-.043-.086-.03-.069a2 2 0 0 0-.205-.295c-.21.068-.382.158-.48.218-.138.094-.249.013-.313-.081-.069-.095.013-.399.257-.339a1 1 0 0 0 .356.009 2.6 2.6 0 0 0-.502-.373c-.154-.073-.137-.21-.086-.313.043-.103.352-.184.42.056.094.224.234.425.412.591.21-.038.413-.11.6-.214.128-.077.24-.137.304-.094.099.068.176.184.094.33a.21.21 0 0 1-.18.102h-.098q-.031-.01-.068-.008a2 2 0 0 0-.471.051c.073.06.15.107.223.155.128.077.235.141.231.214-.008.124-.068.248-.236.248" fillRule="evenodd" clipRule="evenodd"/>

    </BaseIcon>
));

IconClxy.displayName = 'Clxy';

export default IconClxy;
