import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProfilePageForm = () => {
  const newProfilePage = {
    username: "",
    img: "",
    bio: ""
  }
    const [profile, setprofile] = useState(newProfilePage);
    const navigate = useNavigate()

    const handleChange = (index) => {
      setprofile({...profile, [index.target.name]: index.target.value})
  }
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8000/api/createprofilepage/', { profile })
        .then(res => {
          console.log(res);
          console.log(res.data);
        });
    };

    const handleCancel = () => {
      navigate('/profilepage')
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <input

          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="username"
        />
         <input
          type="text"
          name="img"
          value={profile.img}
          onChange={handleChange}
          placeholder="img"
        />
         <input
          type="text"
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          placeholder="bio"
        />
        <button type="submit">Create Profile Profile</button>
        <button onClick={handleCancel} >Cancel</button>
      </form>
    );
  };
  
  export default CreateProfilePageForm;