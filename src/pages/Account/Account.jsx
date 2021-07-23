import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { logoutAction } from "../../store/actions/authAction";
import "./Account.scss";
import { MdPhotoCamera } from "react-icons/md";
import updateProfileAction from "../../store/actions/updateProfileAction";
import Avatar from "../../assets/avatar.png";
import useProfile from "../../Hooks/useProfile";
import LoadingSpinnder from "../../Components/LoadingSpiner/LoadingSpiner";
import getfavaritesAction from "../../store/actions/getfavariteAction";
import { request } from "../../Services/request";
import randomAction from "../../store/actions/randomAction";

const Account = () => {
  // Globe State
  const { randomData } = useSelector((state) => state.random);
  const { isUploaded } = useSelector((state) => state.uploadProfile);
  const { auth, profile } = useSelector((state) => state.firebase);
  const { favarites } = useSelector((state) => state.getfavarites);

  // Backdrop Image
  const cover = randomData.backdrop_path
    ? `${request.IMG_URL}/${randomData.backdrop_path}`
    : `${request.NO_IMG_LAND}`;

  // Dispatch
  const dispatch = useDispatch();

  // Custom Hook for getting Profile URL
  const url = useProfile();

  // Logout
  const handleSubmit = () => {
    dispatch(logoutAction());
    return <Redirect to="/login" />;
  };

  // Profile Upload
  const uploadImage = (e) => {
    if (e.target.files[0].type === "image/jpeg") {
      dispatch(updateProfileAction(e.target.files[0]));
    }
  };

  useEffect(() => {
    document.title = "Moviehub - Account";
    window.scroll(0, 0);
    dispatch(getfavaritesAction(auth.uid));
    dispatch(randomAction());
    // eslint-disable-next-line
  }, []);

  // Routing guard
  if (!auth.uid) {
    return <Redirect to="/login" />;
  }

  return (
    <header
      className="accountHeader"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div className="accountHeader__container">
        <div className="accountHeader__profile">
          <div className="accountHeader__profile--img">
            <img src={url ? url : Avatar} alt="profile" />
          </div>

          <input
            type="file"
            id="file"
            className="accountHeader__profile--file"
            onChange={uploadImage}
          />
          <label htmlFor="file" className="accountHeader__profile--label">
            <MdPhotoCamera />
          </label>
        </div>

        <div className="accountHeader__profile--info">
          <h1>{profile.userName}</h1>
        </div>
      </div>
    </header>
  );
};

export default Account;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router";
// import { logoutAction } from "../../store/actions/authAction";
// import "./Account.scss";
// import { MdPhotoCamera } from "react-icons/md";
// import updateProfileAction from "../../store/actions/updateProfileAction";
// import Avatar from "../../assets/avatar.png";
// import useProfile from "../../Hooks/useProfile";
// import LoadingSpinnder from "../../Components/LoadingSpiner/LoadingSpiner";
// import getfavaritesAction from "../../store/actions/getfavariteAction";
// import { request } from "../../Services/request";

// const Account = () => {
//   const dispatch = useDispatch();
//   const { isUploaded } = useSelector((state) => state.uploadProfile);
//   const { auth, profile } = useSelector((state) => state.firebase);
//   const { favarites } = useSelector((state) => state.getfavarites);
//   const url = useProfile();

//   // Logout
//   const handleSubmit = () => {
//     dispatch(logoutAction());
//     return <Redirect to="/login" />;
//   };

//   // Profile Upload
//   const uploadImage = (e) => {
//     if (e.target.files[0].type === "image/jpeg") {
//       dispatch(updateProfileAction(e.target.files[0]));
//     }
//   };

//   useEffect(() => {
//     document.title = "Moviehub - Account";
//     window.scroll(0, 0);
//     dispatch(getfavaritesAction(auth.uid));
//     // eslint-disable-next-line
//   }, []);

//   // Routing guard
//   if (!auth.uid) {
//     return <Redirect to="/login" />;
//   }

//   return (
//     <>
//       <div
//         className="account"
//         style={{
//           filter: isUploaded ? "blur(4px)" : "blur(0px)",
//         }}
//       >
//         <div className="account__progressbar"></div>
//         <div className="account__container">
//           <div className="account__columnOne">
//             <div className="account__profile" id="profile">
//               <img
//                 src={url ? url : Avatar}
//                 alt="profile"
//                 className="account__profile--img"
//               />
//               <input
//                 type="file"
//                 id="file"
//                 className="account__profile--file"
//                 onChange={uploadImage}
//               />
//               <label
//                 htmlFor="file"
//                 className="account__profile--upload"
//                 id="upload"
//               >
//                 {<MdPhotoCamera />}
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%,-50%)",
//           display: isUploaded ? "block" : "none",
//           // zIndex: "10000",
//         }}
//       >
//         <LoadingSpinnder />
//       </div>
//     </>
//   );
// };

// export default Account;
