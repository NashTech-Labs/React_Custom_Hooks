const { useState } = require("react");

const useHttpRequest = (params, handleData) => {
  const url = params.url;
  const method = params.method;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let apiResponse;

  const sendRequest = async () => {
    setError(null);
    setLoading(true);
    try {
      apiResponse = await fetch(url, {
        method: method ? method: "GET",
        headers: params.header ? params.header: {},
        body: params.body ? JSON.stringify(params.body): null,
      });

      if (!apiResponse.ok) {
        throw new Error("Something went wrong");
      }

      const data = await apiResponse.json();

      handleData(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { isloading: loading, error: error, sendRequest: sendRequest };
};

export default useHttpRequest;
