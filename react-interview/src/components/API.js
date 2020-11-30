import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchRandomData = () => {
  return axios
    .get("htts://randomuser.me/api")
    .then(({ data }) => {
      console.log(data);  
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const API = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      setRandomUserDataJSON(
        JSON.stringify(randomData, null, 2) || "No user data"
      );
      setUserInfo(randomData.results);
    });
  }, []);

  return (
    <div>
      <p>{randomUserDataJSON}</p>
    </div>
  );
};

export default API;
