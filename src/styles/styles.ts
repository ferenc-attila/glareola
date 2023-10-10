import { IFontStyle, ITextStyle } from '../types/interfaces';

export const SPACING = {
    SMALL: 5,
    MEDIUM: 10,
    LARGE: 15,
};

export const FONT_SIZES = {
    SMALL: {
        fontSize: 10,
        fontWeight: '300',
    } as IFontStyle,
    MEDIUM: {
        fontSize: 14,
        fontWeight: '500',
    } as IFontStyle,
    LARGE: {
        fontSize: 18,
        fontWeight: '700',
    } as IFontStyle,
    HUGE: {
        fontSize: 22,
        fontWeight: '900',
    } as IFontStyle,
};

export const COLORS = {
    FONT: {
        NORMAL: '#fff',
        ERROR: '#ffd500',
    },
    BACKGROUND: {
        BUTTON: '#4d9460',
        DATA: '#595947',
        ERROR: '#af604e',
        FOOTER: '#464f3c',
        MAIN: '#2e3a24',
    },
};

export const TEXT_STYLES = {
    SCREEN_TITLE: {
        ...FONT_SIZES.HUGE,
        color: COLORS.FONT.NORMAL,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: SPACING.LARGE,
    } as ITextStyle,
    SECTION_TITLE: {
        ...FONT_SIZES.LARGE,
        color: COLORS.FONT.NORMAL,
        padding: SPACING.MEDIUM,
        textAlign: 'center',
        textAlignVertical: 'bottom',
    } as ITextStyle,
    COMMON: {
        ...FONT_SIZES.MEDIUM,
        color: COLORS.FONT.NORMAL,
    } as ITextStyle,
    SMALL: {
        ...FONT_SIZES.SMALL,
        color: COLORS.FONT.NORMAL,
    } as ITextStyle,
    ERROR: {
        ...FONT_SIZES.MEDIUM,
        color: COLORS.FONT.ERROR,
        padding: SPACING.MEDIUM,
        margin: SPACING.MEDIUM,
        textAlign: 'center',
    } as ITextStyle,
};
