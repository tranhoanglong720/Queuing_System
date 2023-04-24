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
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
