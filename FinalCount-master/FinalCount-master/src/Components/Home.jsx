import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const display = () => {
    fetch(`http://localhost:5005/teacher?_limit=4&_page=${page}`) //_limit=3&_page=${page}
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, [page]);

  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/sign">Sign</Link>

      <h2>Teacher's Details</h2>
      <div className="Cards">
        {data.map((e) => (
          <div key={e._id}>
            <img
              src="https://media.istockphoto.com/photos/female-teacher-pointing-with-finger-at-mathematical-equation-on-in-picture-id1080232656?k=20&m=1080232656&s=612x612&w=0&h=7OszmnpcTXIiIhqUXUL3sOaI-nn9DisJU8z3ceeHL5k="
              alt=""
              style={{ width: "200px", height: "200px" }}
            />
            <h3>Name : {e.name}</h3>
            <p>Age : {e.age}</p>
            <p>Gender : {e.gender}</p>
            {/* {e.class_id.map((el) => (
              <div key={el._id}>
                <p>Grade : {el.Grade}</p>
                <p>Section : {el.Section}</p>
                <p>Subject : {el.Subject}</p>
              </div>
            ))} */}
          </div>
        ))}
      </div>

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};