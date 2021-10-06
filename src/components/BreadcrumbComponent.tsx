import { Breadcrumb } from "antd";

const BreadcrumbComponent = (props: any) => {
  const item = props.list.map((node: any) => (
    <Breadcrumb.Item>{node.name}</Breadcrumb.Item>
  ));
  // console.log(props);
  // console.log(props.list);
  return (
    <Breadcrumb separator=" - ">
      <Breadcrumb.Item>root</Breadcrumb.Item>
      {item}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
