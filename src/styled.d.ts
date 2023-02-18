import 'styled-components';

interface IPallette {
    main: string;
    contrastText: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: IPallette;
            secondary: IPallette;
            background: {
                dark: string;
                light: string;
            }
            standard: {white: string};
            error: IPallette;
            warning: IPallette;
            info: IPallette;
            success: IPallette;
        };
    }
}