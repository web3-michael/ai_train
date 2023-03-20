import {
  Laptop,
  Link,
  type Icon as LucideIcon,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  link: Link,

  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  mercury: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="312px"
      height="239px"
      viewBox="0 0 612 539"
      version="1.0"
      stroke="#09342e"
      id="svg1339"
      {...props}
    >
      <defs id="defs1342" />
      <path
        d="M 14.456625,0.0044630784 C -0.25689377,3.3420931 -1.7502908,21.255463 1.3162792,33.468863 C 3.6956699,51.279573 17.106686,68.926373 9.0218199,87.057883 C -3.6356168,112.64337 -2.2623188,143.46795 10.624403,168.67822 C 23.17246,195.43429 47.209701,216.3602 75.297732,225.33506 C 87.612972,231.81909 80.686322,249.48487 66.955952,245.1411 C 54.081552,245.46272 35.84791,244.17577 29.73708,258.33467 C 23.529089,274.04901 42.140506,282.8172 55.017132,283.33294 C 68.829742,282.31642 87.049612,283.86994 81.760692,302.90336 C 82.287312,314.58496 81.709262,333.56426 96.680419,335.91366 C 110.56671,339.06466 118.01385,325.29256 117.81069,313.21016 C 119.06239,302.02256 114.1895,280.43597 132.47949,283.87235 C 145.95367,283.76225 163.96136,283.03934 170.74189,269.28898 C 175.49053,253.64417 158.14737,244.65819 144.87809,245.39849 C 135.82885,244.3699 116.05773,248.83439 118.48618,233.83475 C 124.3543,219.22433 144.67174,221.31388 154.7829,210.22146 C 189.76836,185.08265 210.67872,136.27985 194.08514,94.726473 C 186.69175,81.975503 187.22425,66.898443 193.13303,53.728113 C 197.47342,38.907583 204.60459,21.328723 195.83018,6.7943631 C 186.16079,-7.9576469 168.7184,4.8689031 166.19868,18.090233 C 162.34593,29.740993 161.58023,50.222533 144.55628,38.384783 C 117.21546,25.941423 84.822872,25.290213 57.350792,37.717933 C 47.696329,42.956483 37.027609,43.782883 37.322425,29.779723 C 34.056703,18.278763 29.598244,-0.46608692 14.456625,0.0044630784 z M 111.03847,63.839023 C 142.71746,68.533963 166.26701,99.940933 163.45116,131.53816 C 162.471,159.34504 140.65041,182.99938 114.13875,189.50706 C 90.406072,196.3156 64.088442,184.30613 49.164372,165.66873 C 25.576527,135.98382 36.237279,86.693763 70.553582,70.094533 C 82.926732,63.413093 97.277729,61.986873 111.03847,63.839023 z "
        id="path1374"
      />
    </svg>
  ),
  logoUp: (props: LucideProps) => (
    <svg
      width="312px"
      height="239px"
      viewBox="0 0 612 539"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>path3194</title>
      <defs>
        <path
          d="M305.399184,82 L100,459 L539,457.101084 L305.399184,82 Z M305.851046,166 L453,407.396299 L170,413 L305.851046,166 Z"
          id="path-1"
        ></path>
        <filter
          x="-4.7%"
          y="-4.8%"
          width="105.7%"
          height="105.9%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter
          x="-6.2%"
          y="-6.5%"
          width="108.7%"
          height="109.4%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feMorphology
            radius="4.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dx="-13"
            dy="-9"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feComposite
            in="shadowOffsetOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowOffsetOuter1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0.949019608   0 0 0 0 0.494117647   0 0 0 0 0.388235294  0 0 0 1 0"
            type="matrix"
            in="shadowOffsetOuter1"
          ></feColorMatrix>
        </filter>
        <pattern
          id="pattern-4"
          patternUnits="objectBoundingBox"
          y="-8.22281167%"
          height="108.222812%"
          width="100%"
        >
          <use
            xlinkHref="#image-5"
            transform="scale(0.857421875,0.857421875)"
          ></use>
        </pattern>
        <image id="image-5" width="512" height="512"></image>
        <filter
          x="-6.7%"
          y="-7.1%"
          width="109.8%"
          height="110.7%"
          filterUnits="objectBoundingBox"
          id="filter-6"
        >
          <feMorphology
            radius="3"
            operator="erode"
            in="SourceAlpha"
            result="shadowSpreadInner1"
          ></feMorphology>
          <feGaussianBlur
            stdDeviation="3"
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
          ></feGaussianBlur>
          <feOffset
            dx="8"
            dy="9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          ></feOffset>
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          ></feComposite>
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          ></feColorMatrix>
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin="round"
      >
        <g id="path3194" filter="url(#filter-2)">
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-3)"
            xlinkHref="#path-1"
          ></use>
          <use
            fill="url(#pattern-4)"
            fill-rule="evenodd"
            xlinkHref="#path-1"
          ></use>
          <use
            fill="black"
            fill-opacity="1"
            filter="url(#filter-6)"
            xlinkHref="#path-1"
          ></use>
          <use stroke="#000000" stroke-width="9" xlinkHref="#path-1"></use>
        </g>
      </g>
    </svg>
  ),
}
