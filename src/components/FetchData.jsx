import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchData() {
  const [Data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=9ba22b94957a42ff9b1b7ad0c5f729f1"
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <h3>
        <u>Top Headlines</u>
      </h3>
      <div className=" container  d-flex justify-content-center align-items-center flex-column my-3">
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="container">
                  <h5>{items.title}</h5>
                  <img src={items.urlToImage} alt="/" className="img-fluid" style={{width:"200px", height:"300px", objectFit:"cover"}} />
                  <p>{items.description}</p>
                </div>
              </>
            ))
          : "Loading....."}
      </div>
    </div>
  );
}

export default FetchData;
