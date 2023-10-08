import { IFontStyle, ITextStyle } from '../types/interfaces';

export const paddingsAndMargins = {
    small: 5,
    medium: 10,
    large: 15,
};

export const fontSizes = {
    small: {
        fontSize: 10,
        fontWeight: '300',
    } as IFontStyle,
    medium: {
        fontSize: 14,
        fontWeight: '500',
    } as IFontStyle,
    large: {
        fontSize: 18,
        fontWeight: '700',
    } as IFontStyle,
    huge: {
        fontSize: 22,
        fontWeight: '900',
    } as IFontStyle,
};

export const colors = {
    font: {
        normal: '#fff',
        error: '#ffd500',
    },
    background: {
        button: '#4d9460',
        data: '#595947',
        error: '#af604e',
        footer: '#464f3c',
        main: '#2e3a24',
    },
};

export const textStyles = {
    screenTitleText: {
        ...fontSizes.huge,
        color: colors.font.normal,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: paddingsAndMargins.large,
    } as ITextStyle,
    sectionTitleText: {
        ...fontSizes.large,
        color: colors.font.normal,
        padding: paddingsAndMargins.medium,
        textAlign: 'center',
        textAlignVertical: 'bottom',
    } as ITextStyle,
    commonText: {
        ...fontSizes.medium,
        color: colors.font.normal,
    } as ITextStyle,
    smallText: {
        ...fontSizes.small,
        color: colors.font.normal,
    } as ITextStyle,
    errorText: {
        ...fontSizes.medium,
        color: colors.font.error,
        padding: paddingsAndMargins.medium,
        margin: paddingsAndMargins.medium,
        textAlign: 'center',
    } as ITextStyle,
};
