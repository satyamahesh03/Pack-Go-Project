import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
const API_BASE_URL = 'http://localhost:6500/api/wishlist';


export const uploadData = async (newItem, token, setUserData) => {
  try {
    console.log(newItem);

    const response = await axios.post(
      `${API_BASE_URL}/add`,
      newItem,
      {
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    );

    console.log('Data uploaded:', response.data);

    setUserData(prevData => ({
      ...prevData,
      wishlist: response.data.wishlist || []
    }));

    toast.success("Item added to wishlist!");
    
    return response.data;
  } catch (error) {
    console.error('Error uploading data:', error);

    // ✅ Display backend error message or fallback to default
    toast.error(error.response?.data?.message || "Failed to add item to wishlist");
    
    throw error;
  }
};



export const AddwishListData = (newItem, setUserData) => {
  let updatedState;

  setUserData((prev) => {
    const wishlist = Array.isArray(prev?.wishlist) ? prev.wishlist : [];

    const isAlreadyInWishlist = wishlist.some(
      (item) => item.image === newItem.image && item.price === newItem.price
    );

    if (isAlreadyInWishlist) {
      console.log("Item already exists in wishlist");
      updatedState = prev; // Store the updated state
      return prev;
    }

    updatedState = {
      ...prev,
      wishlist: [...wishlist, newItem],
    };

    return updatedState;
  });

  return updatedState; // ✅ Return the updated state manually
};
