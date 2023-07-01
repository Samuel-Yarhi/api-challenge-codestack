import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

//theme for table
import "primereact/resources/themes/lara-light-blue/theme.css";

//core
import "primereact/resources/primereact.min.css";

function PeopleTable({ json }) {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  return (
    <div className="App mainContainer">
      <InputText
        onInput={(e) =>
          setFilters({
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
        className="searchBar"
        placeholder="Search here..."
      />

      <DataTable
        value={json}
        sortMode="multiple"
        filters={filters}
        paginator
        rows={5}
        rowsPerPageOptions={[1, 2, 3, 4, 5]}
      >
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="email" header="Email" sortable />
        <Column field="gender" header="Gender" sortable />{" "}
      </DataTable>
    </div>
  );
}

export default PeopleTable;
