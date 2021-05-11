import React, { useState, useEffect } from "react";
import axios from "axios";

const ConsultasConfigurador = (param) => {
  const [data, setData] = useState([
    {
      ram: "",
      gpu: "",
      procesador: "",
      discos: [{ ssd: "", m2: "", hdd: "" }],
      fuente: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const ramResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.ram}`
        );
        const gpuResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.gpu}`
        );
        const procesadorResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.procesador}`
        );
        const discoSsdResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.ssd}`
        );
        const discoM2Result = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.m2}`
        );
        const discoHddResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.hdd}`
        );
        const fuenteResult = await axios(
          `https://proyecto-final-daw.000webhostapp.com/ajax/componentes.php?search=${param.fuente}`
        );
        setData({
          ram: ramResult.data,
          gpu: gpuResult.data,
          procesador: procesadorResult.data,
          discos: {
            ssd: discoSsdResult.data,
            m2: discoM2Result.data,
            hdd: discoHddResult.data,
          },
          fuente: fuenteResult.data,
        });
      } catch (error) {
        setData(null);
        console.log(Object.keys(error), error.message);
      }
    }
    fetchData();
  });

  return console.log(param.ram);
};

export default ConsultasConfigurador;
