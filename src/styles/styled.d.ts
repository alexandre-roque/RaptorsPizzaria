import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;
            icon: string,
            imageborder: string,
            background: string;
            text: string;
        }
    }
}