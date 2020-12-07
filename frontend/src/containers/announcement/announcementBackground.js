import React from 'react';
import { css } from 'styled-components/macro';
import { addAlpha } from '../../helpers/color';
import { queryShit } from '../../components/useScreenType';
import styled from 'styled-components';

const Root = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: -5vw;
    width: 110vw;

    min-width: 725px;

    transition: opacity 200ms ease;

    ${({ height, boundingHeight }) =>
        queryShit({
            mobile: css`
                height: ${(Math.floor(boundingHeight / height) + 2) * height}px;
                transform: translate3d(0, -${height - 20}px, 0);
            `,
            tablet: css`
                height: ${(Math.floor(boundingHeight / height) + 3) * height}px;

                transform: translate3d(0, -${height}px, 0);
            `,
            desktop: css`
                height: ${(Math.floor(boundingHeight / height) + 2) * height}px;

                transform: translate3d(0, -${height - 10}px, 0);
            `,
        })}
`;

const styles = {
    root: css`
        linearGradient {
            background-color: lawngreen;
            stop:first-child {
                stop-color: ${({ theme }) =>
                    addAlpha(theme.colors.blue.dark, 0.2)};
            }
            stop:last-child {
                stop-color: ${({ theme }) =>
                    addAlpha(theme.colors.blue.medium, 0.4)};
            }
        }
        path {
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            //stroke: ${({ theme }) => addAlpha(theme.colors.blue.dark, 0.3)};
            fill: none;
        }
    `,
};

const Bullhorn = (props) => {
    if (!props.boundingBox) {
        return null;
    }

    const { width, height } = props.boundingBox;

    const nativeWidth = 1501;
    const nativeHeight = 116;

    const ratio = width > nativeWidth ? 1 : width / nativeWidth;

    const calcHeight = ratio * nativeHeight;

    return (
        <Root {...props} height={calcHeight} boundingHeight={height}>
            <svg
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                css={styles.root}
            >
                <defs>
                    <linearGradient
                        id="myGradient"
                        gradientTransform="rotate(90)"
                    >
                        <stop offset="0%" />
                        <stop offset="100%" />
                    </linearGradient>
                    <pattern
                        id="star"
                        width={nativeWidth * ratio}
                        height={nativeHeight * ratio}
                        viewBox="0 0 1501 116"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            stroke="url('#myGradient')"
                            d="M67 100.192C67.3361 103.789 69.0123 107.129 71.6961 109.548C74.3799 111.967 77.8751 113.289 81.4881 113.251C85.1011 113.214 88.5679 111.819 91.2005 109.344C93.8331 106.869 95.4392 103.495 95.7 99.8916M152.6 33.2916L190.3 3.79156M163.8 70.9916L211.6 75.0916M158.2 52.1916L232.9 29.8916M309.014 74.0121C309.261 76.6574 310.489 79.1131 312.455 80.8919C314.422 82.6707 316.983 83.6427 319.63 83.6149C322.277 83.5871 324.817 82.5616 326.746 80.742C328.675 78.9223 329.852 76.4414 330.043 73.7916M371.733 24.8209L399.355 3.12977M379.939 52.5415L414.962 55.5562M375.836 38.718L430.568 22.321M510.337 96.5563C510.633 99.7306 512.107 102.677 514.466 104.812C516.826 106.947 519.899 108.113 523.076 108.08C526.252 108.046 529.3 106.816 531.615 104.632C533.93 102.448 535.342 99.4714 535.571 96.2916M585.599 37.5269L618.747 11.4974M595.447 70.7915L637.474 74.4092M590.523 54.2033L656.202 34.5268M736.337 88.5563C736.633 91.7306 738.107 94.6774 740.466 96.8119C742.826 98.9465 745.899 100.113 749.076 100.08C752.252 100.046 755.3 98.8157 757.615 96.632C759.93 94.4484 761.342 91.4714 761.571 88.2916M811.6 29.5269L844.747 3.49744M821.447 62.7915L863.474 66.4092M816.523 46.2033L882.202 26.5268M956.375 68.8789C956.602 71.3374 957.737 73.6198 959.555 75.273C961.372 76.9263 963.738 77.8296 966.185 77.8038C968.631 77.778 970.979 76.8249 972.761 75.1337C974.544 73.4425 975.631 71.1367 975.808 68.6739M1014.34 23.16L1039.86 3M1021.92 48.9239L1054.28 51.7258M1018.13 36.0761L1068.71 20.8365M1148.44 98.5563C1148.73 101.731 1150.21 104.677 1152.57 106.812C1154.93 108.947 1158 110.113 1161.18 110.08C1164.35 110.046 1167.4 108.816 1169.72 106.632C1172.03 104.448 1173.44 101.471 1173.67 98.2916M1223.7 39.5269L1256.85 13.4974M1233.55 72.7915L1275.57 76.4092M1228.62 56.2033L1294.3 36.5268M1371.06 77.4343C1371.32 80.204 1372.6 82.7752 1374.66 84.6378C1376.73 86.5003 1379.41 87.518 1382.19 87.4889C1384.96 87.4598 1387.62 86.3861 1389.65 84.4808C1391.67 82.5755 1392.9 79.9778 1393.1 77.2033M1436.8 25.9283L1465.76 3.21636M1445.41 54.9533L1482.12 58.1099M1441.11 40.4794L1498.48 23.3107M46.9 98.0916L150.9 96.3916L127.8 19.2916L40 74.7916L46.9 98.0916ZM294.287 72.468L370.487 71.218L353.562 14.5269L289.232 55.3357L294.287 72.468ZM492.665 94.7033L584.105 93.2033L563.795 25.1739L486.598 74.1445L492.665 94.7033ZM718.665 86.7033L810.105 85.2033L789.795 17.1739L712.598 66.1445L718.665 86.7033ZM942.765 67.4438L1013.18 66.2821L997.543 13.5926L938.093 51.5208L942.765 67.4438ZM1130.76 96.7033L1222.2 95.2033L1201.89 27.1739L1124.7 76.1445L1130.76 96.7033ZM1355.62 75.8175L1435.5 74.5087L1417.76 15.1497L1350.32 57.8789L1355.62 75.8175Z"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#star)" />
            </svg>
        </Root>
    );
};

export default Bullhorn;
