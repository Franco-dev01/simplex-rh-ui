import { Box, Grid, List, ListSubheader, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

import { NavListRoot } from './NavList'

export const ListSubheaderStyle: React.FC<any> = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  paddingTop: theme.spacing(2.5),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}))

export default function NavSectionVertical({ navConfig, isCollapse = false, ...other }: any) {
  return (
    <Box {...other}>
      {navConfig.map((group: any, index: number) => (
        // <List key={index} disablePadding sx={{ px: 0.5 }}>
        //   <ListSubheaderStyle
        //     sx={{
        //       ...(isCollapse && {
        //         opacity: 0,
        //       }),
        //     }}
        //   >
        //     {group.subheader}
        //   </ListSubheaderStyle>

        //   {group.items.map((list: any) => (
        //     <NavListRoot key={list.title} list={list} isCollapse={isCollapse} />
        //   ))}
        // </List>
        <Grid container key={index}>
          <Grid item md>
            {group.subheader}

            {group.items.map((list: any) => (
              <NavListRoot key={list.title} list={list} isCollapse={isCollapse} />
            ))}
          </Grid>
        </Grid>
      ))}
    </Box>
  )
}
