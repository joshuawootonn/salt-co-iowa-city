import { A } from '../components/typography';
import React from 'react';

export const mapLinkObjectToLinks = (object: { [key: string]: any }) =>
  Object.keys(object).map((key: string) => (
    <A key={object[key]} href={object[key]}>
      {key}
    </A>
  ));
