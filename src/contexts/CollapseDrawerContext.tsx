import { createContext } from 'react';

const initialState = {
  collapseClick: false,
  collapseHover: false,
  onToggleCollapse: () => null,
  onHoverEnter: () => null,
  onHoverLeave: () => null,
  isCollapse: undefined,
};

type State = {
  collapseClick: boolean;
  collapseHover: boolean;
  onToggleCollapse: () => void;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  isCollapse?: boolean;
};

const CollapseDrawerContext = createContext<State>(initialState);

export default CollapseDrawerContext;
