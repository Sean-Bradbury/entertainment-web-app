// Dependencies
import * as React from 'react';

// Icons
import { Home, Movies, TV, Bookmark } from './Icons/icons';


export interface IIconProps {
    type: string;
}

export default function Icon ({type}: IIconProps):JSX.Element {
    switch(type) {
        case 'home':
            return <Home />;
        case 'movies':
            return <Movies />;
        case 'tv':
            return <TV />;
        case 'bookmark':    
            return <Bookmark />;
        default:
            return <Home />;
    }
}
