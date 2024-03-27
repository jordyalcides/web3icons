
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconDext = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M10.68 5.79c.18.513.665.91 1.254.91.6 0 1.09-.412 1.261-.936.113-.346.432-.704.783-.604a7 7 0 0 1 1.47.607c.314.173.291.638.128.957a1.327 1.327 0 0 0 1.77 1.794c.322-.158.788-.174.956.142q.334.625.537 1.303c.104.349-.252.672-.597.788-.519.174-.924.66-.924 1.255s.405 1.081.924 1.256c.346.116.701.438.597.787-.152.508-.36.997-.622 1.458-.173.304-.62.287-.934.13a1.328 1.328 0 0 0-1.8 1.745c.148.317.153.766-.158.929a7 7 0 0 1-1.301.528c-.338.1-.651-.23-.77-.561a1.34 1.34 0 0 0-1.25-.895c-.582 0-1.067.388-1.25.895-.12.33-.432.66-.77.561a7 7 0 0 1-1.49-.63c-.285-.162-.29-.564-.162-.865a1.328 1.328 0 0 0-1.726-1.748c-.303.124-.706.112-.863-.175a7 7 0 0 1-.582-1.398c-.1-.338.23-.65.562-.77a1.34 1.34 0 0 0 .896-1.247 1.34 1.34 0 0 0-.896-1.247c-.331-.12-.661-.432-.562-.77q.196-.661.514-1.271c.159-.303.59-.31.905-.173a1.329 1.329 0 0 0 1.724-1.798c-.15-.307-.164-.738.133-.91a7 7 0 0 1 1.45-.634c.348-.108.674.244.794.587m1.324 10.616a4.403 4.403 0 0 0 4.406-4.4 4.4 4.4 0 0 0-4.406-4.399 4.4 4.4 0 0 0-4.406 4.4 4.403 4.403 0 0 0 4.406 4.399"/>
    <path fill="currentColor" d="M13.579 9.06a.26.26 0 0 0 .244.178.26.26 0 0 0 .247-.183c.022-.067.084-.137.152-.118q.152.045.287.12c.062.033.057.123.025.186a.26.26 0 0 0 .346.35c.063-.03.154-.033.187.028q.064.12.105.255c.02.069-.05.132-.117.154a.26.26 0 0 0-.18.246c0 .116.079.211.18.245.067.023.137.086.117.154q-.046.15-.122.285c-.034.06-.12.056-.182.026a.26.26 0 0 0-.352.341c.03.062.03.15-.03.181q-.12.065-.255.104c-.066.02-.127-.045-.15-.11a.26.26 0 0 0-.244-.175.26.26 0 0 0-.244.175c-.023.065-.084.13-.15.11a1.4 1.4 0 0 1-.291-.124c-.056-.031-.057-.11-.032-.169a.26.26 0 0 0-.337-.341c-.059.024-.138.021-.168-.034a1.4 1.4 0 0 1-.114-.274c-.02-.066.045-.127.11-.15a.26.26 0 0 0 .175-.245.26.26 0 0 0-.175-.243c-.065-.024-.13-.084-.11-.15q.04-.13.1-.25c.031-.059.116-.06.177-.033a.26.26 0 0 0 .336-.352c-.029-.06-.031-.144.027-.178q.132-.077.283-.123c.068-.022.132.047.155.114m.256 1.913a.7.7 0 0 0 .667-.972.698.698 0 1 0-.667.972M9.18 9.968a.26.26 0 0 0 .244.178.26.26 0 0 0 .246-.183c.023-.068.085-.138.153-.118q.152.044.287.119c.062.034.057.124.025.187a.259.259 0 0 0 .346.35c.063-.03.154-.034.186.029q.065.12.105.254c.02.068-.049.131-.116.154a.26.26 0 0 0-.18.245c0 .117.079.212.18.246.067.023.137.086.116.154q-.045.15-.12.285c-.035.06-.122.056-.183.026a.259.259 0 0 0-.352.34c.03.063.03.15-.03.182q-.12.064-.255.103c-.066.02-.127-.045-.15-.11a.26.26 0 0 0-.244-.174.26.26 0 0 0-.244.175c-.023.064-.085.13-.15.11a1.4 1.4 0 0 1-.292-.124c-.055-.031-.056-.11-.031-.169a.259.259 0 0 0-.337-.341c-.06.024-.138.02-.169-.035a1.4 1.4 0 0 1-.113-.273c-.02-.066.045-.127.11-.15a.26.26 0 0 0 .174-.245.26.26 0 0 0-.174-.244c-.065-.023-.13-.084-.11-.15q.04-.13.1-.248c.031-.06.116-.06.177-.034a.26.26 0 0 0 .336-.352c-.029-.06-.032-.144.026-.177a1.4 1.4 0 0 1 .283-.125c.069-.02.132.048.156.115m.256 1.912a.698.698 0 1 0 .048-1.396.698.698 0 0 0-.048 1.396m1.07 1.23a.26.26 0 0 0 .245.178.26.26 0 0 0 .246-.183c.022-.068.084-.137.152-.118q.153.044.288.12c.06.033.057.123.024.186a.26.26 0 0 0 .346.35c.063-.03.154-.033.187.028q.064.12.105.255c.02.069-.05.131-.117.155a.26.26 0 0 0-.18.245.26.26 0 0 0 .18.245c.068.023.137.086.117.154q-.045.15-.122.285c-.033.06-.12.056-.182.026a.259.259 0 0 0-.351.341c.029.062.03.15-.031.181a1.4 1.4 0 0 1-.255.104c-.066.02-.126-.045-.15-.11a.26.26 0 0 0-.244-.175.26.26 0 0 0-.244.175c-.023.065-.084.13-.15.11a1.4 1.4 0 0 1-.291-.124c-.056-.031-.057-.11-.032-.169a.259.259 0 0 0-.337-.341c-.059.024-.137.021-.168-.035a1.4 1.4 0 0 1-.114-.273c-.019-.066.045-.127.11-.15a.26.26 0 0 0 .175-.244.26.26 0 0 0-.175-.245c-.065-.023-.129-.083-.11-.15q.04-.129.1-.248c.031-.06.116-.06.177-.034a.26.26 0 0 0 .337-.351c-.03-.06-.032-.145.026-.178q.135-.079.283-.124c.068-.021.132.047.155.114m.256 1.913a.7.7 0 0 0 .668-.971.7.7 0 0 0-1.146-.213.698.698 0 0 0 .478 1.184m1.541-4.415-1.292.28-.03-.137 1.292-.28zm-2.173 2.337-.174-.349.125-.062.175.349zm2.841-1.455-1.29 1.676-.112-.085 1.292-1.676z"/>

        </>
      ) : (
        <>
          
    <path fill="#0B8BB1" d="M10.68 5.79c.179.513.664.91 1.254.91.6 0 1.09-.412 1.261-.936.113-.346.432-.704.782-.604a7 7 0 0 1 1.47.607c.314.173.292.638.128.957a1.327 1.327 0 0 0 1.77 1.794c.322-.158.788-.174.956.142q.334.625.537 1.303c.105.349-.251.672-.596.788-.52.174-.924.66-.924 1.255s.405 1.081.924 1.256c.345.116.7.438.596.787-.152.508-.36.997-.621 1.458-.173.304-.621.287-.935.13a1.328 1.328 0 0 0-1.8 1.745c.149.317.153.766-.157.929a7 7 0 0 1-1.302.528c-.338.1-.651-.23-.77-.561a1.34 1.34 0 0 0-1.25-.895c-.581 0-1.066.388-1.249.895-.12.33-.433.66-.77.561a7 7 0 0 1-1.49-.63c-.285-.162-.291-.564-.163-.865a1.328 1.328 0 0 0-1.725-1.748c-.303.124-.706.112-.863-.175a7 7 0 0 1-.582-1.398c-.1-.338.23-.65.562-.77a1.34 1.34 0 0 0 .896-1.247 1.34 1.34 0 0 0-.896-1.247c-.332-.12-.662-.432-.562-.77q.196-.661.514-1.271c.158-.303.59-.31.904-.173a1.329 1.329 0 0 0 1.724-1.798c-.15-.307-.163-.738.133-.91a7 7 0 0 1 1.45-.634c.348-.108.675.244.794.587m1.324 10.616a4.403 4.403 0 0 0 4.405-4.4 4.4 4.4 0 0 0-4.405-4.399 4.4 4.4 0 0 0-4.406 4.4 4.4 4.4 0 0 0 4.406 4.399"/>
    <path fill="#888" d="M13.578 9.06a.26.26 0 0 0 .245.178.26.26 0 0 0 .246-.183c.022-.067.085-.137.153-.118q.151.045.287.12c.061.033.057.123.025.186a.259.259 0 0 0 .346.35c.063-.03.153-.033.186.028q.065.12.105.255c.02.069-.05.132-.116.154a.26.26 0 0 0-.18.246.26.26 0 0 0 .18.245c.067.023.137.086.116.154q-.046.15-.121.285c-.034.06-.121.056-.183.026a.26.26 0 0 0-.351.341c.029.062.03.15-.031.181a1.4 1.4 0 0 1-.254.104c-.066.02-.127-.045-.15-.11a.26.26 0 0 0-.244-.175.26.26 0 0 0-.244.175c-.023.065-.085.13-.15.11a1.4 1.4 0 0 1-.292-.124c-.055-.031-.056-.11-.031-.169a.26.26 0 0 0-.337-.341c-.06.024-.138.021-.169-.034a1.4 1.4 0 0 1-.113-.274c-.02-.066.045-.127.11-.15a.26.26 0 0 0 .174-.245.26.26 0 0 0-.175-.243c-.064-.024-.129-.084-.11-.15q.04-.13.101-.25c.03-.059.116-.06.177-.033a.26.26 0 0 0 .336-.352c-.03-.06-.032-.144.026-.178a1.4 1.4 0 0 1 .283-.123c.068-.022.132.047.155.114m.256 1.913a.7.7 0 0 0 .668-.972.698.698 0 1 0-.668.972M9.18 9.968a.26.26 0 0 0 .245.178.26.26 0 0 0 .246-.183c.022-.068.084-.138.153-.118q.151.044.287.119c.061.034.057.124.025.187a.259.259 0 0 0 .345.35c.063-.03.154-.034.187.029q.064.12.105.254c.02.068-.05.131-.117.154a.26.26 0 0 0-.18.245c0 .117.08.212.18.246.068.023.137.086.117.154q-.045.15-.121.285c-.034.06-.122.056-.183.026a.259.259 0 0 0-.351.34c.029.063.03.15-.03.182q-.122.064-.255.103c-.066.02-.127-.045-.15-.11a.26.26 0 0 0-.245-.174.26.26 0 0 0-.244.175c-.023.064-.084.13-.15.11a1.4 1.4 0 0 1-.291-.124c-.056-.031-.057-.11-.032-.169a.259.259 0 0 0-.337-.341c-.059.024-.137.02-.168-.035a1.4 1.4 0 0 1-.114-.273c-.019-.066.045-.127.11-.15a.26.26 0 0 0 .175-.245.26.26 0 0 0-.175-.244c-.065-.023-.129-.084-.11-.15q.04-.13.1-.248c.032-.06.116-.06.177-.034a.26.26 0 0 0 .337-.352c-.03-.06-.032-.144.026-.177a1.4 1.4 0 0 1 .283-.125c.068-.02.132.048.155.115m.256 1.912a.698.698 0 1 0 .049-1.396.698.698 0 0 0-.049 1.396m1.07 1.23a.26.26 0 0 0 .245.178.26.26 0 0 0 .246-.183c.023-.068.085-.137.153-.118q.152.044.287.12c.061.033.057.123.025.186a.26.26 0 0 0 .346.35c.063-.03.154-.033.186.028q.065.12.105.255c.02.069-.049.131-.116.155a.26.26 0 0 0-.18.245.26.26 0 0 0 .18.245c.067.023.137.086.116.154q-.045.15-.121.285c-.034.06-.121.056-.183.026a.259.259 0 0 0-.351.341c.03.062.03.15-.03.181a1.4 1.4 0 0 1-.255.104c-.066.02-.127-.045-.15-.11a.26.26 0 0 0-.244-.175.26.26 0 0 0-.244.175c-.023.065-.085.13-.15.11a1.4 1.4 0 0 1-.292-.124c-.055-.031-.056-.11-.031-.169a.259.259 0 0 0-.337-.341c-.06.024-.138.021-.169-.035a1.4 1.4 0 0 1-.113-.273c-.02-.066.045-.127.11-.15a.26.26 0 0 0 .174-.244.26.26 0 0 0-.174-.245c-.065-.023-.13-.083-.11-.15q.038-.129.1-.248c.031-.06.116-.06.177-.034a.26.26 0 0 0 .336-.351c-.029-.06-.032-.145.026-.178q.135-.079.283-.124c.069-.021.132.047.156.114m.257 1.913a.7.7 0 0 0 .274-1.35.698.698 0 1 0-.274 1.35"/>
    <path fill="#0B8BB1" d="m12.302 10.608-1.291.28-.03-.137 1.292-.28zm-2.172 2.337-.175-.349.125-.062.175.349zm2.84-1.455-1.29 1.676-.111-.085 1.291-1.676z"/>

        </>
      )}
    </BaseIcon>
));

IconDext.displayName = 'Dext';

export default IconDext;
