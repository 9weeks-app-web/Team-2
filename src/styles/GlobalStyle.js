import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { font_size, font_weight, line_height } from "./typography";

const GlobalStyle = createGlobalStyle`
  :root {
    /* colors */
    ${colors.NEUTRAL_100}: #030303;
    ${colors.NEUTRAL_90}: #1A1A1A;
    ${colors.NEUTRAL_80}: #333;
    ${colors.NEUTRAL_70}: #4D4D4D;
    ${colors.NEUTRAL_60}: #666;
    ${colors.NEUTRAL_50}: #808080;
    ${colors.NEUTRAL_40}: #999999;
    ${colors.NEUTRAL_30}: #B3B3B3;
    ${colors.NEUTRAL_20}: #CCC;
    ${colors.NEUTRAL_10}: #E6E6E6;
    ${colors.NEUTRAL_5}: #F3F3F3;
    ${colors.NEUTRAL_WHITE}: #ffffff;
    ${colors.PRIMARY_100}: #0059FF;
    ${colors.PRIMARY_90}: #196AFF;
    ${colors.PRIMARY_80}: #337AFF;
    ${colors.PRIMARY_70}: #4C8BFF;
    ${colors.PRIMARY_60}: #669BFF;
    ${colors.PRIMARY_50}: #7FACFF;
    ${colors.PRIMARY_40}: #99BDFF;
    ${colors.PRIMARY_30}: #B2CDFF;
    ${colors.PRIMARY_20}: #CCDEFF;
    ${colors.PRIMARY_10}: #E5EEFF;
    ${colors.PRIMARY_5}: #F5F8FF;
    ${colors.PRIMARY_WHITE}: #ffffff;
    ${colors.STROKE_BLUE}: #99BDFF;
    ${colors.STROKE_10}: #E6E6E6;
    ${colors.STROKE_5}: #F3F3F3;
    ${colors.BACKGROUND_100}: #666;
    ${colors.BACKGROUND_50}: rgba(0, 0, 0, 0.30);
    ${colors.BACKGROUND_GRAY}: #A9A9A9;
    ${colors.BACKGROUND_5}: #F8F8F9;
    ${colors.BACKGROUND_BLUE}: #F5F8FF;
    ${colors.SYSTEM_WARNING}: #F00;
    ${colors.SYSTEM_SUCCESS}: #07A320;

    /* border-color */

    ${colors.BORDER_COLOR} : #EDEDED;

    /* Font */
    ${font_size.FONT_SIZE_24} : 24px;
    ${font_size.FONT_SIZE_20} : 20px;
    ${font_size.FONT_SIZE_18} : 18px;
    ${font_size.FONT_SIZE_16} : 16px;
    ${font_size.FONT_SIZE_14} : 14px;
    ${font_size.FONT_SIZE_12} : 12px;
    ${font_size.FONT_SIZE_10} : 10px;

    /* Font weight */
    ${font_weight.FONT_WEIGHT_700_B} : 700;
    ${font_weight.FONT_WEIGHT_600_SB} : 600;
    ${font_weight.FONT_WEIGHT_500_M} : 500;
    ${font_weight.FONT_WEIGHT_400_R} : 400;
    ${font_weight.FONT_WEIGHT_300_L} : 300;
    
    /* line_height */
    ${line_height.LINE_HEIGHT_100} : 100%;
    ${line_height.LINE_HEIGHT_140} : 140%;

    
  

  }
   @font-face {
        font-family: 'PTD';
        font-weight: 700;
        font-style: normal;
        src: url('/fonts/Pretendard-Bold.otf') format('opentype');
    }
    @font-face {
        font-family: 'PTD';
        font-weight: 600;
        font-style: normal;
        src: url('/fonts/Pretendard-SemiBold.otf') format('opentype');
    }
    @font-face {
        font-family: 'PTD';
        font-weight: 500;
        font-style: normal;
        src: url('/fonts/Pretendard-Medium.otf') format('opentype');
    }
    @font-face {
        font-family: 'PTD';
        font-weight: 400;
        font-style: normal;
        src: url('/fonts/Pretendard-Regular.otf') format('opentype');
    }
    @font-face {
        font-family: 'PTD';
        font-weight: 300;
        font-style: normal;
        src: url('/fonts/Pretendard-Light.otf') format('opentype');
    }
    

  body {
    font-family: 'PTD';
  }
`;

export default GlobalStyle;
