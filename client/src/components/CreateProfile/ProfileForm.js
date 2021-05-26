import { React, useState, useEffect } from "react";
import { Auth } from 'aws-amplify';

const ProfileForm = ({username, email,}) => {
    let [cognitoUser, setCognitoUser] = useState({});
  useEffect(() => {

    Auth.currentAuthenticatedUser({
        bypassCache: true  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        console.log(user);
        setCognitoUser(user)})
        .catch(err => console.log(err));
}, []);

let cabbage = { _id:{ $oid:"6099473a3716ae2600f2937c"} , name:"Cabbage",image_url:"https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=Y4TSs3Lx", type:"Vegetable", sun :"Full Sun", hardiness:["1","2","3","4","5","6","7","8","9"]};
    

    return (
        <div>
            <form action="/api/createuser" method="POST" id="createUserForm" >
                <input name="userName" type="hidden" value={!cognitoUser.attributes ? "Stand By..." : cognitoUser.attributes.nickname}></input>
                <input name="email" type="hidden" value={!cognitoUser.attributes ? "Stand By..." : cognitoUser.attributes.email}></input>
                <input name="garden" type="hidden" value={[cabbage]}></input>
                <div className="buttonPosition">
                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="zone">
                    <option defaultValue>What hardiness zone do you live in?</option>
                    <option value="1">Zone 1</option>
                    <option value="2">Zone 2</option>
                    <option value="3">Zone 3</option>
                    <option value="4">Zone 4</option>
                    <option value="5">Zone 5</option>
                    <option value="6">Zone 6</option>
                    <option value="7">Zone 7</option>
                    <option value="8">Zone 8</option>
                    <option value="9">Zone 9</option>
                    <option value="10">Zone 10</option>
                    <option value="11">Zone 11</option>
                    <option value="12">Zone 12</option>
                    <option value="13">Zone 13</option>
                </select>
                <button className="userSubmitBtn userSubmitBtn3" type="submit" ><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}

export default ProfileForm
