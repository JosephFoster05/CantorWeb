"use client";


import React, { useEffect, useState } from 'react';

const ShowDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const d = new Date();
    const currDate = d.getDate();
    const currMonth = d.getMonth() + 1; // months are zero-based
    const currYear = d.getFullYear();
    setDate(`${currDate}-${currMonth}-${currYear}`);
  }, []); // Empty dependency array to run only once when component mounts

  return <div>{date}</div>;
};

export default ShowDate;
