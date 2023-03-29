import { Box, Link, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

import { isExternalLink } from '..'
import Iconify from '../../Iconify'

import { ListItemIconStyle, ListItemStyle, ListItemTextStyle } from './style'

// ----------------------------------------------------------------------

type ArrowIconProps = {
  open: boolean
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ open }) => (
  <Iconify
    icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
    sx={{ width: 16, height: 16, ml: 1 }}
  />
)

// ----------------------------------------------------------------------

type LineIconProps = {
  active: boolean
}

export function LineIcon({ active }: LineIconProps) {
  return (
    <Box
      component='span'
      sx={{
        width: 2,
        height: 15,
        bgcolor: 'text.disabled',
        transition: (theme) =>
          theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
          }),
        ...(active && {
          transform: 'scale(2)',
          bgcolor: 'primary.main',
          margin: '-14px',
        }),
      }}
    />
  )
}

// ----------------------------------------------------------------------

type NavItemRootProps = {
  active: boolean
  open?: boolean
  isCollapse?: boolean
  onOpen?: () => void
  item: {
    children: React.ReactNode[]
    icon: any
    info: any
    path: string
    title: string
  }
}

export const NavItemRoot: React.FC<NavItemRootProps> = ({
  item,
  isCollapse,
  open = false,
  active,
  onOpen,
}) => {
  const { title, path, icon, info, children } = item

  const renderContent = (
    <>
      {icon && <ListItemIconStyle activeIcon={active}>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} isCollapse={isCollapse} />
      {!isCollapse && (
        <>
          {info && info}
          {children && <ArrowIcon open={open} />}
        </>
      )}
      {active && !children && <LineIcon active={active} />}
    </>
  )

  if (children) {
    return (
      <ListItemStyle onClick={onOpen} activeRoot={active}>
        {renderContent}
      </ListItemStyle>
    )
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link} href={path} target='_blank' rel='noopener'>
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle component={RouterLink} to={path} activeRoot={active}>
      {renderContent}
    </ListItemStyle>
  )
}

// ----------------------------------------------------------------------

type NavItemSubProps = {
  active?: boolean
  open?: boolean
  onOpen?: () => void
  item: {
    children: React.ReactNode[] | any
    icon: any
    info: any
    path: string
    title: string
    available?: boolean
  }
}

export const NavItemSub: React.FC<NavItemSubProps> = ({
  item,
  open = false,
  active = false,
  onOpen,
}) => {
  const { title, path, info, children } = item

  const renderContent = (
    <>
      <ListItemText disableTypography primary={title} />
      {info && info}
      {children && <ArrowIcon open={open} />}
      {active && <LineIcon active={active} />}
    </>

  if (children) {
    return (
      <ListItemStyle onClick={onOpen} activeSub={active} subItem>
        {renderContent}
      </ListItemStyle>
    )
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link} href={path} target='_blank' rel='noopener' subItem>
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle component={RouterLink} to={path} activeSub={active} subItem>
      {renderContent}
    </ListItemStyle>
  )
}
