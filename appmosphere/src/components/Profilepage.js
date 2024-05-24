import React from "react";
import axios from 'axios';


class Profilepage extends React.Component {
    state = {
        profilepages: []
    };
componentDidMount() {
    axios.get('http://localhost:8000/api/profilepage/')
    .then(res => {
        const profilepages = res.data;
        this.setState({ profilepages });
    });
}
render() {
    return (
        <div>
            {this.state.profilepages.map(profilepage => (
                <div key={profilepage.username}>
                    <img src={profilepage.img}/>
                    <h1>{profilepage.username} </h1>
                    <div>{profilepage.bio}</div>
                    <h1>posts</h1>
                    <h1>followers</h1>
                    <h1>following</h1>
                    </div>
            ))}
        </div>
    )
}
}

export default Profilepage;