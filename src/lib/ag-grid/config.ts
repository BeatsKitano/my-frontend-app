import { 
    ModuleRegistry, 
    ClientSideRowModelModule, 
} from 'ag-grid-community'  
import { 
    MenuModule, 
    RowGroupingModule,
    ColumnsToolPanelModule, 
    FiltersToolPanelModule,
    SetFilterModule
 } from 'ag-grid-enterprise'
 

// 注册AG-Grid模块
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule,
  MenuModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  SetFilterModule,
])

export const gridOptions = {
  defaultColDef: {
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  },
  animateRows: true,
  rowSelection: 'multiple',
  suppressRowClickSelection: true,
  suppressCellFocus: true,
  enableRangeSelection: true,
  statusBar: {
    statusPanels: [
      { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
      { statusPanel: 'agTotalRowCountComponent', align: 'center' },
      { statusPanel: 'agFilteredRowCountComponent' },
      { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agAggregationComponent' },
    ],
  },
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ],
  },
}