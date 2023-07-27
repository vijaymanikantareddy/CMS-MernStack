import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import UserNavi from "./components/Navipages/userNavi";
import AdminNavi from "./components/Navipages/adminNavi";
import UsersData from "./components/adminside/UsersData";
import AddUsers from "./components/adminside/AddUsers";
import Update from "./components/startingpages/update";
import Register from "./components/startingpages/register";
import ComplaintFormAd from "./components/adminside/ComplaintFormAd";
import ComplaintFormUs from "./components/userside/ComplaintFormUs";
import AllComplaints from "./components/adminside/AllComplaints";
import UpdateCompli from "./components/adminside/UpdateCompli";
import Login from "./components/startingpages/Login";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/update" element={<Update/>}/>
      <Route path="/user" element={<UserNavi/>}/>
      <Route path="/admin" element={<AdminNavi/>}/>
      <Route path="/user/complaintform" element={<ComplaintFormUs/>}/>
      <Route path="/admin/complaintform" element={<ComplaintFormAd/>}/>
      <Route path="/admin/userdata" element={<UsersData/>}/>
      <Route path="/admin/allcomplaints" element={<AllComplaints/>}/>
      <Route path="/admin/createuser" element={<AddUsers/>}/>
      <Route path="/admin/updatecomplaint" element={<UpdateCompli/>}/>
      <Route path="/*" element={<div>This Page Does not Exists</div>}/>
    </Routes>
      {/* <Routes>
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
        <Route path="/main" element={<Mainpage/>}/>
                {/* <Route path='/check' element={<ReportPage/>}/> */}
      {/* </Routes> */}
      {/* <DashBoard/> */}
      {/* <Complaint_Form/> */}
      {/* <BrowserRouter> */}
      {/* <AdminNavi/> */}
      {/* <UserNavi /> */}
      {/* <UsersData /> */}
      {/* <ComplaintForm/> */}
      {/* <AddUsers/> */}
      {/* <Register /> */}
      {/* <Update/> */}
      {/* <AllComplaints/> */}
      {/* <UpdateCompli/> */}
      {/* <Login/> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
