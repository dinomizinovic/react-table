import React, { useState, useCallback } from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import './DataTable.css';
import SearchInput from './SearchInput';

interface DataTableProps {
    data: string[];
    pickedFields: string[];
}

const DataTable: React.FC<DataTableProps> = ({ data, pickedFields }) => {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = useCallback((searchTerm: string) => {
        const lowerCasedTerm = searchTerm.toLowerCase();
        const filtered = data.filter((item) =>
            Object.values(item).some((value) => {
                const stringValue = typeof value === 'string' ? value : String(value ?? '');
                return stringValue.toLowerCase().includes(lowerCasedTerm);
            })
        );
        setFilteredData(filtered);
    }, [data]);            

    return (
        <div className="col-10 mt-4 p-0">
            <div className="d-flex mb-4">
                <div className="flex-fill"></div>
                <div className="ml-auto">
                    <SearchInput onSearch={handleSearch} />
                </div>
            </div>
            <DataGrid 
                dataSource={filteredData} 
                rowAlternationEnabled={true} 
                paging={{ pageSize: 15 }}
            >
                {pickedFields.map((field) => (
                    <Column 
                        key={field} 
                        dataField={field} 
                        alignment="left" 
                        allowSorting={false}
                    />
                ))}
            </DataGrid>
        </div>
    );
};

export default DataTable;
