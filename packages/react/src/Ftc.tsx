
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconFtc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M18.384 6.952c-.075 1.063-1.466 2.676-2.125 3.44l-.13.152c-.211.245-.41.497-.586.72-.315.397-.557.702-.66.714a2 2 0 0 1-.153.001c-.347-.004-1.104-.013-1.256.373-.092.214 1.14.16 1.14.16s-1.992 2.818-2.114 2.837c-.03.004-.138.002-.296-.002-.482-.012-1.433-.034-2.088.1-.864.177-1.19.662-1.19.662s1.226.104 2.09.146c.859.037 2.183.056 2.183.056s-.95.509-2.458.429-2.109-.202-2.109-.202.21.551.626.815c.253.16.612.3.85.393.154.06.258.101.253.115a3.6 3.6 0 0 1-1.501-.306 1.64 1.64 0 0 1-.65-.561c-.06-.083-.093-.128-.123-.1-.085.073.147.637.35.826.084.082.222.192.35.292.18.142.339.268.3.279-.062.024-1.226-.43-1.441-.693-.104.22-1.201 1.373-1.244 1.25-.021-.06.174-.305.385-.57.222-.28.463-.582.491-.717.061-.257-.012-.662-.208-.65s-.54.718-.54.718-.122-.276-.073-.57.257-.51.257-.51-.41-.44-.6-.63a5 5 0 0 0-.197-.18c-.2-.178-.426-.379-.385-.464.049-.11.692.252.919.41.22.154.705.632.705.632s-.185-.595-.325-.993a9 9 0 0 0-.178-.448c-.095-.23-.171-.414-.141-.44.05-.043.472.514.65.79.184.276.471.81.471.81s-.048-.749.013-1.233c.061-.49.27-.98.368-.95.049.019.077.128.12.297.042.165.098.389.204.641.215.502.362.736.454.674.098-.061.184-.705.128-1.649a41 41 0 0 0-.134-1.654s.576-.613.613-.583c.025.017.03.293.034.608.003.28.007.588.027.777.043.405.16.797.214.797.056-.006.313-.429.479-1.44.17-1.011.245-1.52.245-1.52s1.09-1.017 1.134-1.005c.021.006.043.152.068.32.025.162.052.344.085.44.06.202.184.294.184.294s.257-.264.33-.876q.032-.266.05-.446c.032-.297.048-.444.091-.535.062-.141 1.68-1.422 2.55-2.084.87-.655 2.734-1.802 2.862-1.765.129.043.711.662.632 1.808m-8.207 7.821s2.25-2.243 3.224-3.402c.98-1.158 2.77-3.75 2.77-3.75s-2.255 2.476-3.37 3.787a74 74 0 0 0-2.624 3.359z"/>

        </>
      ) : (
        <>
          
    <path fill="#A1A1A1" d="M18.383 6.952c-.074 1.063-1.465 2.676-2.125 3.44l-.13.152c-.21.245-.41.497-.586.72-.315.397-.556.702-.659.714a2 2 0 0 1-.154.001c-.346-.004-1.103-.013-1.255.373-.092.214 1.14.16 1.14.16s-1.992 2.818-2.115 2.837c-.03.004-.137.002-.295-.002-.482-.012-1.433-.034-2.089.1-.864.177-1.189.662-1.189.662s1.226.104 2.09.146c.858.037 2.182.056 2.182.056s-.95.509-2.457.429c-1.508-.08-2.11-.202-2.11-.202s.21.551.627.815c.253.16.611.3.85.393.153.06.257.101.253.115a3.6 3.6 0 0 1-1.502-.306c-.37-.177-.549-.423-.65-.561-.06-.083-.093-.128-.122-.1-.086.073.147.637.349.826.084.082.222.192.35.292.18.142.34.268.3.279-.062.024-1.226-.43-1.44-.693-.105.22-1.202 1.373-1.245 1.25-.02-.06.174-.305.386-.57.222-.28.462-.582.49-.717.062-.257-.012-.662-.208-.65s-.54.718-.54.718-.122-.276-.073-.57c.05-.294.258-.51.258-.51s-.411-.44-.6-.63a5 5 0 0 0-.197-.18c-.2-.178-.427-.379-.386-.464.049-.11.692.252.919.41.22.154.705.632.705.632s-.184-.595-.325-.993a9 9 0 0 0-.177-.448c-.096-.23-.172-.414-.142-.44.05-.043.472.514.65.79.184.276.472.81.472.81s-.049-.749.012-1.233c.062-.49.27-.98.368-.95.05.019.077.128.12.297.042.165.099.389.205.641.214.502.362.736.453.674.098-.061.185-.705.129-1.649a41 41 0 0 0-.135-1.654s.576-.613.613-.583c.026.017.03.293.034.608.003.28.007.588.027.777.043.405.16.797.215.797.055-.006.313-.429.478-1.44.172-1.011.245-1.52.245-1.52s1.091-1.017 1.134-1.005c.022.006.044.152.069.32.024.162.051.344.084.44.062.202.184.294.184.294s.258-.264.33-.876q.032-.266.051-.446c.032-.297.047-.444.09-.535.062-.141 1.68-1.422 2.55-2.084.87-.655 2.734-1.802 2.863-1.765.129.043.71.662.631 1.808m-8.206 7.821s2.249-2.243 3.223-3.402c.981-1.158 2.77-3.75 2.77-3.75s-2.255 2.476-3.37 3.787a74 74 0 0 0-2.623 3.359z"/>

        </>
      )}
    </BaseIcon>
));

IconFtc.displayName = 'Ftc';

export default IconFtc;
