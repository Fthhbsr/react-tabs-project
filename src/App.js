import React from "react";
import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const API_URL = "https://course-api.com/react-tabs-project";

const App = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setİsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setApiData(data);
      setİsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="section-loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = apiData[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="underline"></div>
      <div className="job-center">
        {/* btn */}
        <div className="btn-container">
          {apiData.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}{" "}
              </button>
            );
          })}
        </div>

        {/* content */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates} </p>
          {duties.map((item, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight />
                <p>{item} </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
