import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../config/fbConfig";

const useProfile = () => {
  const [url, setUrl] = useState(null);
  const { auth } = useSelector((state) => state.firebase);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("users")
      .doc(auth.uid)
      .onSnapshot((snap) => {
        setUrl(snap.data().url);
      });

    return () => unsub();

    // eslint-disable-next-line
  }, []);

  return url;
};

export default useProfile;
