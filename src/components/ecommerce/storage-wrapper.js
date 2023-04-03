import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import storage from "../../util/localStorage";
// import { initLocalStorage } from "../../features/localStorage/localStorageSlice";

const StorageWrapper = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cart = storage.get("dokani_cart") || [];
    const wishlist = storage.get("dokani_wishlist") || [];
    // const compare = storage.get("dokani_compare") || [];

    const storedItems = {
      cart,
      wishlist,
      //  compare
    };

    dispatch({
      type: "initLocalStorage",
      payload: { ...storedItems },
    });
  }, [dispatch]);

  return <>{props.children}</>;
};

// export default connect(null, { saveStoredItems })(StorageWrapper);
export default StorageWrapper;
