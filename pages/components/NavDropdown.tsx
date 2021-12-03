import { Menu as AntDMenu, Dropdown as AntDDropdown } from "antd";

const menu = (
  <AntDMenu>
    <AntDMenu.Item key="logout">
      <a>Permission</a>
    </AntDMenu.Item>
    <AntDMenu.Divider />
    <AntDMenu.Item key="permission">
      <a>Logout</a>
    </AntDMenu.Item>
  </AntDMenu>
);

const NavDropdown = () => {
  return (
    <AntDDropdown overlay={menu} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>Click me</a>
    </AntDDropdown>
  );
};

export default NavDropdown;
