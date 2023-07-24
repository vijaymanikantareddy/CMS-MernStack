import logo from './logo.svg';
import './App.css';
import Home from './components/home_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Routes,Route,Link} from 'react-router-dom';
import DashBoard from './components/dashboard';
import Complaint_Form from './components/complaints_form';
import Complaint_List from './components/complaint_list';
import Work_assign from './components/work_assign';
import Work_assign_list from './components/work_assign_list';
import Reports from './components/report';
import Login from './components/Login';
import Register from './components/register';
import UserComplaint_List from './components/usercomplaint_list';
import UserComplaint_Form from './components/usercomplaints_form';
import UserDashBoard from './components/userdashboard';
import UserNavbar from './components/usernavbar';
import UserRegistrationForm from './components/userregistration-form';
import UserReport from './components/userrepo';
import Signup from './components/Signup';
import Navigation from './components/Navigation';
// import ReportPage from './components/check';


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/usercomplaint_list' element={<UserComplaint_List/>}/>
        <Route path='/usercomplaints_form' element={<UserComplaint_Form/>}/>
        <Route path='/userdashboard' element={<UserDashBoard/>}/>
        <Route path='/usernavbar' element={<UserNavbar/>}/>
        <Route path='/userregistrationform' element={<UserRegistrationForm/>}/>
        <Route path='/userreport' element={<UserReport/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/complaint_form" element={<Complaint_Form/>}/>
        <Route path="/complaint_List" element={<Complaint_List/>}/>
        <Route path="/work_assign" element={<Work_assign/>}/>
        <Route path="/work_assign_list" element={<Work_assign_list/>}/>
        <Route path="/report" element={<Reports/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/navi" element={<Navigation/>}/>
                {/* <Route path='/check' element={<ReportPage/>}/> */}
     </Routes>
    {/* <DashBoard/> */}
    {/* <Complaint_Form/> */}

            
    </>
  );
}

export default App;
