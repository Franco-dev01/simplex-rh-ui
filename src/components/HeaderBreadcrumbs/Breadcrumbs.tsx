import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
  href: string;
  icon: any;
  name: string;
};

type LinkItemProps = {
  link: LinkProps;
};

function LinkItem({ link }: LinkItemProps) {
  const { href, name, icon } = link;

  return (
    <Link
      key={name}
      variant="body2"
      component={RouterLink}
      to={href || '#'}
      sx={{
        lineHeight: 2,
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        '& > div': { display: 'inherit' },
      }}
    >
      {icon && <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>}
      {name}
    </Link>
  );
}

// ----------------------------------------------------------------------

type BreadcrumbsProps = {
  activeLast?: boolean;
  links: LinkProps[];
};

export default function Breadcrumbs({ links, activeLast = false, ...other }: BreadcrumbsProps) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links.map((link) => <LinkItem key={link.name} link={link} />);

  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon />} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}
