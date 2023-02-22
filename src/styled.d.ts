import 'styled-components';

interface IPallette {
    main: string;
    contrastText: string;
}

interface IFont {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
}

interface ITransitions {
    default: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: IPallette;
            secondary: IPallette;
            background: {
                dark: string;
                light: string;
                contrastText: string,
            }
            standard: {white: string};
            error: IPallette;
            warning: IPallette;
            info: IPallette;
            success: IPallette;
        }
        fonts: {
            headingL: IFont;
            headingM: IFont;
            headingS: IFont;
            headingXS: IFont;
            bodyM: IFont;
            bodyS: IFont;
        }
        transitions: ITransitions,
    }
}