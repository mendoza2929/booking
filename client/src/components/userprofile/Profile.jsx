import { useState, useContext } from "react";
import axios from 'axios';
import { Tabs } from 'antd';
import 'antd/dist/antd.css'; 
import Header from '../common/header/Header';
// import Footer from '../home/footer/Footer'
// import useFetch from '../../components/hooks/useFetch'
import { AuthContext } from '../../context/AuthContext'
import "./profile.css";




const { TabPane } = Tabs;
const Profile = () => {
    // const { data, loading, error } = useFetch(`/profile`);
    const { user } = useContext(AuthContext);
    const [passwordUpdate, setPasswordUpdate] = useState(
        { password: '', confirmPassword: ''}
    );
  
    // useEffect(() => {
    //     setList(data);
    //   }, [data]);


    //   useEffect(()=>{
    //     localStorage.setItem("user",JSON.stringify(data))
    // },[data])

      console.log("USER DATA", user.username);

  const handleChange = (event) => {
    setPasswordUpdate({...passwordUpdate, [event.target.name]: event.target.value})
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('UserID Update',user._id)
        console.log('Updated at',user.updatedAt)
        axios.put(`/users/${user._id}`, passwordUpdate)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
        }

  return (
    <>

    <Header/>
    <div className='antTab'>
    <Tabs defaultActiveKey="1">
    <TabPane tab="Profile" key="1">
      <h1>My Profile</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" readOnly/>{user.username} <br></br>
        <label for="email">Email</label>
        <input type="email" id="email" name="email"readOnly/> {user.email}<br></br>
        <label for="password">Last Password</label>
        <input type="password" id="password" name="password"/> {user.updatedAt} <br></br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={handleChange} value={passwordUpdate.password}/><br></br>
        <label for="confirmPassword">Confirm Password</label> 
        <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={passwordUpdate.confirmPassword}/><br></br>
        <button type="submit">Update</button>
        </form>
    </TabPane>
    <TabPane tab="Booking" key="2">
        <h1>My Bookings</h1>

    </TabPane>
  </Tabs>
  </div>
  {/* <Footer/> */}

  </>
);

}

export default Profile