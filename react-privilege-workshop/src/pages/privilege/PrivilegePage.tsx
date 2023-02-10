import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ICatalogItem,
  ICategoryItem,
  IPrivilegeType,
  MasterDataService,
} from '../../services/masterdata.service';
import {
  IPrivilegeResponse,
  PrivilegService,
} from '../../services/privilege.service';
import { utils, write } from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function PrivilegePage() {
  const datatableRef = useRef(null);
  const navigate = useNavigate();
  const [privilegeList, setPrivilegeList] = useState<IPrivilegeResponse[]>([]);

  const [catalogOptions, setCatalogOptions] = useState<ICatalogItem[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<ICategoryItem[]>([]);
  const [privilegeTypeList, setPrivilegeTypeList] = useState<IPrivilegeType[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const [privilegeList, catalogList, categoryList, privilegeTypeList] =
        await Promise.all([
          PrivilegService.getList(),
          MasterDataService.getCatalogList(),
          MasterDataService.getCategoryList(),
          MasterDataService.getPrivilegesType(),
        ]);
      const mapType = Object.fromEntries(
        privilegeTypeList.map((e) => [e.id, e.type])
      );
      const mapCategory = Object.fromEntries(
        categoryList.map((e) => [e.id, e.category])
      );
      const mapCatalog = Object.fromEntries(
        catalogList.map((e) => [e.id, e.catalog])
      );
      let privilegeListMapped = privilegeList.map((p) => ({
        ...p,
        typeName: mapType[p.typeId],
        categoryName: mapCategory[p.categoryId],
        catalogName: mapCatalog[p.catalogId],
      }));
      console.log(privilegeListMapped);
      setPrivilegeList(privilegeListMapped);
      setCatalogOptions(catalogList);
      setCategoryOptions(categoryList);
      setPrivilegeTypeList(privilegeTypeList);
    };
    fetchData();
  }, []);

  const actionBodyTemplate = (rowData: IPrivilegeResponse): React.ReactNode => {
    return (
      <>
        <Button
          onClick={() => {
            navigate(`/privilege/${rowData.id}`);
          }}
          className="p-button-rounded p-button-outlined"
          style={{ width: '30px', height: '30px' }}
          icon="pi pi-file-edit"
        ></Button>
      </>
    );
  };
  const privilegeTypeItemTemplate = (option: any) => {
    return <span>{option}</span>;
  };
  const typeNameFilterTemplate = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        options={privilegeTypeList.map((type) => type.type)}
        onChange={(e) => {
          options.filterApplyCallback(e.value);
        }}
        itemTemplate={privilegeTypeItemTemplate}
        placeholder="Select a status"
      />
    );
  };

  const handleExportCSV = () => {
    const dt = datatableRef!.current! as DataTable;
    dt.exportCSV();
  };

  const handleExportExcel = () => {
    const worksheet = utils.json_to_sheet(privilegeList);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
    saveXLSXFile(excelBuffer, 'privilege_list');
  };

  const saveXLSXFile = (buffer: any, fileName: string) => {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });

    saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  };

  const handleExportPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const head = [['Title', 'Type Name']];
    const body = privilegeList.map((p) => {
      return [p.title, p.typeName];
    }) as any;
    autoTable(doc, { head, body });
    doc.save('privileges.pdf');
  };

  return (
    <>
      <h1>Privilege Page!</h1>

      <div className="flex flex-column">
        <div className="flex justify-content-end p-2">
          <Button
            className="flex"
            onClick={() => navigate('/privilege/create')}
          >
            Create Privilege
          </Button>
        </div>
        <div className="flex justify-content-end align-items-center export-buttons pb-2">
          <Button
            type="button"
            icon="pi pi-file"
            onClick={handleExportCSV}
            className="mr-2"
            data-pr-tooltip="CSV"
          />
          <Button
            type="button"
            icon="pi pi-file-excel"
            onClick={handleExportExcel}
            className="p-button-success mr-2"
            data-pr-tooltip="XLS"
          />
          <Button
            type="button"
            icon="pi pi-file-pdf"
            onClick={handleExportPDF}
            className="p-button-warning mr-2"
            data-pr-tooltip="PDF"
          />
        </div>
        <div className="card">
          <DataTable
            ref={datatableRef}
            style={{ minHeight: '95vh' }}
            dataKey="id"
            value={privilegeList}
            scrollDirection="both"
            scrollable
            filterDisplay="row"
          >
            <Column
              header="Title"
              field="title"
              filter
              filterPlaceholder="Search by title"
              style={{ flexGrow: 1, flexBasis: '400px' }}
            />
            <Column
              sortable
              header="Type"
              field="typeName"
              filter
              filterElement={typeNameFilterTemplate}
              style={{ flexGrow: 1, flexBasis: '400px' }}
            />
            <Column
              header="Start Date"
              field="startDate"
              filter
              filterPlaceholder="Search by start date"
              style={{ flexGrow: 1, flexBasis: '400px' }}
            />
            <Column
              header="Action"
              body={actionBodyTemplate}
              style={{ flexGrow: 1, flexBasis: '200px' }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
}
