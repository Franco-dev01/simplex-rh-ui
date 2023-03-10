import { Collapse, List } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getActive } from '..'

import { NavItemRoot, NavItemSub } from './NavItem'

// ----------------------------------------------------------------------

type NavListSubProps = {
  list: {
    children: React.ReactNode[]
    icon: any
    info: any
    path: string
    title: string
    availabe?: boolean
  }
}

const NavListSub: React.FC<NavListSubProps> = ({ list }) => {
  const { pathname } = useLocation()

  const active = getActive(list.path, pathname)
  const [open, setOpen] = useState(active)

  const hasChildren = list.children

  if (hasChildren) {
    return (
      <>
        <NavItemSub item={list} onOpen={() => setOpen(!open)} open={open} active={active} />

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding sx={{ pl: 3 }}>
            {(list.children || []).map((item: any) => (
              <NavItemSub key={item.title} item={item} active={getActive(item.path, pathname)} />
            ))}
          </List>
        </Collapse>
      </>
    )
  }

  return <NavItemSub item={list} active={active} />
}

// ----------------------------------------------------------------------

type NavListRootProps = {
  isCollapse: boolean
  list: {
    children: React.ReactNode[]
    icon: any
    info: any
    path: string
    title: string
    available: boolean
  }
}

export const NavListRoot: React.FC<NavListRootProps> = ({ list, isCollapse }) => {
  const { pathname } = useLocation()

  const active = getActive(list.path, pathname)

  const [open, setOpen] = useState(active)

  const hasChildren = list.children

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          item={list}
          isCollapse={isCollapse}
          active={active}
          open={open}
          onOpen={() => setOpen(!open)}
        />

        {!isCollapse && (
          <Collapse in={open} timeout='auto' unmountOnExit sx={{ ml: 5 }}>
            <List component='div' disablePadding>
              {(list.children || []).map((item: any) => (
                <NavListSub key={item.title} list={item} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    )
  }

  return <NavItemRoot item={list} active={active} isCollapse={isCollapse} />
}
