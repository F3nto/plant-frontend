import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddToWishList } from '../redux/store/actions/wishList';

const FavoriteModal = ({ openModal, closeModal }) => {

  const wishListFromRedux = useSelector(state => state.wishList);

  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log("Redux data from wishList...",wishListFromRedux)
  }, [wishListFromRedux]);

  if (!openModal) return null;

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0" style={{height:"100vh"}}>
      <div className="bg-white rounded-md shadow-lg max-w-md p-6 relative">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          X
        </button>
        <div className="content">
        {wishListFromRedux?.length > 0 ? (
          <ul>
            {wishListFromRedux.map((item, index) => (

              <div key={index}>
            
             <div className='text-black'>{item.plantName}</div>

             </div>
          
            ))}
          </ul>
        ) : (
          <p>No items in the wish list.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default FavoriteModal;