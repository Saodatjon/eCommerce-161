import { createGlobalStyle } from "styled-components";
import fontEot from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.eot'
import fontSvg from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.svg'
import fontTtf from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.ttf'
import fontWoff from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.woff'
import fontWoff2 from '../assets/fonts/07bc241768c969f6b6a27a7bf0dfb490.woff2'
import { mainFont } from "../utilis/constant";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family:mainFont;
        src: url(${fontEot}) format('eot'),
            url(${fontSvg}) format('svg'),
            url(${fontTtf}) format('ttf'),
            url(${fontWoff}) format('woff'),
            url(${fontWoff2}) format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`