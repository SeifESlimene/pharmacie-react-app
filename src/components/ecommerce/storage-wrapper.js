import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import storage from "../../util/localStorage";
// import { initLocalStorage } from "../../features/localStorage/localStorageSlice";

const StorageWrapper = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cart = storage.get("dokani_cart") || [];
    const wishList = storage.get("dokani_wishlist") || [];
   // debugger
    // const compare = storage.get("dokani_compare") || [];

    const storedItems = {
      cart,
      wishList,
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
