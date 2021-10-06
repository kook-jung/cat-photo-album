import { getRoot } from "api";

const NodeComponent = () => {
  const nodeAtRoot = getRoot();

  console.log("nodeAtRoot: " + JSON.stringify(nodeAtRoot));
  console.log("nodeAtRoot: " + JSON.stringify(nodeAtRoot));
  return <div>NodeComponent</div>;
};

export default NodeComponent;
