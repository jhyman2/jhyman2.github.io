import React    from 'react';
import ReactDOM from 'react-dom';

require('!style!css!sass!./header.scss');

export default class Header extends React.Component {

  render () {
    return (
      <div>
        <div id="header">
          <ul className="header-list">
            <li>Home</li>
            <li>Contact</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>About</li>
          </ul>
        </div>
        <div id="denver-parallax">

          <div id="parallax" className="parallax">

            <div className="group">
              <div id="sun" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <circle id="cSun" cy="45" cx="131" r="31"></circle>
                </svg>
              </div>

              <div id="mountain4" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 309.053,28.1408 C 305.60059,28.516599 302.50609,29.674135 300.36717,31.958715 298.5112,33.107179 296.17781,32.658324 295.72382,34.913675 294.14153,35.642869 293.46107,35.165129 291.64321,37.024255 288.0593,36.534452 286.16292,41.270958 284.1856,40.964111 283.05815,38.727029 280.96167,43.36017 278.83852,40.823124 274.51286,44.014932 270.08489,35.387496 265.61154,38.994006 260.48976,42.193497 254.34086,41.575881 249.38987,44.677762 248.33752,40.802476 242.85462,42.463837 240.00258,40.260361 237.27198,40.135725 235.23937,39.488262 233.38921,37.586862 225.46302,37.076398 219.22774,43.665587 211.86084,44.90371 205.70515,49.078511 197.7116,48.585726 190.61376,50.531997 182.54568,51.400309 174.13198,53.089278 165.70824,51.657608 161.42601,50.839622 158.95601,47.954021 156.42154,44.762951 152.42359,44.380458 150.82918,39.894901 146.43116,41.385958 142.05053,42.304319 138.67654,45.336536 133.90805,44.200008 128.59647,42.97281 124.04844,47.471522 118.34794,46.864335 112.16617,50.743044 104.78599,51.173332 98.449278,53.627621 92.547127,54.510361 84.411837,51.563405 87.299188,60.714385 87.299188,100.79093 87.299188,140.86748 87.299188,180.94403 33.084521,180.94403 -21.130145,180.94403 -75.344812,180.94403 -75.344812,192.12703 -75.344812,203.31003 -75.344812,214.49303 69.141498,214.48141 213.5852,214.42717 357.97285,214.31689 362.63707,212.87535 373.71844,217.85097 372.40989,210.43666 372.40246,155.7113 372.41748,100.88268 372.41689,46.228764 369.15049,46.168226 367.82846,43.32158 363.96744,43.073303 360.2135,40.131573 355.37035,41.524803 351.72576,40.118522 347.38607,37.190253 341.00858,39.381467 336.95133,35.897177 331.14475,33.239337 325.492,30.412738 318.94048,30.690867 315.78726,30.835801 312.21442,30.697782 310.92016,28.158105 310.29945,28.14135 309.66905,28.189348 309.053,28.1408 Z M 296.84893,33.225093 C 251.40478,55.66722 205.96064,78.109346 160.51649,100.55147 205.96064,78.109347 251.40478,55.66722 296.84893,33.225093 Z M 133.32989,43.899303 C 132.94789,43.874632 133.43708,43.993487 133.32989,43.899303 Z M 371.26968,45.864133 C 371.51121,46.092959 371.45981,45.857151 371.26968,45.864133 Z M 371.76345,46.011767 C 371.3161,46.028061 372.29572,46.165265 371.76345,46.011767 Z"></path>
                </svg>
              </div>

              <div id="mountain3" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 3.47036,35.3261 C 0.35093715,35.74466 -2.7934288,37.554263 -5.742942,39.416136 -9.7670273,41.656985 -14.682685,41.810612 -19.104518,43.355952 -20.640701,40.752462 -24.219143,41.722432 -26.27744,40.11971 -29.346916,41.051419 -31.45335,43.588098 -35.700994,42.371027 -40.235439,44.186095 -46.713504,43.853531 -51.312524,42.51175 -52.55866,40.143607 -56.596951,40.353648 -59.329128,39.557574 -64.733731,37.436066 -65.100708,40.836604 -69.737273,41.526848 -72.737614,39.987961 -75.927447,36.941626 -74.940664,43.49672 -76.404332,57.731567 -74.490424,71.162275 -75.081377,85.580691 -75.125328,128.51399 -75.08785,171.52872 -75.100307,214.49351 74.085025,214.49351 223.27036,214.49351 372.45569,214.49351 372.45569,172.36284 372.45569,130.23218 372.45569,88.101509 365.47323,87.221817 357.52302,89.963701 351.21805,86.553673 348.18528,83.941632 342.85672,80.822393 340.38821,79.659007 339.66506,73.469105 328.12535,73.845288 323.51064,70.372124 315.54777,66.048163 306.69945,62.965887 297.63233,63.75894 289.74152,59.598262 280.46145,55.820218 272.17555,61.36673 262.65572,64.547689 252.12666,63.022121 243.20245,59.537604 232.81568,57.832402 222.36154,55.17022 211.83831,56.582647 197.02497,56.92568 183.34582,49.995782 168.80063,48.98434 163.72288,48.629735 156.95158,46.386579 152.90762,50.532177 149.72707,50.298645 146.39383,53.807296 144.46865,53.346406 142.17101,48.494166 135.20261,54.109156 131.38854,50.672911 124.17149,47.207776 117.01162,52.638904 109.30704,51.517113 101.92913,49.996135 94.356907,48.403199 87.506838,44.763178 81.609456,43.159861 76.385508,39.457599 69.785376,40.68253 63.836477,39.011549 59.59187,42.969588 53.751814,42.793288 49.275952,45.335657 42.22924,46.754983 37.718098,44.481684 29.620146,42.897438 20.418873,43.162129 12.823567,38.571946 9.424041,37.687453 7.2482638,35.307103 3.47036,35.3261 Z M -69.73794,41.52066 C -70.369607,62.909639 -71.001273,84.298618 -71.63294,105.6876 -71.001273,84.298618 -70.369607,62.909639 -69.73794,41.52066 Z"></path>
                </svg>
              </div>

              <div id="mountain2" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M -20.6077,56.4309 C -30.041005,56.067824 -38.734714,60.024301 -48.269682,58.834049 -52.223466,62.037685 -56.825511,58.672033 -61.559401,59.959703 -70.74811,59.247439 -79.927393,61.758388 -75.127165,73.467726 -75.165695,120.04022 -75.137559,167.55588 -75.146048,214.49342 74.048163,214.48089 223.29251,214.51849 372.45539,214.47462 372.35743,167.66243 372.65067,120.45903 372.31025,73.889295 368.19674,71.585098 360.3997,75.076307 356.98335,74.170999 350.62068,69.898712 342.01825,73.180428 334.76613,70.794035 329.31764,72.355962 323.96633,71.705704 318.45472,70.512583 308.74541,67.94825 298.91642,66.145667 288.92554,67.698359 279.70443,69.379684 269.82723,70.015403 260.66191,70.371858 261.08285,77.853591 255.29503,77.529488 248.96227,76.985231 216.44497,76.985231 183.92768,76.985231 151.41038,76.985231 143.85065,71.792706 135.52181,64.050538 126.23395,66.150652 120.46222,68.440227 106.94902,67.848181 104.8604,70.934864 103.7273,72.58016 95.659154,71.166881 91.982156,71.638336 61.308538,71.638336 30.63492,71.638336 -0.038698,71.638336 -3.8589923,64.838669 -12.024065,62.325542 -17.756126,57.848766 L -20.427846,56.441656 -20.607774,56.430716 -20.6077,56.4309 Z M 104.3253,69.9268 C 104.69024,69.715611 102.42434,70.191923 104.3253,69.9268 Z M 104.3343,69.9214 104.3565,69.922012 104.3343,69.9214 Z M 129.4387,65.61131 130.049,65.466914 129.4387,65.61131 Z"></path>
                </svg>
              </div>

              <div id="mountain1" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 27.2649,49.5345 C 23.220164,49.017769 19.893618,50.574166 17.202165,52.501942 14.201983,51.593167 10.134611,51.246702 8.477816,53.62752 3.4726862,56.186299 0.17465134,61.443535 -4.889502,63.054954 -6.5648079,68.788472 -13.523245,62.233845 -17.131167,65.587807 -19.722365,67.738843 -24.734531,65.425913 -25.432957,69.246238 -33.459181,70.668797 -41.810037,67.47209 -50.057158,67.979895 -56.992017,66.438686 -64.974172,66.627045 -71.30407,70.37193 -78.549652,70.218326 -74.392112,79.045127 -75.476818,83.495181 -75.521834,127.13866 -75.386801,170.96218 -75.544308,214.49317 73.789025,214.49317 223.12236,214.49317 372.45569,214.49317 372.45569,179.66317 372.45569,144.83317 372.45569,110.00317 365.04073,107.97513 355.41557,108.52794 348.43105,105.40859 341.97749,104.07856 339.05305,102.57304 333.93806,99.63958 325.72446,95.557552 316.87002,93.891858 307.57524,94.292581 299.69673,92.320042 290.62099,93.260968 282.29793,92.041264 280.68613,87.633594 274.67386,84.960858 270.47828,84.302318 264.18392,89.310599 255.86397,81.749362 248.10552,82.895204 242.36401,83.32391 236.51929,82.23943 231.36127,79.658962 226.40456,76.015495 216.8736,82.111968 213.77257,77.68874 211.70081,73.974998 214.28429,64.519704 207.44063,65.728537 204.65071,65.81547 201.02554,64.870932 197.45029,63.054994 190.79906,62.648717 182.59328,61.631636 177.04758,65.728459 171.45685,68.329565 164.84839,67.444314 160.30313,64.884265 154.28121,66.004036 148.04235,71.069338 141.44825,72.904589 133.69209,79.711938 124.05313,70.539038 115.13563,70.512553 108.1168,70.347772 108.38652,62.380463 102.89398,60.944385 99.565809,58.54463 95.053812,57.523418 92.059262,54.19028 86.354908,51.169839 80.236368,52.213012 74.189317,53.76826 70.266695,54.868886 67.745999,51.920995 64.339699,53.064617 58.329507,54.506046 53.805348,57.40701 47.067739,56.673196 41.97959,59.319958 37.82016,53.233139 32.82142,52.360446 30.944405,51.119998 28.909057,51.108319 27.2649,49.5345 Z M 189.39805,62.610232 188.94472,62.587919 189.39805,62.610232 Z M 241.77405,82.754432 241.91477,82.754432 241.77405,82.754432 Z"></path>
                </svg>
              </div>

              <div id="city5" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 254.26,56.2207 254.26,61.00478 253.27509,61.00478 253.27509,58.33129 252.71234,58.33129 252.71234,61.00478 252.29014,61.00478 252.29014,62.27116 250.60158,62.27116 250.60158,59.87912 250.03882,59.87912 250.03882,62.27116 243.98837,62.27116 243.98837,61.1455 243.42548,61.1455 243.42548,62.27116 241.87764,62.27116 241.87764,67.05525 238.78211,67.05525 238.78211,159.36025 209.37401,159.36025 209.37401,103.63945 185.73491,103.63945 185.73491,91.67925 179.12154,91.67925 179.12154,89.99068 173.35252,89.99068 173.35252,86.89517 172.64889,86.89517 172.64889,89.99068 168.99046,89.99068 168.99046,91.67925 160.40723,91.67925 160.40723,159.36025 147.32133,159.36025 147.32133,118.55465 137.47171,118.55465 137.47171,107.72015 131.56198,107.72015 131.56198,118.55465 128.04429,118.55465 128.04429,159.36025 93.42989,159.36025 93.42989,124.04235 72.32349,124.04235 72.32349,121.65031 67.53941,121.65031 67.53941,124.04235 56.98611,124.04235 56.98611,159.36025 9.98931,159.36025 9.98931,113.34835 5.34596,113.34835 5.34596,108.28281 1.40608,108.28281 1.40608,111.23776 -6.47369,111.23776 -6.47369,109.40863 -4.78511,109.40863 -4.78511,99.55901 -8.44353,99.55901 -8.44353,102.93599 -15.05691,102.93599 -15.05691,100.12177 -17.30823,100.12177 -17.30823,91.81998 -23.78088,91.81998 -23.78088,88.16156 -26.87639,88.16156 -26.87639,76.76406 -27.580033,76.76406 -27.580033,88.16156 -29.690613,88.16156 -29.690613,91.81998 -36.022533,91.81998 -36.022533,97.44826 -38.414573,97.44826 -38.414573,102.93599 -41.369363,102.93599 -41.369363,130.41929 -41.403103,130.41929 -41.403103,159.36019 -55.721803,159.36019 -55.721803,132.62559 -74.858103,132.62559 -74.858103,169.02389 -75.331253,169.02389 -75.331253,214.49359 -51.452153,214.49359 -51.452153,214.3775 372.45585,214.3775 372.45585,159.3602 333.47945,159.3602 333.47945,88.0208 319.88345,88.0208 320.11211,86.1915 318.14224,84.64383 309.84045,84.784389 306.0413,88.020799 306.0413,159.3602 297.03587,159.3602 297.03587,123.7609 280.85427,123.7609 280.85427,159.3602 268.19047,159.3602 268.19047,67.055199 264.10987,67.055199 264.10987,62.271109 261.57727,62.271109 261.57727,61.145449 259.04451,61.145449 259.04451,62.271109 255.24533,62.271109 255.24533,61.004729 254.96388,61.004729 254.96388,56.220649 254.26023,56.220649 Z"></path>
                </svg>
              </div>

              <div id="city4" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 212.565,55.2 A 8.25819,9.15366 0 0 0 204.30693,64.35374 8.25819,9.15366 0 0 0 204.43433,65.94562 L 204.30676,65.94562 204.30676,149.12452 188.38746,149.12452 188.38746,126.43932 150.97686,126.43932 150.97686,149.12452 135.85346,149.12452 135.85346,55.39912 101.62666,55.39912 101.62666,108.92812 88.29426,108.92812 88.29426,111.5149 80.13557,111.5149 80.13557,149.1246 66.40497,149.1246 66.40497,135.3942 39.93897,135.3942 39.93897,129.82227 24.01967,129.82227 24.01967,135.3942 2.32947,135.3942 2.32947,143.15483 -3.04334,143.15483 -3.04334,108.33123 -25.92754,108.33123 -25.92754,103.15736 -35.47917,103.15736 -35.47917,108.33123 -36.474047,108.33123 -36.474047,124.44963 -56.771247,124.44963 -56.771247,135.79203 -75.476647,135.79203 -75.476647,176.38653 -75.377107,176.38653 -75.377107,214.49363 -59.756307,214.49363 -59.756307,214.39413 372.25669,214.39413 372.25669,214.1952 372.45559,214.1952 372.45559,146.5377 368.47573,146.5377 368.47573,122.2606 368.07784,122.2606 368.07784,111.5605 372.13249,111.5605 A 22.8652,14.0005 0 0 0 362.20846,110.15339 22.8652,14.0005 0 0 0 343.39256,116.20384 L 345.98961,116.20384 345.98961,122.26056 341.41277,122.26056 341.41277,127.23549 332.45813,127.23549 332.45813,149.12459 285.29693,149.12459 285.29693,102.75939 279.92414,102.75939 279.92414,100.96839 260.22384,100.96839 260.22384,102.75939 254.0551,102.75939 254.0551,149.12459 241.9165,149.12459 241.9165,70.52249 241.50461,70.52249 A 4.96914,9.04849 0 0 0 241.51261,70.223994 4.96914,9.04849 0 0 0 236.5434,61.175544 4.96914,9.04849 0 0 0 236.14535,61.208434 L 236.14535,55.199984 213.06225,55.199984 213.06225,55.227684 A 8.25819,9.15366 0 0 0 212.56481,55.199984 Z"></path>
                </svg>
              </div>

              <div id="city3" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 152.762,91.3174 152.762,97.0881 149.38364,97.0881 149.38364,91.71528 147.99256,91.71528 147.99256,97.0881 146.99899,97.0881 146.99899,98.67998 141.43465,98.67998 141.43465,160.56678 129.70965,160.56678 129.70965,113.60438 95.52855,113.60438 95.52855,123.55406 75.85455,123.55406 75.85455,145.44316 57.17405,145.44316 57.17405,140.86646 54.39189,140.86646 54.39189,135.29454 53.887523,135.29454 A 4.07391,7.16373 0 0 0 50.814833,129.90367 L 50.814833,125.94201 50.698057,125.94201 49.813192,123.76089 49.132564,125.94201 49.026231,125.94201 49.026231,129.9067 A 4.07391,7.16373 0 0 0 45.952191,135.29454 L 44.852971,135.29454 44.852971,140.86646 40.083511,140.86646 40.083511,145.44316 21.800611,145.44316 21.800611,162.55646 4.113911,162.55646 4.113911,140.46836 -18.143589,140.46836 -18.143589,162.55646 -30.265989,162.55646 -30.265989,140.07036 -74.979689,140.07036 -74.979689,214.39406 -75.377048,214.39406 -75.377048,214.49356 372.45595,214.49356 372.45595,214.41286 372.42335,214.41286 372.42335,145.64216 360.82995,145.64216 360.82995,148.22892 337.38015,148.22892 337.38015,142.45823 329.03348,142.45823 329.03348,148.22892 326.05261,148.22892 326.05261,139.87129 312.73781,139.87129 312.73781,136.28948 302.00651,136.28948 302.00651,139.87129 289.28811,139.87129 289.28811,168.32719 272.39621,168.32719 272.39621,145.04509 232.45201,145.04509 232.45201,154.9946 224.50288,154.9946 224.50288,146.83592 224.10553,146.83592 224.6023,146.63697 221.32319,138.57784 221.20843,138.93573 221.12453,138.67723 218.66118,146.83592 218.54102,146.83592 218.54102,154.9946 215.75887,154.9946 215.75887,143.2541 207.01484,143.2541 207.01484,138.47829 201.05314,138.47829 201.05314,109.22639 173.62864,109.22639 173.62864,147.23399 161.10884,147.23399 161.10884,98.67979 154.94829,98.67979 154.94829,97.08791 153.95457,97.08791 153.95457,91.31721 152.76216,91.31721 Z"></path>
                </svg>
              </div>

              <div id="city2" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 194.622,131.148 C 194.622,131.148 193.59002,139.75614 193.41659,142.6158 L 190.07533,142.6158 C 189.49755,138.95259 188.4363,133.1882 188.4363,133.1882 L 188.4363,133.68074 187.06787,143.95254 186.74923,143.95254 186.74923,180.11464 184.78096,180.11464 184.78096,150.77684 151.46256,150.77684 151.46256,174.83814 147.24514,174.83814 147.24514,149.08844 141.6217,149.08844 141.6217,145.14857 131.4998,145.14857 131.4998,149.08844 122.78358,149.08844 122.78358,153.02816 111.25568,153.02816 111.25568,199.32146 92.97978,199.32146 92.97978,144.02286 62.89478,144.02286 62.89478,166.95836 47.85228,166.95836 47.85228,153.73176 26.62428,153.73176 26.62428,166.95836 24.09376,166.95836 24.09376,144.44486 -6.97534,144.44486 -6.97534,203.15076 -8.38121,203.15076 -8.38121,137.83166 -13.72345,137.83166 -13.72345,134.73598 -32.42115,134.73598 -32.42115,137.83166 -40.57495,137.83166 -40.57495,203.15076 -51.11885,203.15076 -51.11885,149.36966 -60.95956,149.36966 -60.95956,143.03774 -71.92526,143.03774 -71.92526,149.36966 -73.47156,149.36966 -73.47156,151.48042 -75.15863,151.48042 -75.15863,214.49342 372.45537,214.49342 372.45537,211.11054 365.57208,211.11054 365.57208,141.34934 343.92228,141.34934 343.92228,146.41488 308.49498,146.41488 308.49498,142.61572 300.763,142.61572 300.763,146.41488 298.79469,146.41488 298.79469,209.91648 291.90617,209.91648 291.90617,133.46958 262.10237,133.46958 262.10237,206.42718 205.72827,206.42718 205.72827,180.11458 197.71491,180.11458 197.71491,143.95248 197.64461,143.95248 197.64461,143.03775 197.39392,143.03775 194.62215,131.14795 Z"></path>
                </svg>
                <div className="city2-front">
                </div>

              </div>
              <div id="city1" className="layer">
                <svg viewBox="-72 10 362 200" version="1.1">
                  <path d="M 88.9271,169.291 88.9271,171.54231 82.73591,171.54231 82.73591,172.38668 71.61991,172.38668 71.61991,174.63799 53.32781,174.63799 53.32781,180.96992 22.79401,180.96992 22.79401,199.68422 8.58231,199.68422 8.58231,193.63376 3.93896,193.63376 3.93896,189.97534 -8.72484,189.97534 -8.72484,184.06543 -24.90644,184.06543 -24.90644,189.97534 -33.91185,189.97534 -33.91185,172.52744 -75.43985,172.52744 -75.43985,214.49414 -68.80571,214.49414 -33.91191,214.49414 -22.51441,214.49414 -15.47884,214.49414 372.42816,214.49414 372.42816,210.09664 372.45526,210.09664 372.45526,180.54774 317.57866,180.54774 317.57866,183.78398 305.05556,183.78398 305.05556,191.24155 285.21556,191.24155 285.21556,202.77975 267.48636,202.77975 267.48636,192.78941 218.66026,192.78941 218.66026,202.21701 208.52916,202.21701 208.52916,191.80451 195.72476,191.80451 195.72476,182.09562 181.79456,182.09562 181.79456,191.80451 164.34666,191.80451 164.34666,184.90985 132.82796,184.90985 132.82796,180.68851 97.65066,180.68851 97.65066,171.54236 91.74093,171.54236 91.74093,169.29105 88.9267,169.29105 Z"></path>
                </svg>
                <div className="city-front limit">
                  <a href="https://jhyman2.github.io" className="site_name">https://jhyman2.github.io</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
