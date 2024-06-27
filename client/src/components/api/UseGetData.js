import { useEffect, useState } from "react";

const useGetData = (api, lang) => {
  const [nav, getNav] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();

        getNav(data.map((item) => (lang === "UA" ? item.ua : item.pl)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [lang]);

  return nav;
};

export default useGetData;
