import { useEffect, useState } from "react";

function FetchData(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await props();
        if (response.status === 200) {
          console.log(response);
          console.log("Thành công");
          setData(response);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading };
}

export default FetchData;
