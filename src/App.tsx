import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import DataTable from './components/DataTable';
import { getData } from './modules/services/dataService';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [unselectedFields, setUnselectedFields] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);

      const allFields = Object.keys(fetchedData[0]);

      const defaultSelectedFields = allFields.slice(0, 5);
      setSelectedFields(defaultSelectedFields);

      const defaultUnselectedFields = allFields.slice(5);
      setUnselectedFields(defaultUnselectedFields);
    };

    fetchData();
  }, []);

  const toggleField = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter((f) => f !== field));
      setUnselectedFields([...unselectedFields, field]);
    } else {
      setUnselectedFields(unselectedFields.filter((f) => f !== field));
      setSelectedFields([...selectedFields, field]);
    }
  };

  return (
    <div className="row m-0">
      <DataTable data={data} pickedFields={selectedFields} />
      <Navbar hiddenFields={unselectedFields} pickedFields={selectedFields} toggleField={toggleField} />
    </div>
  );
};

export default App;
