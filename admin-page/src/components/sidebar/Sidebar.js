import "./Sidebar.css";
import logo from "../../assets/logo.jpg"
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import BuildIcon from '@material-ui/icons/Build';
import ArchiveIcon from '@material-ui/icons/Archive';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
           <div className="sidebar__title">
               <div className="sidebar__img">
                   <img src={logo} alt="logo" />
                   <h1>Organization</h1>
                   
                   <i id="sidebarIcon" onClick={() => closeSidebar()}>
                   <ClearIcon />
                   </i>
                  
               </div>
           </div>

           <div className="sidebar__menu">
               <div className="sidebar__link active_menu_link">
                  <i>
                      <HomeIcon />
                  </i>
                  <a href="#">Dashboard</a>
               </div>
               <h2>MNG</h2>
               <div className="sidebar__link">
                   <i>
                      <SupervisorAccountIcon />
                   </i>
                   <a href="#">Admin Management</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <BusinessIcon />
                   </i>
                   <a href="#">Company Management</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <BuildIcon />
                   </i>
                   <a href="#">Employee Management</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <ArchiveIcon />
                   </i>
                   <a href="#">Warehouse</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <ThumbUpAltIcon />
                   </i>
                   <a href="#">Contracts</a>
               </div>
               <h2>LEAVE</h2>
               <div className="sidebar__link">
                   <i>
                      <LiveHelpIcon />
                   </i>
                   <a href="#">Requests</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <ExitToAppIcon />
                   </i>
                   <a href="#">Leave Policy</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <DateRangeIcon />
                   </i>
                   <a href="#">Special Days</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <FileCopyIcon />
                   </i>
                   <a href="#">Apply for Leave</a>
               </div>
               <h2>PAYROLL</h2>
               <div className="sidebar__link">
                   <i>
                      <AccountBalanceWalletIcon />
                   </i>
                   <a href="#">Payroll</a>
               </div>
               <div className="sidebar__link">
                   <i>
                      <BusinessCenterIcon />
                   </i>
                   <a href="#">Paygrade</a>
               </div>
               <div className="sidebar__logout">
                   <i>
                      <PowerSettingsNewIcon />
                   </i>
                   <a href="#">Log out</a>
               </div>
           </div>
        </div>

    )
}
export default Sidebar;