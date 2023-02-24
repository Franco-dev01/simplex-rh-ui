import { matchPath } from 'react-router-dom';

export { default as NavSectionVertical } from './vertical';

export function isExternalLink(path: string) {
  return path.includes('http');
}

export function getActive(path: string, pathname: string) {
  const pattern = {
    path,
    end: false,
  };

  return path ? !!matchPath(pattern, pathname) : false;
}
