import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
function FetchData(cat) {
  const [Data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(
         ! cat ? `https://newsapi.org/v2/top-headlines?country=in&&apiKey=9ba22b94957a42ff9b1b7ad0c5f729f1` 
        :`https://newsapi.org/v2/top-headlines?country=in&category= ${cat.cat}&apiKey=9ba22b94957a42ff9b1b7ad0c5f729f1` 
      )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat.cat]);

  return (
    <div className="container my-4">
      <h3>
        <u className="d-flex justify-content-center align-items-center">Top Headlines</u>
      </h3>
      <div className=" container  d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>
        {Data
          ? Data.map((items, index) => (
              <>
                <div className="container my-3 p-4" style={{ width: "600px" ,boxShadow:"2px 2px 10px silver" ,borderRadius:"10px"}}>
                  <h5 className="my-2">{items.title}</h5>

                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={items.urlToImage}
                      alt="img Not Found"
                      className="img-fluid "
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />

                  </div>

                  <p className="my-1">{items.content}</p>
                  <a href={items.url} target="_blank" rel="noreferrer">
                    View More
                  </a>
                </div>
              </>
            ))
          : "Loading....."}
      </div>
    </div>
  );
};

export default FetchData;
