import React from 'react';
import './bg-pattern.css';

export type BgPatternColour =
  | 'mustard'
  | 'white'
  | 'blue-steel-300'
  | 'pink-200'
  | 'olive'
  | 'black'
  | 'pink'
  | 'dark-grey-300'
  | 'default';

export type BgPatternType = 'website-bg' | 'default' | 'paw-prints';

export interface BgPatternProps {
  colour?: BgPatternColour;
  type?: BgPatternType;
  className?: string;
}

const WebsiteBackgroundPattern: React.FC = () => (
  <svg
    className="ppc-bg-pattern__svg"
    viewBox="0 0 1472 1473"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M655.852 1055.64L622.739 1055.75L622.855 1022.64L596.738 1022.73L596.621 1056.31L563.041 1056.43L562.95 1082.54L596.063 1082.43L595.948 1115.54L622.065 1115.45L622.182 1081.87L655.761 1081.75L655.852 1055.64Z" fill="currentColor" />
    <path d="M877.227 171.823L844.115 171.938L844.23 138.826L818.113 138.917L817.996 172.496L784.417 172.613L784.326 198.73L817.438 198.614L817.323 231.727L843.44 231.636L843.557 198.057L877.136 197.94L877.227 171.823Z" fill="currentColor" />
    <path d="M1180.82 723.78L1161.28 723.848L1161.35 704.305L1145.93 704.359L1145.86 724.177L1126.05 724.246L1125.99 739.661L1145.54 739.593L1145.47 759.136L1160.88 759.082L1160.95 739.264L1180.77 739.194L1180.82 723.78Z" fill="currentColor" />
    <path d="M332.75 380.062H239.312L286.031 332.625L332.75 380.062Z" fill="currentColor" />
    <path d="M1368.75 1153.62H1275.31L1322.03 1201.06L1368.75 1153.62Z" fill="currentColor" />
    <path d="M-19.3125 424.356L69.3554 335.688L70.0375 425.038L-19.3125 424.356Z" fill="currentColor" />
    <path d="M642.312 63.293L730.98 -25.3749L731.662 63.9751L642.312 63.293Z" fill="currentColor" />
    <rect x="66.9375" y="551.312" width="53.1875" height="53.1875" fill="currentColor" />
    <rect x="815.875" y="902.062" width="35.9375" height="35.9375" fill="currentColor" />
    <rect x="1238.31" y="366.625" width="35.9375" height="35.9375" fill="currentColor" />
    <rect
      x="86.5991"
      y="820.125"
      width="185.157"
      height="52.9802"
      transform="rotate(45 86.5991 820.125)"
      fill="currentColor"
    />
    <rect
      x="961.238"
      y="549.013"
      width="185.157"
      height="52.9802"
      transform="rotate(-135 961.238 549.013)"
      fill="currentColor"
    />
    <circle cx="182.656" cy="155.281" r="49.5938" fill="currentColor" />
    <circle cx="1171.91" cy="870.219" r="49.5938" fill="currentColor" />
    <circle cx="1138.91" cy="356.219" r="47.0938" stroke="currentColor" strokeWidth="5" />
    <circle cx="0.09375" cy="1081.03" r="33.7812" fill="currentColor" />
    <circle cx="550.094" cy="741.406" r="33.7812" fill="currentColor" />
    <circle cx="1238.5" cy="559.938" r="24.8125" stroke="currentColor" strokeWidth="5" />
    <circle cx="983.75" cy="1334.06" r="93.4375" fill="currentColor" />
    <path d="M315.456 715.018C311.184 719.29 306.113 722.678 300.532 724.99C294.951 727.302 288.97 728.491 282.929 728.491C276.888 728.491 270.906 727.301 265.325 724.99C259.744 722.678 254.673 719.29 250.402 715.018C246.13 710.747 242.742 705.676 240.43 700.095C238.119 694.514 236.929 688.532 236.929 682.491C236.929 676.451 238.119 670.469 240.43 664.888C242.742 659.307 246.13 654.236 250.402 649.964L282.929 682.491L315.456 715.018Z" fill="currentColor" />
    <path d="M911.893 1082.21C907.622 1086.48 902.551 1089.87 896.97 1092.18C891.389 1094.49 885.407 1095.68 879.366 1095.68C873.325 1095.68 867.344 1094.49 861.763 1092.18C856.182 1089.87 851.111 1086.48 846.839 1082.21C842.568 1077.93 839.179 1072.86 836.868 1067.28C834.556 1061.7 833.366 1055.72 833.366 1049.68C833.366 1043.64 834.556 1037.66 836.868 1032.08C839.179 1026.49 842.568 1021.42 846.839 1017.15L879.366 1049.68L911.893 1082.21Z" fill="currentColor" />
    <path d="M1140.84 52.2057C1145.11 56.4772 1150.18 59.8656 1155.76 62.1773C1161.34 64.489 1167.33 65.6788 1173.37 65.6788C1179.41 65.6788 1185.39 64.489 1190.97 62.1773C1196.55 59.8656 1201.62 56.4772 1205.89 52.2057C1210.16 47.9342 1213.55 42.8632 1215.86 37.2823C1218.18 31.7013 1219.37 25.7196 1219.37 19.6788C1219.37 13.638 1218.18 7.65636 1215.86 2.07538C1213.55 -3.5056 1210.16 -8.5766 1205.89 -12.8481L1173.37 19.6788L1140.84 52.2057Z" fill="currentColor" />
    <rect x="1071.31" y="1084.62" width="47.4375" height="90.5625" fill="currentColor" />
    <rect
      x="714.177"
      y="820.125"
      width="24.5769"
      height="120.459"
      transform="rotate(45 714.177 820.125)"
      fill="currentColor"
    />
    <rect x="1298.88" y="114.312" width="47.4375" height="90.5625" fill="currentColor" />
    <path d="M97.3078 1260.91L179.611 1178.61V1260.91H97.3078Z" fill="currentColor" />
    <path d="M595.541 1268.62L629.248 1302.33L595.541 1302.33L595.541 1268.62Z" fill="currentColor" />
    <circle cx="562.156" cy="424.094" r="139.094" stroke="currentColor" strokeWidth="5" />
    <circle cx="1122.78" cy="987.594" r="139.094" stroke="currentColor" strokeWidth="5" />
    <circle cx="1345.59" cy="731.719" r="47.0938" stroke="currentColor" strokeWidth="5" />
    <circle cx="721" cy="285.375" r="263.438" stroke="currentColor" strokeWidth="5" />
    <circle cx="0.09375" cy="1091.09" r="380.594" stroke="currentColor" strokeWidth="5" />
    <circle cx="0.09375" cy="-380.906" r="380.594" stroke="currentColor" strokeWidth="5" />
    <circle cx="1472.09" cy="1091.09" r="380.594" stroke="currentColor" strokeWidth="5" />
    <circle cx="713.812" cy="1807.69" r="428.75" stroke="currentColor" strokeWidth="5" />
    <path d="M1135.84 424.812C1094.78 620.221 921.431 766.938 713.812 766.938C615 766.938 523.951 733.704 451.229 677.806L454.796 674.239C526.587 729.248 616.382 761.938 713.812 761.938C918.657 761.938 1089.75 617.439 1130.73 424.812H1135.84ZM713.812 -95.5625C938.904 -95.5625 1123.72 76.8876 1143.34 296.875H1138.32C1118.71 79.653 936.14 -90.5625 713.812 -90.5625C478.401 -90.5625 287.562 100.276 287.562 335.688C287.562 404.311 303.781 469.147 332.592 526.572L328.867 530.297C299.251 471.831 282.562 405.709 282.562 335.688C282.562 97.5147 475.64 -95.5625 713.812 -95.5625Z" fill="currentColor" />
    <circle cx="1472.09" cy="-380.906" r="380.594" stroke="currentColor" strokeWidth="5" />
  </svg>
);

export const BgPattern: React.FC<BgPatternProps> = ({
  colour = 'mustard',
  type = 'website-bg',
  className,
}) => {
  const classes = [
    'ppc-bg-pattern',
    `ppc-bg-pattern--type-${type}`,
    `ppc-bg-pattern--colour-${colour}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isWebsiteBackground = type === 'website-bg';
  const isDefaultTile = type === 'default';
  const isPawPrints = type === 'paw-prints';

  return (
    <div className={classes} aria-hidden="true">
      {isWebsiteBackground && <WebsiteBackgroundPattern />}
      {isDefaultTile && (
        <img
          className="ppc-bg-pattern__image"
          src="https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2F1fc74a31b2ff42638d74172ce5662da4?format=webp&width=800"
          alt=""
          loading="lazy"
        />
      )}
      {isPawPrints && (
        <img
          className="ppc-bg-pattern__image"
          src="https://cdn.builder.io/api/v1/image/assets%2F5f6a7f98f7ba445ebe46376b230c25b0%2Fb20255f6d9974044acbbbd5aaeb05030?format=webp&width=800"
          alt=""
          loading="lazy"
        />
      )}
    </div>
  );
};

export default BgPattern;
