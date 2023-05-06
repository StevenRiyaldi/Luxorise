import axios from "axios";
import "./Profile.css";
import { uploadImages } from "../addProduct/imageHelper";
import { useContext, useState } from "react";
import ProfileContext from "../context/profileContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState();
  const [profile, setProfile] = useState({
    nama: "",
    alamat: "",
    notelp: "",
  });
  const { setUserProfile } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleClick = async () => {
    const imageUrl = await uploadImages([image]);
    const respond = await axios.post(
      "http://localhost/luxorise/server/client/profile.php",
      { ...profile, image: imageUrl[0], userId: localStorage.getItem("userId") }
    );

    setUserProfile(profile);
    navigate("/");
  };

  return (
    <div className="container-profile">
      <div className="profile">
        <div className="left">
          <img src={`${process.env.PUBLIC_URL}/images/no-profile.png`} alt="" />
          <div className="file">
            {image ? (
              <img
                src={
                  image
                    ? typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                    : undefined
                }
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <></>
            )}
            <input type="file" accept="image/*" onChange={handleChangeImage} />
          </div>
          <button id="button" onClick={handleClick}>
            Save
          </button>
        </div>
        <div className="right">
          <form action="POST">
            <label for="name">Nama</label>
            <input
              type="text"
              id="name"
              value={profile.nama}
              onChange={handleChange}
              name="nama"
            />
            <label for="address">Alamat</label>
            <input
              type="text"
              id="address"
              value={profile.alamat}
              onChange={handleChange}
              name="alamat"
            />
            <label for="phone-number">Nomor Telepon</label>
            <input
              type="text"
              id="phone-number"
              value={profile.notelp}
              onChange={handleChange}
              name="notelp"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
