import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import EditForm from "./AdminPanel/EditForm/EditForm"
import HintMessage from "./AdminPanel/EditForm/HintMessage"
import AddForm from "./AdminPanel/AddForm/AddForm"
import { TabLabelEnum } from "../../../../../reusable-ui/Tab"

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    index: "add",
    label: TabLabelEnum.ADD_PPRODUCT,
    Icon: <AiOutlinePlus />,
    Content: <AddForm />,
  },
  {
    index: "edit",
    label: TabLabelEnum.EDIT_PRODUCT,
    Icon: <MdModeEditOutline />,
    Content: hasAlreadyBeenClicked ? <EditForm /> : <HintMessage />,
  },
]

export const getTabSelected = (tabs, currentTabSelected) => {
  return tabs.find((tab) => tab.index === currentTabSelected)
}
