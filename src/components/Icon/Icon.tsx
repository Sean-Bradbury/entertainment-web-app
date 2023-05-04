// Dependencies
import * as React from 'react';

// Icons
import {
  Home,
  Movies,
  MovieSvg,
  TV,
  Bookmark,
  BookmarkEmpty,
  BookmarkFull,
  Play,
  Search,
} from './Icons/icons';

export interface IIconProps {
  type: string;
}

export default function Icon({ type }: IIconProps): JSX.Element {
  switch (type) {
    case 'movie-svg':
      return <MovieSvg />;
    case 'home':
      return <Home />;
    case 'movies':
      return <Movies />;
    case 'tv':
      return <TV />;
    case 'bookmark':
      return <Bookmark />;
    case 'bookmark-empty':
      return <BookmarkEmpty />;
    case 'bookmark-full':
      return <BookmarkFull />;
    case 'play':
      return <Play />;
    case 'search':
      return <Search />;
    default:
      return <Home />;
  }
}
