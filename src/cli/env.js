const parseEnv = () => {
  let res = "";

  for (let i in process.env) {
    if (i.slice(0, 4) === "RSS_") {
      res += `${i}=${process.env[i]}; `;
    }
  }
  console.log(res.slice(0, -2));
};

parseEnv();
