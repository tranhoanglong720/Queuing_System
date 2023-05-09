import Login from "../pages/login/Login";
import ForgetPassWordCheck from "../pages/forgetpasswordcheck/ForgetPassWordCheck";
import ForgetPassWord from "../pages/forgetpassword/ForgetPassWord";
import InForPerSon from "../pages/infoperson/InForPerSon";
import Dash from "../pages/dash/Dash";
import Device from "../pages/device/Device";
import Service from "../pages/service/Service";
import Level from "../pages/level/Level";
import Report from "../pages/report/Report";
import ManagerRule from "../pages/managerrule/ManagerRule";
import ManagerDiary from "../pages/managerdiary/ManagerDiary";
import ManagerAcount from "../pages/manageracount/ManagerAcount";
import AddDevice from "../pages/adddevice/AddDevice";
import DeviceDetail from "../pages/devicedetail/DeviceDetail";
import DeviceUpdate from "../pages/deviceupdate/DeviceUpdate";
import ServiceAdd from "../pages/serviceadd/ServiceAdd";
import ServiceDetail from "../pages/servicedetail/ServiceDetail";
import ServiceUpdate from "../pages/serviceupdate/ServiceUpdate";
import LevelAdd from "../pages/leveladd/LevelAdd";
import LevelDetail from "../pages/leveldetail/LevelDetail";
import ManagerRuleAdd from "../pages/managerruleadd/ManagerRuleAdd";
import ManagerRuleUpdate from "../pages/managerruleupdate/ManagerRuleUpdate";
import ManagerAcountAdd from "../pages/manageraccountadd/ManagerAccountAdd";
import ManagerAcountUpdate from "../pages/manageraccountaupdate/ManagerAccountUpdate";

const publicRoutes = [
  { path: "/", component: Login },
  { path: "/forgetpasswordcheck", component: ForgetPassWordCheck },
  { path: "/forgetpassword", component: ForgetPassWord },
  { path: "/inforperson", component: InForPerSon },
  { path: "/dash", component: Dash },
  { path: "/device", component: Device },
  { path: "/service", component: Service },
  { path: "/level", component: Level },
  { path: "/report", component: Report },
  { path: "/managerrule", component: ManagerRule },
  { path: "/managerdiary", component: ManagerDiary },
  { path: "/manageracount", component: ManagerAcount },
  { path: "/adddevice", component: AddDevice },
  { path: "/devicedetail", component: DeviceDetail },
  { path: "/deviceupdate", component: DeviceUpdate },
  { path: "/serviceadd", component: ServiceAdd },
  { path: "/servicedetail", component: ServiceDetail },
  { path: "/serviceupdate", component: ServiceUpdate },
  { path: "/leveladd", component: LevelAdd },
  { path: "/leveldetail", component: LevelDetail },
  { path: "/managerruleadd", component: ManagerRuleAdd },
  { path: "/managerruleupdate", component: ManagerRuleUpdate },
  { path: "/manageraccountadd", component: ManagerAcountAdd },
  { path: "/manageraccountupdate", component: ManagerAcountUpdate },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
