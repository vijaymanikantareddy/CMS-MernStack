import axios from 'axios';
import React, {useState} from 'react'
import '../styles/registyle.css';

function AddUsers() {
    const [inputData, setInputData] = useState({email:'', type:'', password:''})
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:5000/register', inputData)
        .then(res =>{
            alert("Data Added Successfully");
        })
        .catch(err => console.log("Error in Adding"))
    }
    
    return (
    
    <div className='container'>
  <div className='row justify-content-center'>
    <div className='col-md-6 col-lg-4 border bg-light p-5 mt-5 mb-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email'>Email: </label>
          <input type='text' name="email" className='form-control' onChange={e => setInputData({...inputData, email: e.target.value})}/>
        </div>
        <div className='mb-3'>
      <label htmlFor='password'>Password: </label>
      <div className='input-group'>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          className='form-control'
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary indigo"
          onClick={togglePasswordVisibility}
        >
          <i> {showPassword? 'Hide': 'Show'}</i>
        </button>
      </div>
    </div>
        <div className='mb-3'>
          <label htmlFor='type'>Type: </label>
          <select name="type" className='form-control' onChange={e => setInputData({...inputData, type: e.target.value})}>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <br/>
        <button type='submit' className='btn btn-info'>Add User</button>
      </form>
    </div>
  </div>
</div>
  )
}

export default AddUsers