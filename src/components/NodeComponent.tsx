import React, { useState } from "react";
import styled from "styled-components";
import { getRoot } from "api";

import file from "img/file.png";
import directory from "img/directory.png";

export type nodeInfo = {
  id: number;
  name: string;
  type: string;
  filePath: string | null;
  parent: number | null;
};

const NodeComponent = () => {
  const [nodeList, setNodeList] = useState<nodeInfo[]>([]);
  React.useEffect(() => {
    getRoot()
      .then((response: any) => {
        console.log("response: " + JSON.stringify(response));
        setNodeList(response.data);
      })
      .catch((error: Error) => {
        console.log("error: " + error);
      });
  }, []);
  console.log("nodeList: " + JSON.stringify(nodeList));

  const item = nodeList.map((node: any) => {
    if (node.type === "DIRECTORY")
      return (
        <Node>
          <Img src={directory} />
          {node.name}
        </Node>
      );
    if (node.type === "FILE")
      return (
        <div>
          <Img src={file} />
          {node.name}
        </div>
      );
  });

  return <div style={{ display: "flex" }}>{item}</div>;
};

export default NodeComponent;

const Node = styled.div`
  padding: 1rem;
`;

const Img = styled.img`
  display: block;
  width: 10vw;
`;
