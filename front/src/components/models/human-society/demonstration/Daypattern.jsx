import React, { useEffect, useState } from "react";
import axios from "axios";


function TableSocial(props) {
  const [dayPattern, setDayPattern] = useState({});

  axios.get("./living_model_data_days.json").then((res) => {
    setDayPattern(res.data.groups.find((el) => el.groupName === String(props.social)));
    console.log(dayPattern)
  });


  console.log(props.social)
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default TableSocial;