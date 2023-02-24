import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { styled } from '@mui/material/styles'

import { ICON, NAVBAR } from '../../../config/layouts'

export const ListItemStyle: any = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'activeRoot' && prop !== 'activeSub' && prop !== 'subItem',
})(({ activeRoot, activeSub, subItem, theme }: any) => ({
  ...theme.typography.subtitle2,
  fontWeight: 500,
  position: 'relative',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  // activeRoot
  ...(activeRoot && {
    ...theme.typography.subtitle2,
    fontWeight: 500,
    color: theme.palette.primary.main,
  }),
  // activeSub
  ...(activeSub && {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
  }),
  // subItem
  ...(subItem && {
    height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
    ...theme.typography.body2,
    color: '#828282',
    ...(activeSub && {
      color: theme.palette.primary.main,
    }),
  }),
}))

export const ListItemTextStyle: any = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})(({ isCollapse, theme }: any) => ({
  whiteSpace: 'nowrap',
  textTransform: 'none',
  transition: theme.transitions.create(['width', 'opacity'], {
    duration: theme.transitions.duration.shorter,
  }),
  ...(isCollapse && {
    width: 0,
    opacity: 0,
  }),
}))

export const ListItemIconStyle: any = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'activeIcon',
})(({ activeIcon }: any) => ({
  width: ICON.NAVBAR_ITEM,
  height: ICON.NAVBAR_ITEM,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& svg': {
    width: '100%',
    height: '100%',
  },
  minWidth: 'auto',
  marginRight: '16px',
  ...(activeIcon && {
    color: 'unset',
  }),
}))
