export const receiveData = item => {
  return {
    type: "FETCH_DATA",
    header: item.header,
    data: item.data,
    pAnn: item.data.vals[0],
    pWH: item.data.vals[1],
    pDS: item.data.vals[2],
    pSep: item.data.vals[3],
    pDiff: item.data.vals[4],
    gasTemp: item.data.vals[5],
    gasRate: item.data.vals[6],
    waterRate: item.data.vals[7],
    oilRate: item.data.vals[8],
    cumWater: item.data.vals[9],
    cumOil: item.data.vals[10],
    gasPrevint: item.data.vals[11],
    level_w: item.data.vals[12],
    level_o: item.data.vals[13],
    vol_w: item.data.vals[14],
    vol_o: item.data.vals[15],
    choke: item.data.vals[16],
    gasGravity: item.data.vals[17],
    oilGravity: item.data.vals[18],
    shrinkage: item.data.vals[19],
    chlorides: item.data.vals[20]
  };
};
