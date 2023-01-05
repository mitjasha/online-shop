import { useState, useEffect } from "react";
import { WineInfo } from "../helpers/interfaces";

const calculateRange = (data: WineInfo[], rowsPerPage: number) => {
  const range: number[] = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i += 1) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: WineInfo[], page: number, rowsPerPage: number) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data: WineInfo[], page: number, rowsPerPage: number) => {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<WineInfo[]>([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    setSlice([...sliceData(data, page, rowsPerPage)]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
