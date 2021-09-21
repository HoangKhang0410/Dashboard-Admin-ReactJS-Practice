import "./newUser.css";
import {useState, useRef} from 'react';
import {useGlobalContext} from '../../context';
export default function NewUser() {
  const {addPerson} = useGlobalContext();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [active, setActive] = useState(true);
  const maleCheckbox = useRef(null);
  const femaleCheckbox = useRef(null);
  const otherCheckbox = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && fullName && email && phone && address && gender) {
      const id = new Date().getTime().toString();
      const newPerson = {
        id,
        username,
        password,
        fullName,
        email,
        phone,
        address,
        gender,
        status: active ? 'active' : 'passive',
        transaction: '$120.00',
        avatar: gender === 'male' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91H6z1N5bsQp9zLFm6d_J0Pq34wrhAXR3w0dLBg2a45eWCsKiLsyT5zNKNZ1N11SFtIA&usqp=CAU' : 
        gender === 'female' ? 'https://cdn-icons-png.flaticon.com/128/168/168886.png' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UUkI2Z-Xxht50QihMGLVuDxnewvVtebTSw&usqp=CAU'
        ,
      }
      console.log(newPerson);
      addPerson(newPerson);
      setUsername('');
      setPassword('');
      setEmail('');
      setPhone('');
      setAddress('');
      setFullName('');
      setGender('');
      setActive(true);
      // maleCheckbox.current.removeAttribute('checked');
      // femaleCheckbox.current.removeAttribute('checked');
      // otherCheckbox.current.removeAttribute('checked');
    }
    else{
      alert('You must fill out the form');
    }
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit} >
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" name="username" placeholder="john" value={username} onChange={(e)=> setUsername(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="John Smith" value={fullName} onChange={(e)=> setFullName(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+1 123 456 78" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender" >
            <input type="radio" ref={maleCheckbox} name="gender" id="male" value="male" onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="male">Male</label>
            <input type="radio" ref={femaleCheckbox} name="gender" id="female" value="female" onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="female">Female</label>
            <input type="radio" ref={otherCheckbox}  name="gender" id="other" value="other" onChange={(e)=>setGender(e.target.value)} />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" value={active} onChange={(e)=>setActive(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>
    </div>
  );
}