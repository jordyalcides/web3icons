import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTAROT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.623 13.697a.92.92 0 0 0-.484.669c-.03.18.034.416.085.583q.26.902.429 1.534c.047.197.081.489 0 .686-.129.274-.394.518-.711.527-.19 0-.373-.022-.558-.069-.445-.12-.9-.248-1.375-.385-.395-.12-.806-.189-1.127.137a2 2 0 0 0-.258.355l-.184.343q-.33.635-.72 1.235-.296.443-.797.398a.75.75 0 0 1-.506-.231 2.8 2.8 0 0 1-.39-.553l-.664-1.2a3 3 0 0 0-.163-.257c-.283-.386-.737-.373-1.144-.253q-.706.212-1.419.407c-.12.03-.248.047-.373.064a.82.82 0 0 1-.87-.424.8.8 0 0 1-.085-.579c.038-.2.085-.385.128-.56l.382-1.33a.9.9 0 0 0-.138-.84c-.085-.11-.265-.244-.535-.39l-1.055-.578a4 4 0 0 1-.535-.364c-.275-.219-.322-.6-.223-.926.081-.249.351-.437.583-.57q.584-.34 1.225-.686c.19-.09.365-.212.515-.36.257-.325.24-.63.12-1.028a29 29 0 0 1-.437-1.56 1.6 1.6 0 0 1-.048-.378q0-.353.335-.642c.321-.262.758-.163 1.114-.06l1.26.36c.407.12.797.162 1.101-.133q.134-.128.275-.39c.283-.523.557-1.012.831-1.47q.064-.101.18-.227a.84.84 0 0 1 1.307.103c.125.17.236.355.343.544l.652 1.174c.252.441.643.587 1.174.429.489-.137.99-.283 1.5-.42.128-.039.266-.056.399-.073a.81.81 0 0 1 .814.385c.158.24.141.558.077.815a49 49 0 0 1-.429 1.543q-.051.154-.077.334c-.068.386.129.729.472.917l1.208.673c.18.098.352.21.514.326q.43.3.365.814a.78.78 0 0 1-.309.544 4.4 4.4 0 0 1-.514.335zm-.467-.784a1.81 1.81 0 0 0-.849 2.152c.137.488.266.947.395 1.375q.039.144.06.3.002.032-.022.026a5 5 0 0 1-.501-.12l-.952-.279q-.37-.119-.758-.145c-.797-.009-1.346.411-1.715 1.092q-.387.714-.797 1.415l-.013.004a.03.03 0 0 1-.034-.017l-.077-.129q-.402-.72-.81-1.435A1.8 1.8 0 0 0 9 16.294q-.623.17-1.226.343a5 5 0 0 1-.54.129.026.026 0 0 1-.017-.03 55 55 0 0 1 .476-1.702l.017-.068c.03-.129.064-.257.064-.386a1.81 1.81 0 0 0-1.045-1.723q-.737-.41-1.466-.831a.03.03 0 0 1 .008-.043q.164-.103.313-.184l1.273-.716a1.77 1.77 0 0 0 .9-1.251c.052-.336.02-.679-.094-.999q-.226-.783-.442-1.569a.03.03 0 0 1 .022-.02h.013q.153.025.3.063l1.041.3q.579.174.874.18a1.77 1.77 0 0 0 1.312-.527 2.3 2.3 0 0 0 .36-.501q.414-.747.84-1.487a.03.03 0 0 1 .026 0l.008.004q.114.175.202.33l.634 1.14c.146.257.321.514.557.686a1.8 1.8 0 0 0 1.114.355q.442-.03.862-.171l.943-.279a5 5 0 0 1 .437-.094l.004.009v.008a2.4 2.4 0 0 1-.073.317q-.18.652-.373 1.303c-.201.694-.09 1.406.429 1.912q.224.212.737.488.625.34 1.217.686.064.039 0 .077c-.355.214-.72.416-1.08.617l-.467.257zm-2.083 2.126a4.354 4.354 0 0 0-3.099-7.414 4.337 4.337 0 0 0-4.328 4.362 4.354 4.354 0 0 0 4.358 4.342 4.35 4.35 0 0 0 3.069-1.286zm-2.074-3.566a1.35 1.35 0 0 1 1.303.013c.11.051.197.094.325 0l.026-.013c.073-.051.146-.099.184-.184.06-.137.017-.262-.111-.343a2.24 2.24 0 0 0-2.109-.094c-.188.094-.544.291-.578.518l-.013.06c-.013.077-.026.15-.026.223v2.314h.677a.18.18 0 0 0 .18-.18V11.83c0-.129 0-.292.142-.36zm-1.818-.257c-.081.231-.287.274-.501.231-.334-.068-.729-.042-1.029.12a.26.26 0 0 1-.248.013.7.7 0 0 1-.24-.201.244.244 0 0 1 .056-.343 2.22 2.22 0 0 1 1.723-.231c.2.042.317.197.24.41"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconTAROT.displayName = 'TAROT'