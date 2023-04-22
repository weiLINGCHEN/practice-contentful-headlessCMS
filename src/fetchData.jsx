import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState("");
  const fetch = async () => {
    try {
      const dataArray = await client.getEntries({
        content_type: "reactPractice",
      });
      const newData = dataArray.items.map((item) => {
        // const newArray = item?.fields;
        // console.log([...newArray, { id: item?.sys?.id }]);
        return { ...item?.fields, id: item?.sys?.id };
      });
      // console.log(newData);
      setProjects(newData);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);
  return { isLoading, isError, projects };
};
