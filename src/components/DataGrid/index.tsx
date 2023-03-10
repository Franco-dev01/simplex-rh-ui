import { DataGridProps, GridLocaleText } from '@mui/x-data-grid';
import { forwardRef } from 'react';

import CustomNoRowsOverlay from './CustomEmptyOverlay';
import StyledDataGrid from './StyledDataGrid';

const getFooterRowSelected = (count: number) => {
  if (count === 1) {
    return `${count} ligne sélectionnée`;
  }
  return `${count} lignes sélectionnées`;
};

const localText: Partial<GridLocaleText> | undefined = {
  footerRowSelected: getFooterRowSelected,
  noRowsLabel: 'Pas de données',
  MuiTablePagination: {
    labelRowsPerPage: 'Lignes par page',
    labelDisplayedRows: (paginationInfos) =>
      `${paginationInfos.from}-${paginationInfos.to} sur ${paginationInfos.count}`,
  },
};

const DATAGRID_HEADER_HEIGHT = 54;
const PAGE_SIZE = 100;

const DataGrid = (props: DataGridProps, ref: any) => (
  <StyledDataGrid
    checkboxSelection
    localeText={localText}
    columnBuffer={3}
    columnThreshold={3}
    components={{
      NoRowsOverlay: CustomNoRowsOverlay,
    }}
    autoPageSize
    hideFooterPagination
    disableColumnMenu
    disableSelectionOnClick
    hideFooter
    headerHeight={DATAGRID_HEADER_HEIGHT}
    disableExtendRowFullWidth={false}
    autoHeight
    density="standard"
    pageSize={PAGE_SIZE}
    {...props}
    ref={ref}
  />
);

DataGrid.displayName = 'DataGrid';
export default forwardRef(DataGrid);
