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
  handleSearch: any;
  searchedData: any;
  searchValue: string;
};

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataContextProvider = ({ children }: any) => {
  const [data, setData] = useState<any>(null);
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const [searchedData, setSearchedData] = useState<any>(null);
  const [searchValue, setSearchValue] = useState<any>('');

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

  const handleSearch = (searchData: any, value: string) => {
    const newSearchData = searchData.filter((item: any) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });

    if (value === '') {
      setSearchedData(null);
    } else {
      setSearchedData(newSearchData);
      setSearchValue(value);
    }
  };

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
        handleSearch,
        searchedData,
        searchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

export const useDataContext = () => useContext(DataContext);
