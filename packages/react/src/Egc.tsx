
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconEgc = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .428a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m-5.062-8.6a5.32 5.32 0 0 1 2.383-2.874c1.116-.639 2.293-.857 3.553-.606a.635.635 0 1 1 1.17.382c.61.144 1.418.69 1.904 1.229.202 0 .424.038.591.212a.68.68 0 0 1 .175.6v.353a.64.64 0 0 1 .24-.32.64.64 0 0 1 .47-.116 6.5 6.5 0 0 0-2.587-2.542 6.148 6.148 0 0 0-8.717 3.527.635.635 0 0 1 .818.155m7.205 2.939v-.323a.567.567 0 1 0-.429-.004v.103l-.058.081-1.442 1.267V13.6l.643-.647v-1.328l.857-.983V7.327a.567.567 0 1 0-.428-.007v3.162l-.429.492V9.87a.566.566 0 1 0-.428.002v2.904l-.215.216v-1.605l-.642-.738V8.16a.566.566 0 1 0-.429-.003v2.654l.643.737v1.444l-1.072-1.082v-1.602a.567.567 0 1 0-.428.006v1.772l1.5 1.514v3.971h.428v-2.68zm-.91-6.587a.34.34 0 1 0 .56.382.34.34 0 0 0-.56-.382m-.87 2.551a.338.338 0 1 0 .553.39.338.338 0 0 0-.553-.39m-1.286-1.714a.339.339 0 1 0 .563.377.339.339 0 0 0-.563-.377m-.87 2.154a.34.34 0 1 0 .561.381.34.34 0 0 0-.56-.381m3.444 2.56a.34.34 0 1 0 .563.377.34.34 0 0 0-.563-.377m-2.025-4.523a.27.27 0 0 0-.044-.147.23.23 0 0 0-.225-.121.268.268 0 1 0 .269.268M6.44 10.42a.233.233 0 1 0-.02.466.233.233 0 0 0 .02-.466m-.13 2.01a.235.235 0 0 1 .332.06.234.234 0 1 1-.332-.06m.335-.409a.65.65 0 0 0-.577.083.64.64 0 0 0-.234.313 6.2 6.2 0 0 1 .07-1.42.636.636 0 0 0 .78.246l-.044-.061a.568.568 0 1 1 .315-.295l.505.684h1.213l-.53-.497v-.753a.567.567 0 1 1 .429-.004v.572l.428.402V8.703a.567.567 0 1 1 .429-.013v3.013l2.143 2.371v3.497h-.429v-.95l-.973.899-.29-.315 1.263-1.167v-.54l-1.026-.927H8.086l-1.268-1.229a5.34 5.34 0 0 0 3.25 3.626l-.26.26.355.367.445-.413c.101.028.186.034.274.04.062.004.124.01.196.021v.376h.555v-.305q.03.004.06.002h.055v.303h.51v-.305a.2.2 0 0 0 .069-.01.3.3 0 0 1 .066-.011v.326h.51v-.375c.123-.024.38-.076.499-.109l.424.345.335-.416-.098-.073c.39-.187.917-.506 1.519-.977 1.208-1.2 1.588-2.674 1.59-2.688.202-.112.377-.28.416-.565a.65.65 0 0 0-.302-.619v-.144c0-.368-.003-.648-.079-1.007l.442-.363v-.293a.5.5 0 0 0 .2-.18c.215.638.26 1.17.26 1.843.001.602-.086 1.2-.258 1.777h.001l-.005.013-.01.03c-1.596 4.487-5.771 4.387-6.644 4.276a6.15 6.15 0 0 1-5.296-5.143.635.635 0 0 0 .786.26l-.055-.053a.567.567 0 1 1 .322-.286l1.309 1.27H9.67l-.72-.697a.567.567 0 1 1 .316-.29l1.08 1.046.797.72v-.682L9.12 12H7.243l-.546-.741a5 5 0 0 0-.051.741zm2.105.624a.268.268 0 1 0 0 .537.268.268 0 0 0 0-.537m1.592-3.074a.269.269 0 1 1 .297.448.269.269 0 0 1-.297-.448M9.046 7.95a.268.268 0 1 1 .317.433.268.268 0 0 1-.317-.433M8.35 9.523a.268.268 0 1 0 .002.536.268.268 0 0 0-.002-.536m-.279.084a.34.34 0 1 0 .565.377.34.34 0 0 0-.565-.377m-1.819 1.328a.339.339 0 1 0 .387-.556.339.339 0 0 0-.387.556m2.665-2.952a.34.34 0 1 0 .565.376.34.34 0 0 0-.565-.376m-.353 5.211c.055.037.12.057.187.057v.001a.34.34 0 0 0 .175-.631.34.34 0 0 0-.362.573m-2.312-.29a.34.34 0 0 0 .189.057v.002a.339.339 0 0 0 .282-.529.339.339 0 1 0-.47.47m10.688.341a.567.567 0 1 0-.486-.276l-1.119 1.145h-.664l.262-.252 1.354-1.22v-.999l1.286-1.07v-.286a.567.567 0 1 0-.706-.21.6.6 0 0 0 .277.211v.085l-.857.713V9.584a.566.566 0 1 0-.429-.01v2.878l-.857.772v-2.08a.566.566 0 1 0-.428.006v2.464l-.581.557-1.562 1.414v1.986h.428v-.94l.95.782.273-.331-1.223-1.006v-.3l1.362-1.233h1.296l1.266-1.298zm0-.906a.34.34 0 1 1 0 .679.34.34 0 0 1 0-.679m.121-2.758a.34.34 0 1 0 .561.382.34.34 0 0 0-.56-.382m-1.257-.713a.338.338 0 1 0 .555.386.338.338 0 0 0-.555-.386m-1.306 1.57a.338.338 0 1 0 .573.363.34.34 0 0 0-.572-.363" fillRule="evenodd" clipRule="evenodd"/>

        </>
      ) : (
        <>
          
    <path fill="#008255" d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .428a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m-5.062-8.6A5.32 5.32 0 0 1 9.32 7.383c1.115-.639 2.293-.857 3.553-.606a.636.636 0 1 1 1.169.382c.61.144 1.418.69 1.905 1.229.201 0 .424.038.59.212a.68.68 0 0 1 .176.6v.353a.64.64 0 0 1 .24-.32.64.64 0 0 1 .469-.116 6.5 6.5 0 0 0-2.587-2.542 6.148 6.148 0 0 0-8.717 3.527.635.635 0 0 1 .819.155m7.205 2.939v-.323a.567.567 0 1 0-.429-.004v.103l-.059.081-1.441 1.267v-.719l.643-.647v-1.328l.857-.983V7.327a.567.567 0 1 0-.429-.007v3.162l-.428.492V9.87a.566.566 0 1 0-.429.002v2.904l-.214.216v-1.605l-.643-.738V8.16a.566.566 0 1 0-.428-.003v2.654l.642.737v1.444l-1.071-1.082v-1.602a.567.567 0 1 0-.429.006v1.772l1.5 1.514v3.971h.429v-2.68zm-.911-6.587a.34.34 0 0 0 .092.473.338.338 0 0 0 .521-.35.34.34 0 0 0-.613-.123m-.87 2.551a.34.34 0 0 0 .089.477.338.338 0 1 0-.089-.477m-1.285-1.714a.339.339 0 1 0 .562.377.339.339 0 0 0-.562-.377m-.87 2.154a.34.34 0 1 0 .56.381.34.34 0 0 0-.56-.381m3.443 2.56a.34.34 0 1 0 .564.377.34.34 0 0 0-.564-.377m-2.025-4.523a.27.27 0 0 0-.044-.147.23.23 0 0 0-.224-.121.268.268 0 1 0 .268.268M6.44 10.42a.233.233 0 1 0-.02.466.233.233 0 0 0 .02-.466m-.13 2.01a.235.235 0 0 1 .331.06.234.234 0 1 1-.331-.06m.335-.409a.65.65 0 0 0-.578.083.64.64 0 0 0-.234.313 6.2 6.2 0 0 1 .07-1.42.636.636 0 0 0 .781.246l-.044-.061a.567.567 0 1 1 .315-.295l.504.684h1.213l-.53-.497v-.753a.567.567 0 1 1 .43-.004v.572l.428.402V8.703a.567.567 0 1 1 .428-.013v3.013l2.143 2.371v3.497h-.428v-.95l-.973.899-.291-.315 1.264-1.167v-.54l-1.026-.927H8.084l-1.267-1.229a5.34 5.34 0 0 0 3.25 3.626l-.26.26.355.367.444-.413c.102.028.186.034.275.04q.09.005.196.021v.376h.554v-.305q.03.004.06.002h.056v.303h.51v-.305a.2.2 0 0 0 .068-.01.3.3 0 0 1 .067-.011v.326h.51v-.375c.122-.024.379-.076.498-.109l.424.345.336-.416-.098-.073c.39-.187.916-.506 1.518-.977 1.208-1.2 1.588-2.674 1.591-2.688.202-.112.377-.28.415-.565a.65.65 0 0 0-.302-.619v-.144c0-.368-.003-.648-.078-1.007l.441-.363v-.293a.5.5 0 0 0 .2-.18c.216.638.261 1.17.26 1.843.002.602-.085 1.2-.257 1.777l-.004.013-.01.03c-1.597 4.487-5.772 4.387-6.645 4.276a6.15 6.15 0 0 1-5.296-5.143.635.635 0 0 0 .786.26l-.054-.053a.567.567 0 1 1 .321-.286l1.31 1.27H9.67l-.72-.697a.567.567 0 1 1 .316-.29l1.08 1.046.797.72v-.682L9.119 12H7.243l-.546-.741a5 5 0 0 0-.052.741zm2.105.624a.268.268 0 1 0 0 .537.268.268 0 0 0 0-.537m1.591-3.074a.269.269 0 1 1 .297.448.269.269 0 0 1-.297-.448M9.046 7.95a.268.268 0 1 1 .317.433.268.268 0 0 1-.317-.433m-.698 1.573a.268.268 0 1 0 .002.536.268.268 0 0 0-.002-.536m-.278.084a.34.34 0 1 0 .564.377.34.34 0 0 0-.564-.377m-1.82 1.328a.339.339 0 1 0 .388-.556.339.339 0 0 0-.387.556m2.665-2.952a.34.34 0 1 0 .565.376.34.34 0 0 0-.565-.376m-.353 5.211q.086.056.188.057v.001a.34.34 0 0 0 .175-.631.34.34 0 0 0-.363.573m-2.311-.29a.34.34 0 0 0 .188.057v.002a.339.339 0 0 0 .282-.529.339.339 0 1 0-.47.47m10.688.341a.567.567 0 1 0-.487-.276l-1.118 1.145h-.665l.262-.252 1.354-1.22v-.999l1.286-1.07v-.286a.568.568 0 1 0-.706-.21.6.6 0 0 0 .278.211v.085l-.858.713V9.584a.566.566 0 1 0-.428-.01v2.878l-.857.772v-2.08a.566.566 0 1 0-.429.006v2.464l-.581.557-1.562 1.414v1.986h.429v-.94l.95.782.273-.331-1.223-1.006v-.3l1.362-1.233h1.295l1.267-1.298zm0-.906a.34.34 0 1 1 0 .679.34.34 0 0 1 0-.679m.12-2.758a.34.34 0 0 0 .093.473.34.34 0 0 0 .472-.096.34.34 0 0 0-.564-.377m-1.256-.713a.338.338 0 1 0 .555.386.338.338 0 0 0-.555-.386m-1.306 1.57" fillRule="evenodd" clipRule="evenodd"/>

        </>
      )}
    </BaseIcon>
));

IconEgc.displayName = 'Egc';

export default IconEgc;
