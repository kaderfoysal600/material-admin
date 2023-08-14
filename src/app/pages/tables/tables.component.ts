import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TableUtil } from "./tableUtl";
import { TableXl } from "./tableXl";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})


export class TablesComponent implements AfterViewInit {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
      export: true,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
      export: true,
    },
    {
      columnDef: 'weight',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${element.weight}`,
      export: true,
    },
    {
      columnDef: 'symbol',
      header: 'Symbol',
      cell: (element: PeriodicElement) => `${element.symbol}`,
      export: true,
    },
    {
      columnDef: 'actions',
      header: 'Actions',
      cell: (element: any) => '',
      export: false,
    }
  ];


  displayedColumns = this.columns.map(c => c.columnDef);
  editElement(element: PeriodicElement) {
    // Implement your edit logic here
    console.log('Edit', element);
  }

  deleteElement(element: PeriodicElement) {
    // Implement your delete logic here
    console.log('Delete', element);
  }

  exportTable() {
    const tableClone = document.getElementById('ExampleTable').cloneNode(true) as Element;
    const actionCells = tableClone.querySelectorAll('.edit-delete');
    actionCells.forEach(cell => cell.parentNode.removeChild(cell));
    // Filter columns that should be included in the export
    const exportableColumns = this.columns.filter(column => column.export);

    // Remove header cells for non-exportable columns
    const headerCells = tableClone.querySelectorAll('th');
    headerCells.forEach((cell, index) => {
      if (!exportableColumns[index]) {
        cell.parentNode.removeChild(cell);
      }
    });
    TableUtil.exportToPdf(tableClone.outerHTML, 'exported_table');
  }

  exportXlTable() {
    const tableClone = document.getElementById('ExampleTable').cloneNode(true) as Element;
    const actionCells = tableClone.querySelectorAll('.edit-delete');
    actionCells.forEach(cell => cell.parentNode.removeChild(cell));
    // Filter columns that should be included in the export
    const exportableColumns = this.columns.filter(column => column.export);

    // Remove header cells for non-exportable columns
    const headerCells = tableClone.querySelectorAll('th');
    headerCells.forEach((cell, index) => {
      if (!exportableColumns[index]) {
        cell.parentNode.removeChild(cell);
      }
    });
    TableXl.exportTableToExcel(tableClone, 'exported_table');
  }
}



