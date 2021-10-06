import { BreadcrumbComponent, NodeComponent } from "components";
import { nodeList } from "components/nodeList";

function MainPage() {
  console.log("Main Page");
  console.log("value: " + nodeList);
  return (
    <>
      <BreadcrumbComponent list={nodeList} />
      <NodeComponent />
    </>
  );
}

export default MainPage;
