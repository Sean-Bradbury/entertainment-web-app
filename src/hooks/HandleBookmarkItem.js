// Context
import { useDataContext } from '../context/DataContext/DataContextProvider';

const HandleBookmarkItem = () => {
  const { data, setData } = useDataContext();

  function bookmarkItem(title) {
    const newData = data.map((item) => {
      if (item.title === title) {
        item.isBookmarked = !item.isBookmarked;
      }

      return item;
    });

    setData(newData);
  }

  return [bookmarkItem];
};

export default HandleBookmarkItem;
