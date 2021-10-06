import axios from "axios";

async function getRoot() {
  const resultData = await axios
    .get("https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev")
    .then((response: any) => {
      console.log("response: " + JSON.stringify(response));
    })
    .catch((error: Error) => {
      console.log("error: " + error);
    });

  return resultData;
}
export default getRoot;
