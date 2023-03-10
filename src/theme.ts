import { DefaultTheme } from "styled-components";

const fontsObj = {
    headingL: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '32px',
        fontWeight: '300',
    },
    headingM: {
        fontFamily: 'Outfit, sans-serif',   
        fontSize: '24px',
        fontWeight: '300',
    },
    headingS: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '24px',
        fontWeight: '500',
    },
    headingXS: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '18px',
        fontWeight: '500',
    },
    bodyM: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '15px',
        fontWeight: '300',
    },
    bodyS: {
        fontFamily: 'Outfit, sans-serif',
        fontSize: '13px',
        fontWeight: '300',
    },
}

const transitionsObj = {
    default: 'transition: all 1.3s ease-in-out',
}

export const defaultTheme: DefaultTheme = {
    palette: {
        primary: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        background: {
            dark: '#10141E',
            light: '#161D2F',
            contrastText: '#ffffff',
        },
        standard: {
            white: '#ffffff',
        },
        error: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        info: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        success: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
    },
    fonts: fontsObj,
    transitions: transitionsObj,


}

export const secondaryTheme: DefaultTheme = {
    palette: {
        primary: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#5A698F',
            contrastText: '#ffffff',
        },
        background: {
            dark: '#eeeeee',
            light: '#ffffff',
            contrastText: '#000',
        },
        standard: {
            white: '#ffffff',
        },
        error: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        info: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
        success: {
            main: '#FC4747',
            contrastText: '#ffffff',
        },
    },
    fonts: fontsObj,
    transitions: transitionsObj,
}