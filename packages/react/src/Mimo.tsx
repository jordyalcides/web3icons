
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconMimo = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M9.154 6.857h.214c.283 0 .506.146.617.232.133.098.262.223.378.355.24.258.497.609.754.986.3.446.613.956.9 1.457q.401-.684.831-1.35c.257-.385.515-.758.759-1.041a3 3 0 0 1 .377-.386c.107-.081.339-.253.643-.253.227 0 .407.099.497.155.107.068.21.15.3.235.176.172.369.395.566.656.398.519.861 1.239 1.311 2.057.163.292.322.609.48.93a10 10 0 0 0 1.449-.386.67.67 0 0 1 .87.395.69.69 0 0 1-.395.883c-.402.15-.874.278-1.354.385a13 13 0 0 1 .922 3.365.677.677 0 0 1-1.342.145 12 12 0 0 0-.943-3.261c-.364.056-.69.098-.942.133l-.163.021a.674.674 0 0 1-.759-.587.68.68 0 0 1 .579-.767l.141-.017.54-.073-.266-.506a15.5 15.5 0 0 0-1.195-1.886 7 7 0 0 0-.292-.351 10 10 0 0 0-.655.913c-.45.686-.926 1.496-1.273 2.096l-.09.154a.716.716 0 0 1-1.26-.043q-.611-1.19-1.355-2.301a8 8 0 0 0-.608-.815C8.72 9 8.113 9.934 7.594 11.02c.257.051.48.09.656.115.368.048.63.39.578.768a.677.677 0 0 1-.758.587 15 15 0 0 1-1.02-.189 18 18 0 0 0-.935 3.412.677.677 0 0 1-.77.565.686.686 0 0 1-.562-.78c.2-1.192.514-2.363.934-3.497l-1.35-.334a.686.686 0 0 1 .33-1.324c.403.102.964.244 1.543.377.668-1.475 1.577-2.923 2.743-3.742l.171-.124z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#MIMO__a)" d="M9.155 6.857h.214c.283 0 .506.146.617.232.133.098.261.223.377.355.24.258.497.609.754.986.3.446.613.956.9 1.457q.402-.684.832-1.35c.257-.385.514-.758.758-1.041.116-.137.245-.274.378-.386.107-.081.338-.253.642-.253.227 0 .407.099.497.155.108.068.21.15.3.235a6 6 0 0 1 .566.656c.399.519.862 1.239 1.312 2.057.163.292.321.609.48.93a10 10 0 0 0 1.448-.386.67.67 0 0 1 .87.395.69.69 0 0 1-.394.883c-.403.15-.874.278-1.354.385a13 13 0 0 1 .921 3.365.677.677 0 0 1-1.341.145 12 12 0 0 0-.943-3.261c-.364.056-.69.098-.943.133l-.163.021a.674.674 0 0 1-.758-.587.68.68 0 0 1 .578-.767l.142-.017.54-.073-.266-.506a15.5 15.5 0 0 0-1.196-1.886 7 7 0 0 0-.291-.351 10 10 0 0 0-.656.913c-.45.686-.926 1.496-1.273 2.096l-.09.154a.717.717 0 0 1-1.26-.043q-.611-1.19-1.354-2.301a8 8 0 0 0-.609-.815C8.722 9 8.113 9.934 7.595 11.02c.257.051.48.09.655.115.369.048.63.39.579.768a.677.677 0 0 1-.759.587 15 15 0 0 1-1.02-.189 18 18 0 0 0-.934 3.412.677.677 0 0 1-.771.565.686.686 0 0 1-.562-.78 19.3 19.3 0 0 1 .934-3.497l-1.35-.334a.686.686 0 0 1 .33-1.324c.403.102.965.244 1.543.377.669-1.475 1.577-2.923 2.743-3.742l.172-.124z"/>
    <defs>
        <linearGradient id="MIMO__a" x1="6.581" x2="12.314" y1="8.334" y2="17.896" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6DF1B5"/>
            <stop offset="1" stopColor="#2DD8E0"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconMimo.displayName = 'Mimo';

export default IconMimo;
