import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // // const [data, setData] = useState([]);
  // // useEffect(() => {
  // //   fetch("https://api.github.com/users/aryachirag11")
  // //     .then((response) => response.json())
  // //     .then((data) => {
  // //       console.log(data);
  // //       setData(data);
  // //     });
  // });
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github : {data.bio}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aryachirag11");
  return response.json();
};
