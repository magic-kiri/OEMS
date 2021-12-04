import { Dropdown as AntDDropdown } from "antd";
import { Menu as AntDMenu } from "antd";
const Item = AntDMenu.Item;

type ItemType = React.ComponentProps<typeof Item>&{
  key: string
}
//  type ItemType = {
//   key: string;
//   text: string;
//   onClick: () => void;
// };

type DropdownPropsType = React.ComponentProps<typeof AntDDropdown> & {
  items: ItemType[];
};

const renderMenu = (items: ItemType[]) => {
  console.log(items);
  return (
    <AntDMenu>
      {items.map(({ children, key, onClick }) => (
        <Item key={key} onClick={onClick}>{children}</Item>
      ))}
    </AntDMenu>
  );
};

const Dropdown = ({ children, items, ...props }: DropdownPropsType) => {
  return (

    <AntDDropdown {...props} overlay={renderMenu(items)}>
      {children}
    </AntDDropdown>
  );
};

export default Dropdown;
