import * as React from 'react';
import styled from 'styled-components';
import { fontsObj } from '../../theme';

export interface IHeadingProps {
  type: 'hl' | 'hm' | 'hs' | 'hxs' | 'bm' | 'bs';
  children?: React.ReactNode;
}

export default function Heading({
  type,
  children,
}: IHeadingProps): JSX.Element {
  switch (type) {
    case 'hl':
      return <HeadingL>{children}</HeadingL>;
    case 'hm':
      return <HeadingM>{children}</HeadingM>;
    case 'hs':
      return <HeadingS>{children}</HeadingS>;
    case 'hxs':
      return <HeadingXS>{children}</HeadingXS>;
    case 'bm':
      return <BodyM>{children}</BodyM>;
    case 'bs':
      return <BodyS>{children}</BodyS>;
    default:
      return <HeadingL>{children}</HeadingL>;
  }
}

const HeadingL = styled.h1`
  font-family: ${fontsObj.headingL.fontFamily};
  font-size: ${fontsObj.headingL.fontSize};
  font-weight: ${fontsObj.headingL.fontWeight};
  margin-bottom: 25px;
`;

const HeadingM = styled.h2`
  font-family: ${fontsObj.headingM.fontFamily};
  font-size: ${fontsObj.headingM.fontSize};
  font-weight: ${fontsObj.headingM.fontWeight};
`;

const HeadingS = styled.h3`
  font-family: ${fontsObj.headingS.fontFamily};
  font-size: ${fontsObj.headingS.fontSize};
  font-weight: ${fontsObj.headingS.fontWeight};
`;

const HeadingXS = styled.h4`
  font-family: ${fontsObj.headingXS.fontFamily};
  font-size: ${fontsObj.headingXS.fontSize};
  font-weight: ${fontsObj.headingXS.fontWeight};
`;

const BodyM = styled.p`
  font-family: ${fontsObj.bodyM.fontFamily};
  font-size: ${fontsObj.bodyM.fontSize};
  font-weight: ${fontsObj.bodyM.fontWeight};
`;

const BodyS = styled.p`
  font-family: ${fontsObj.bodyS.fontFamily};
  font-size: ${fontsObj.bodyS.fontSize};
  font-weight: ${fontsObj.bodyS.fontWeight};
`;
