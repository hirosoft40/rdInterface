function FetchData(state, action) {
  let dtime = [], // time (x coordinates)
    pAnn = [], // annular pressure (0)
    pWH = [], // wellhead pressure (1)
    pDS = [], // ds of choke pressure (2)
    pSep = [], // separator pressure (3)
    pDiff = [], // differential pressure (4)
    gasTemp = [], // gas temperature (5)
    gasRate = [], // gas rate (6),
    waterRate = [], // water rate (7)
    oilRate = [], // oil rate (8)
    cumWater = [], // cumulative water (9)
    cumOil = [], // cumalative oil (10)
    gasPrevint = [], // gasPrevint (11)
    level_w = [], // water level (12)
    level_o = [], // oil level (13)
    vol_w = [], // water volume (14)
    vol_o = [], // oil volume (15)
    choke = [], // choke (16)
    gasGravity = [], // gas gravity (17)
    oilGravity = [], // oil gravity (18)
    shrinkage = [], // shrinkage (19)
    chlorides = []; // chlorides (20)

  if (state === undefined) {
    return {
      header: [],
      data: []
    };
  }

  switch (action.type) {
    case "FETCH_TABLE_DATA":
      return { ...state, ...finalData };

    case "FETCH_GRAPH_DATA":
      return Object.assign({}, state, {
        data: state.data.map(item => {
          const { time, vals } = item;
          dtime.push(time);
          pAnn.push(vals[0]);
          pWH.push(vals[1]);
          pDS.push(vals[2]);
          pSep.push(vals[3]);
          pDiff.push(vals[4]);
          gasTemp.push(vals[5]);
          gasRate.push(vals[6]);
          waterRate.push(vals[7]);
          oilRate.push(vals[8]);
          cumWater.push(vals[9]);
          cumOil.push(vals[10]);
          gasPrevint.push(vals[11]);
          level_w.push(vals[12]);
          level_o.push(vals[13]);
          vol_w.push(vals[14]);
          vol_o.push(vals[15]);
          choke.push(vals[16]);
          gasGravity.push(vals[17]);
          oilGravity.push(vals[18]);
          shrinkage.push(vals[19]);
          chlorides.push(vals[20]);
        })
      });
  }
}
