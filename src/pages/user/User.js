import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import "./user.css";
  import {useParams} from "react-router-dom";
  import {useGlobalContext} from '../../context';
  import {useState} from 'react';
  
  export default function User() {

    const {userId} = useParams();
    const {people, updatePerson} = useGlobalContext();
    const personTarget = people.find(person => parseInt(person.id) === parseInt(userId));
    const {username, email, fullName, phone, address} = personTarget;
    console.log(personTarget);
    const [UserName, setUserName] = useState(username);
    const [Email, setEmail] = useState(email);
    const [FullName, setFullName] = useState(fullName);
    const [Phone, setPhone] = useState(phone);
    const [Address, setAddress] = useState(address);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (UserName && Email && FullName && Phone && Address){
        const newPerson = {
          username: UserName,
          email: Email,
          fullName: FullName,
          phone: Phone,
          address: Address,
        }
        updatePerson(userId, newPerson);
        setUserName('');
        setEmail('');
        setFullName('');
        setPhone('');
        setAddress('');
      }else{
        alert('you must fill out the form');
      }

    }

    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{FullName}</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{UserName}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+{Phone}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{Email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{Address}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm" onSubmit={handleSubmit}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                    value={UserName}
                    onChange={(e)=>setUserName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                    value={FullName}
                    onChange={(e)=>setFullName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                    value={Phone}
                    onChange={(e)=>setPhone(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                    value={Address}
                    onChange={(e)=>setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton" type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }