import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

type DataContextType = {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  dataFetched: boolean;
  setDataFetched: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => Promise<void>;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>(null);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const response = await fetch('../data.json');

    if (response.status !== 200) {
      console.log(
        Error(
          'Error fetching data, response status:' + response.status
        )
      );
    }

    if (response.status === 200) {
      const data = await response.json();

      setData(data);
    }
  }, []);

  useEffect(() => {
    if (dataFetched) return;

    fetchData();

    setDataFetched(true);
  }, [fetchData, setDataFetched, dataFetched]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        dataFetched,
        setDataFetched,
        fetchData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const useDataContext = () => useContext(DataContext);
