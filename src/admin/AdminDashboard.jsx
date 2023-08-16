import React, { useState } from "react";
import axios from "axios";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlowerPagination from "../components/Paginate/FlowerPagination";
import FruitePagination from "../components/Paginate/FruitPagination";
import RawPagination from "../components/Paginate/RawPagination";
import IndoorPagination from "../components/Paginate/IndoorPagination";
import { ArrowBack, Delete } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import {useSelector} from "react-redux"
import {List} from "@mui/icons-material"
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = () => {
  const [isClickFlower, setIsClickFlower] = useState(false);
  const [isClickFruit, setIsClickFruit] = useState(false);
  const [isClickRaw, setIsClickRaw] = useState(false);
  const [isClickIndoor, setIsClickIndoor] = useState(false);
  const [isClickOrder, setIsClickOrder] = useState(false);

  const [showInputForm, setShowInputForm] = useState(false);
  const [showFruitInputForm, setShowFruitInputForm] = useState(false);
  const [showRawMatInputForm, setShowRawMatInputForm] = useState(false);
  const [showIndoorInputForm, setShowIndoorInputForm] = useState(false);

  const voucherData = useSelector((state) => state.setCheckoutData);
  console.log("voucher data ...", voucherData)

  const [newItem, setNewItem] = useState({
    name: "",
    subImg: "",
    price: "",
    quantity : "",
    type: "",
    
    moreDetail: {
      description: "",
      subImg1: "",
      subImg2: "",
      subImg3: "",
      light: "",
      soil: "",
      water: "",
      temp: "",
      fertilizer: "",
    },
  });

  const [newFruitItem, setNewFruitItem] = useState({
    name: "",
    subImg: "",
    price: "",
    quantity : "",
    type: "",
    moreDetail: {
      description: "",
      subImg1: "",
      light: "",
      soil: "",
      water: "",
      temp: "",
      fertilizer: "",
    },
  });

  const [newRawMatItem, setNewRawMatItem] = useState({
    name: "",
    subImg: "",
    price: "",
    quantity : "",
    type: "",
    moreDetail: {
      description: "",
      subImg1: "",
      light: "",
      soil: "",
      water: "",
      temp: "",
      fertilizer: "",
    },
  });

  const [newIndoorItem, setNewIndoorItem] = useState({
    name: "",
    subImg: "",
    price: "",
    quantity : "",
    type: "",
    moreDetail: {
      img1: "",
      light: "",
      soil: "",
      water: "",
      temp: "",
      fertilizer: "",
    },
  });

  // catch data
  const [flower, setFlower] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [raw, setRaw] = useState([]);
  const [indoor, setIndoor] = useState([]);

  const [flowerCurrentPage, setFlowerCurrentPage] = useState(1);
  const [fruitCurrentPage, setFruitCurrentPage] = useState(1);
  const [rawCurrentPage, setRawCurrentPage] = useState(1);
  const [indoorCurrentPage, setIndoorCurrentPage] = useState(1);

  const navigate = useNavigate();

  const itemPerPage = 9;

  const lastIndexForFlower = flowerCurrentPage * itemPerPage;
  const lastIndexForFruit = fruitCurrentPage * itemPerPage;
  const lastIndexForRaw = rawCurrentPage * itemPerPage;
  const lastIndexForIndoor = indoorCurrentPage * itemPerPage;

  const firstIndexForFlower = lastIndexForFlower - itemPerPage;
  const firstIndexForFruit = lastIndexForFruit - itemPerPage;
  const firstIndexForRaw = lastIndexForRaw - itemPerPage;
  const firstIndexForIndoor = lastIndexForIndoor - itemPerPage;

  const flowerCurrentPosts = flower.slice(
    firstIndexForFlower,
    lastIndexForFlower
  );
  const fruitCurrentPosts = fruit.slice(firstIndexForFruit, lastIndexForFruit);
  const rawCurrentPosts = raw.slice(firstIndexForRaw, lastIndexForRaw);
  const indoorCurrentPosts = indoor.slice(
    firstIndexForIndoor,
    lastIndexForIndoor
  );

  const handleFlower = () => {
    setIsClickFlower(true);
    setIsClickFruit(false);
    setIsClickRaw(false);
    setIsClickOrder(false)
    setIsClickIndoor(false);

    const url = "http://localhost:3001/api/v1/flower";
    axios
      .get(url)
      .then((res) => {
        setFlower(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToUpdateFlower = () => {

    if(newItem.name && newItem.price && newItem.type && newItem.moreDetail.description && newItem.moreDetail.light !== ""){
    axios
      .post("http://localhost:3001/api/v1/flower", newItem)
      .then((res) => {
        console.log(res.data);
        toast.success("Admin added plant succefully!")
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    } else {
      toast.error("Please fill all field!!!")

    }
  };

  const handleDeleteFlower = (item) => {
    
    axios.delete(`http://localhost:3001/api/v1/flower/${item._id}`)
    .then(response => {
     
    toast.success("Deleted Plant Successfully!!!")
    })
  .catch(error => {
  console.error('Error deleting flower:', error);
 
  });
  }

  const handleFruit = () => {
    setIsClickFlower(false);
    setIsClickFruit(true);
    setIsClickRaw(false);
    setIsClickIndoor(false);
    setIsClickOrder(false);

    const url = "http://localhost:3001/api/v1/fruit";
    axios
      .get(url)
      .then((res) => {
        setFruit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToUpdateFruit = () => {
    if(newFruitItem.name && newFruitItem.price && newFruitItem.type && newFruitItem.moreDetail.description && newFruitItem.moreDetail.light !== ""){
    axios
      .post("http://localhost:3001/api/v1/fruit", newFruitItem)
      .then((res) => {
        console.log(res.data);
        toast.success("Admin added plant succefully!")
      })
      .catch((err) => {
        console.log("Error:", err);

      });
    }else{
      toast.error("Please fill all field!!!")

    }
  };

  const handleDeleteFruit = (item) => {
    axios.delete(`http://localhost:3001/api/v1/fruit/${item._id}`)
    .then(response => {
     
    toast.success("Deleted Plant Successfully!!!")
    })
  .catch(error => {
  console.error('Error deleting flower:', error);
 
  });

  }

  const handleRaw = () => {
    setIsClickFlower(false);
    setIsClickFruit(false);
    setIsClickRaw(true);
    setIsClickIndoor(false);
    setIsClickOrder(false);

    const url = "http://localhost:3001/api/v1/industiral-raw-material";
    axios
      .get(url)
      .then((res) => {
        setRaw(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToUpdateRawMat = () => {
    if(newRawMatItem.name && newRawMatItem.price && newRawMatItem.type && newRawMatItem.moreDetail.description && newRawMatItem.moreDetail.light !== ""){
    axios
      .post(
        "http://localhost:3001/api/v1/industiral-raw-material",
        newRawMatItem
      )
      .then((res) => {

        console.log(res.data);
        toast.success("Admin added plant succefully!")
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    }else {

      toast.error("Please fill all field!!!")
    }
  };

  const handleDeleteRawMat = (item) => {
    axios.delete(`http://localhost:3001/api/v1/industiral-raw-material/${item._id}`)
    .then(response => {
     
    toast.success("Deleted Plant Successfully!!!")
    })
  .catch(error => {
  console.error('Error deleting flower:', error);
 
  });

  }

  const handleIndoor = () => {
    setIsClickFlower(false);
    setIsClickFruit(false);
    setIsClickRaw(false);
    setIsClickIndoor(true);

    const url = "http://localhost:3001/api/v1/indoor-plants";
    axios
      .get(url)
      .then((res) => {
        setIndoor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleToIndoor = () => {

    if(newIndoorItem.name && newIndoorItem.price && newIndoorItem.type && newIndoorItem.moreDetail.light !== ""){
    axios
      .post("http://localhost:3001/api/v1/indoor-plants", newIndoorItem)
      .then((res) => {
        console.log(res.data);
        toast.success("Admin added plant succefully!")
      })
      .catch((err) => {
        console.log("Error:", err);
      });
    } else {
      toast.error("Please fill all field!!!")

    }
  };

  const handleDeleteIndoor = (item) => {
    axios.delete(`http://localhost:3001/api/v1/indoor-plants/${item._id}`)
    .then(response => {
     
    toast.success("Deleted Plant Successfully!!!")
    })
  .catch(error => {
  console.error('Error deleting flower:', error);
 
  });


  }
  const handleClickFlower = (item) => {
    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      subImg: item.subImg,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
      description: item.moreDetail.description,
    };

    const url = `/admin-flower?${new URLSearchParams(queryParams).toString()}`;

    navigate(url, { state: { item } });
  };

  const handleClickFruit = (item) => {
    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      subImg: item.subImg,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
      description: item.moreDetail.description,
    };

    const url = `/admin-fruit?${new URLSearchParams(queryParams).toString()}`;

    navigate(url, { state: { item } });
  };

  const handleClickRawMat = (item) => {
    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      subImg: item.subImg,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
      description: item.moreDetail.description,
    };

    const url = `/admin-raw-material?${new URLSearchParams(
      queryParams
    ).toString()}`;

    navigate(url, { state: { item } });
  };

  const handleClickIndoor = (item) => {
    const queryParams = {
      _id: item._id,
      name: item.name,
      price: item.price,
      light: item.moreDetail.light,
      soil: item.moreDetail.soil,
      water: item.moreDetail.water,
      temp: item.moreDetail.temp,
      fertilizer: item.moreDetail.fertilizer,
    };

    const url = `/admin-indoor?${new URLSearchParams(queryParams).toString()}`;

    navigate(`${url}`, { state: { item } });
  };

  const handleBack = () => {
    setShowInputForm(false)
    setIsClickFlower(true)
  };

  const handleBackFruit = () => {
    setShowFruitInputForm(false)
    setIsClickFruit(true)

  }

  const handleRawMatBack = () => {
    setShowRawMatInputForm(false)
    setIsClickRaw(true)

  }

  const handleIndoorBack = () => {
    setShowIndoorInputForm(false)
    setIsClickIndoor(true)

  }

  const handleOrder = () => {
    setIsClickOrder(true)
    setIsClickFlower(false);
    setIsClickFruit(false);
    setIsClickIndoor(false);
  }
  return (
    <div
      style={{
        height: "250vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-gradient-to-r from-white to-green-300"
    >
      <div
        style={{ display: "grid", height: "97%", width: "97%" }}
        className="bg-gradient-to-r from-white to-green-200 shadow-black shadow-md rounded-3xl"
      >
        <div className="flex">
          <div
            className="w-1/4 shadow-black shadow-md border border-green-500 rounded-tl-3xl rounded-bl-3xl"
            style={{ height: "100%" }}
          >
            <div className="text-center">
              <h1 className="font-body font-semibold">
                <span className="font-bold text-green-600 text-2xl">A</span>dmin
              </h1>
            </div>
            <div className="mt-10 ml-10">
              <button
                onClick={handleFlower}
                className={`flex items-center py-1 hover:bg-green-200 hover:w-60 hover:rounded-md ${
                  isClickFlower ? "bg-green-400 w-60 rounded-md" : ""
                }`}
              >
                <img
                  src={require("../img/icons/freesia.png")}
                  style={{ width: 28, height: 28 }}
                  alt=""
                />
                <p className="font-body font-semibold text-lg ml-2">flower</p>
              </button>
              <button
                onClick={handleFruit}
                className={`flex items-center py-1 hover:bg-green-200 hover:w-60 hover:rounded-md ${
                  isClickFruit ? "bg-green-400 w-60 rounded-md" : ""
                }`}
              >
                <img
                  src={require("../img/icons/fruits.png")}
                  style={{ width: 28, height: 28 }}
                  alt=""
                />
                <p className="font-body font-semibold text-lg ml-2">fruit</p>
              </button>
              <button
                onClick={handleRaw}
                className={`flex items-center py-1 hover:bg-green-200 hover:w-60 hover:rounded-md ${
                  isClickRaw ? "bg-green-400 w-60 rounded-md" : ""
                }`}
              >
                <img
                  src={require("../img/icons/raw-materials.png")}
                  style={{ width: 28, height: 28 }}
                  alt=""
                />
                <p className="font-body font-semibold text-lg ml-2">
                  Raw material
                </p>
              </button>
              <button
                onClick={handleIndoor}
                className={`flex items-center py-1 hover:bg-green-200 hover:w-60 hover:rounded-md ${
                  isClickIndoor ? "bg-green-400 w-60 rounded-md" : ""
                }`}
              >
                <img
                  src={require("../img/icons/cast-iron.png")}
                  style={{ width: 28, height: 28 }}
                  alt=""
                />
                <p className="font-body font-semibold text-lg ml-2">Indoor</p>
              </button>

              <button
                onClick={handleOrder}
                className={`flex items-center py-1 hover:bg-green-200 hover:w-60 hover:rounded-md ${
                  isClickOrder ? "bg-green-400 w-60 rounded-md" : ""
                }`}
              >
                <List />
                <p className="font-body font-semibold text-lg ml-2">Order</p>
              </button>
            </div>
          </div>






          <div className="mt-10 relative">
            <div className="h-auto">
              {isClickOrder && 
            
                <div className="flex text-black">
                  {voucherData?.price}

                </div>
              
             
              }
              {isClickFlower ? (
                <button
                  onClick={() => setShowInputForm(true)}
                  className={`bg-green-500 flex items-center hover:text-white hover:bg-green-700 px-2 py-3 rounded absolute -top-6 right-6
                  ${showInputForm && "opacity-0"}`}
                >
                  <Add />
                  <p className="font-body font-semibold">Create New</p>
                </button>
              ): null}
              {showInputForm ? (
                <div className="p-5">
                  <button
                    onClick={handleBack}
                    className="w-10 h-10 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110 -mt-7"
                  >
                    <ArrowBack />
                  </button>
                  <h2 className="text-xl font-body font-semibold mb-4 mt-5">
                    Create New Flower
                  </h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleToUpdateFlower();
                    }}
                  >
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Name:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newItem.name}
                            onChange={(e) =>
                              setNewItem({ ...newItem, name: e.target.value })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Price:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newItem.price}
                            onChange={(e) =>
                              setNewItem({ ...newItem, price: e.target.value })
                            }
                          />
                        </label>
                      </div>
                     
                    </div>
                    <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block">
                          Type:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newItem.type}
                            onChange={(e) =>
                              setNewItem({ ...newItem, type: e.target.value })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Quantity:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="number"
                            value={newItem.quantity}
                            onChange={(e) =>
                              setNewItem({ ...newItem, quantity: e.target.value })
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Sub Image (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewItem({
                                    ...newItem,
                                    subImg: event.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>

                        <input
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          type="text"
                          value={newItem.subImg}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              subImg: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-1/2">
                        <label className="block">
                          Sub Image 1 (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewItem({
                                    ...newItem,
                                    moreDetail: {
                                      ...newItem.moreDetail,
                                      subImg1: event.target.result,
                                    },
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newItem.moreDetail.subImg1}
                            onChange={(e) =>
                              setNewItem({
                                ...newItem,
                                moreDetail: {
                                  ...newItem.moreDetail,
                                  subImg1: e.target.value,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Sub Image 2 (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewItem({
                                    ...newItem,
                                    moreDetail: {
                                      ...newItem.moreDetail,
                                      subImg2: event.target.result,
                                    },
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newItem.moreDetail.subImg2}
                            onChange={(e) =>
                              setNewItem({
                                ...newItem,
                                moreDetail: {
                                  ...newItem.moreDetail,
                                  subImg2: e.target.value,
                                },
                              })
                            }
                          />
                        </label>
                      </div>

                      <label className="block mb-2">
                        Sub Image 3 (URL/Upload):{" "}
                        <input
                          type="file"
                          accept="image/*"
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setNewItem({
                                  ...newItem,
                                  moreDetail: {
                                    ...newItem.moreDetail,
                                    subImg3: event.target.result,
                                  },
                                });
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          value={newItem.moreDetail.subImg3}
                          onChange={(e) =>
                            setNewItem({
                              ...newItem,
                              moreDetail: {
                                ...newItem.moreDetail,
                                subImg3: e.target.value,
                              },
                            })
                          }
                        />
                      </label>
                    </div>
                    <label className="block mb-2">
                      Description:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.description}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              description: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Light:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.light}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              light: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Soil:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.soil}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              soil: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Water:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.water}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              water: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Temperature:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.temp}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              temp: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Fertilizer:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newItem.moreDetail.fertilizer}
                        onChange={(e) =>
                          setNewItem({
                            ...newItem,
                            moreDetail: {
                              ...newItem.moreDetail,
                              fertilizer: e.target.value,
                            },
                          })
                        }
                      />
                    </label>

                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Create
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center items-center mt-5">
                  {isClickFlower &&
                    flowerCurrentPosts.map((item, index) => {
                      return (
                      <>
                        <button
                          onClick={() => handleClickFlower(item)}
                          key={index}
                          className="px-5 py-5 relative"
                        >
                          <img
                            src={item.subImg}
                            className="w-72 h-72 object-cover rounded shadow-black shadow-md"
                            alt=""
                          />
                         
                          
                          <div className="bg-black w-72 h-72 bg-opacity-30 mt-5 ml-5 absolute inset-0 rounded opacity-0 hover:opacity-100 flex justify-center items-center"></div>
                         
                        
                            <button
                           onClick={(e) => {e.stopPropagation(); handleDeleteFlower(item)}}
                          className="w-10 h-10 absolute top-5 left-5 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110"
                        >
                          <Delete />
                        </button>
                       
                      
                          <div className="text-center mt-2">
                            <p className="text-md font-semibold font-body">
                              <span className="text-gray-600">Name - </span>
                              {item.name}
                            </p>
                          </div>
                        </button>
                        </>
                      )
                    })}
                </div>
              )}
            </div>

            <div className="h-auto">
              {isClickFruit ? (
                <button
                  onClick={() => setShowFruitInputForm(true)}
                  className={`bg-green-500 flex items-center hover:text-white hover:bg-green-700 px-2 py-3 rounded absolute -top-6 right-6
                  ${showFruitInputForm && "opacity-0"}`}
                >
                  <Add />
                  <p className="font-body font-semibold">Create New</p>
                </button>
              ): null}
              {showFruitInputForm ? (
                <div className="p-5">
                <button
                onClick={handleBackFruit}
                className="w-10 h-10 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110 -mt-7"
                >
                <ArrowBack />
              </button>
                  <h2 className="text-xl font-body font-semibold mb-4 mt-5">
                    Create New Fruit
                  </h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleToUpdateFruit();
                    }}
                  >
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Name:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newFruitItem.name}
                            onChange={(e) =>
                              setNewFruitItem({
                                ...newFruitItem,
                                name: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Price:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newFruitItem.price}
                            onChange={(e) =>
                              setNewFruitItem({
                                ...newFruitItem,
                                price: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      </div>
                     <div className="flex space-x-4">
                     <div className="w-1/2">
                        <label className="block">
                          Type:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newFruitItem.type}
                            onChange={(e) =>
                              setNewFruitItem({
                                ...newFruitItem,
                                type: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Quantity:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="number"
                            value={newFruitItem.quantity}
                            onChange={(e) =>
                              setNewFruitItem({
                                ...newFruitItem,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                     </div>
                   
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Sub Image (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewFruitItem({
                                    ...newFruitItem,
                                    subImg: event.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>

                        <input
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          type="text"
                          value={newFruitItem.subImg}
                          onChange={(e) =>
                            setNewFruitItem({
                              ...newFruitItem,
                              subImg: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-1/2">
                        <label className="block">
                          Sub Image 1 (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewFruitItem({
                                    ...newFruitItem,
                                    moreDetail: {
                                      ...newFruitItem.moreDetail,
                                      subImg1: event.target.result,
                                    },
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newFruitItem.moreDetail.subImg1}
                            onChange={(e) =>
                              setNewFruitItem({
                                ...newFruitItem,
                                moreDetail: {
                                  ...newFruitItem.moreDetail,
                                  subImg1: e.target.value,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <label className="block mb-2">
                      Description:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.description}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              description: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Light:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.light}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              light: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Soil:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.soil}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              soil: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Water:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.water}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              water: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Temperature:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.temp}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              temp: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Fertilizer:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newFruitItem.moreDetail.fertilizer}
                        onChange={(e) =>
                          setNewFruitItem({
                            ...newFruitItem,
                            moreDetail: {
                              ...newFruitItem.moreDetail,
                              fertilizer: e.target.value,
                            },
                          })
                        }
                      />
                    </label>

                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Create
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center items-center mt-5">
                  {isClickFruit &&
                    fruitCurrentPosts.map((item, index) => {
                      return (
                        <button
                          onClick={() => handleClickFruit(item)}
                          key={index}
                          className="px-5 py-5 relative"
                        >
                          <img
                            src={item.subImg}
                            className="w-72 h-72 object-cover rounded shadow-black shadow-md"
                            alt=""
                          />
                          <div className="bg-black w-72 h-72 bg-opacity-30 mt-5 ml-5 absolute inset-0 rounded opacity-0 hover:opacity-100 flex justify-center items-center"></div>
                          <button
                          onClick={(e) => { e.stopPropagation(); handleDeleteFruit(item)}}
                         className="w-10 h-10 absolute top-5 left-5 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110"
                       >
                         <Delete />
                       </button>
                          <div className="text-center mt-2">
                            <p className="text-md font-semibold font-body">
                              <span className="text-gray-600">Name - </span>
                              {item.name}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>

            <div className="h-auto flex">
              {isClickRaw ? (
                <button
                  onClick={() => setShowRawMatInputForm(true)}
                  className={`bg-green-500 flex items-center hover:text-white hover:bg-green-700 px-2 py-3 rounded absolute -top-6 right-6
                  ${showRawMatInputForm && "opacity-0"}`}
                >
                  <Add />
                  <p className="font-body font-semibold">Create New</p>
                </button>
              ) : null}
              {showRawMatInputForm ? (
                <div className="p-5">
                   <button
                onClick={handleRawMatBack}
                className="w-10 h-10 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110 -mt-7"
                >
                <ArrowBack />
                </button>
                  <h2 className="text-xl font-body font-semibold mb-4 mt-5">
                    Create New Raw Material Plant
                  </h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleToUpdateRawMat();
                    }}
                  >
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Name:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newRawMatItem.name}
                            onChange={(e) =>
                              setNewRawMatItem({
                                ...newRawMatItem,
                                name: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Price:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newRawMatItem.price}
                            onChange={(e) =>
                              setNewRawMatItem({
                                ...newRawMatItem,
                                price: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      </div>
                      <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Type:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newRawMatItem.type}
                            onChange={(e) =>
                              setNewRawMatItem({
                                ...newRawMatItem,
                                type: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Quantity:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="number"
                            value={newRawMatItem.quantity}
                            onChange={(e) =>
                              setNewRawMatItem({
                                ...newRawMatItem,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>


                      </div>
                 
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Sub Image (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewRawMatItem({
                                    ...newRawMatItem,
                                    subImg: event.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>

                        <input
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          type="text"
                          value={newRawMatItem.subImg}
                          onChange={(e) =>
                            setNewRawMatItem({
                              ...newRawMatItem,
                              subImg: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-1/2">
                        <label className="block">
                          Sub Image 1 (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewRawMatItem({
                                    ...newRawMatItem,
                                    moreDetail: {
                                      ...newRawMatItem.moreDetail,
                                      subImg1: event.target.result,
                                    },
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newRawMatItem.moreDetail.subImg1}
                            onChange={(e) =>
                              setNewRawMatItem({
                                ...newRawMatItem,
                                moreDetail: {
                                  ...newRawMatItem.moreDetail,
                                  subImg1: e.target.value,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <label className="block mb-2">
                      Description:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.description}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              description: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Light:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.light}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              light: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Soil:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.soil}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              soil: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Water:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.water}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              water: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Temperature:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.temp}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              temp: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Fertilizer:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newRawMatItem.moreDetail.fertilizer}
                        onChange={(e) =>
                          setNewRawMatItem({
                            ...newRawMatItem,
                            moreDetail: {
                              ...newRawMatItem.moreDetail,
                              fertilizer: e.target.value,
                            },
                          })
                        }
                      />
                    </label>

                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Create
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center items-center mt-5">
                  {isClickRaw &&
                    rawCurrentPosts.map((item, index) => {
                      return (
                        <button
                          onClick={() => handleClickRawMat(item)}
                          key={index}
                          className="px-5 py-5 relative"
                        >
                          <img
                            src={item.subImg}
                            className="w-72 h-72 object-cover rounded shadow-black shadow-md"
                            alt=""
                          />
                          <div className="bg-black w-72 h-72 bg-opacity-30 mt-5 ml-5 absolute inset-0 rounded opacity-0 hover:opacity-100 flex justify-center items-center"></div>
                          <button
                          onClick={(e) => {e.stopPropagation(); handleDeleteRawMat(item)}}
                         className="w-10 h-10 absolute top-5 left-5 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110"
                       >
                         <Delete />
                       </button>
                          <div className="text-center mt-2">
                            <p className="text-md font-semibold font-body">
                              <span className="text-gray-600">Name - </span>
                              {item.name}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>

            <div className="h-auto">
              {isClickIndoor ? (
                <button
                  onClick={() => setShowIndoorInputForm(true)}
                  className={`bg-green-500 flex items-center hover:text-white hover:bg-green-700 px-2 py-3 rounded absolute -top-6 right-6
                  ${showIndoorInputForm && "opacity-0"}`}
                >
                  <Add />
                  <p className="font-body font-semibold">Create New</p>
                </button>
              ): null}
              {showIndoorInputForm ? (
                <div className="p-5">
                   <button
                onClick={handleIndoorBack}
                className="w-10 h-10 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110 -mt-7"
                >
                <ArrowBack />
                </button>
                  <h2 className="text-xl font-body font-semibold mb-4 mt-5">
                    Create New Indoor plants
                  </h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleToIndoor();
                    }}
                  >
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Name:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newIndoorItem.name}
                            onChange={(e) =>
                              setNewIndoorItem({
                                ...newIndoorItem,
                                name: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Price:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newIndoorItem.price}
                            onChange={(e) =>
                              setNewIndoorItem({
                                ...newIndoorItem,
                                price: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      </div>
                    <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block">
                          Type:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newIndoorItem.type}
                            onChange={(e) =>
                              setNewIndoorItem({
                                ...newIndoorItem,
                                type: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                      <div className="w-1/2">
                        <label className="block">
                          Quantity:
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="number"
                            value={newIndoorItem.quantity}
                            onChange={(e) =>
                              setNewIndoorItem({
                                ...newIndoorItem,
                                quantity: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>

                    </div>
                            
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block">
                          Sub Image (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewIndoorItem({
                                    ...newIndoorItem,
                                    subImg: event.target.result,
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>

                        <input
                          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                          type="text"
                          value={newIndoorItem.subImg}
                          onChange={(e) =>
                            setNewIndoorItem({
                              ...newIndoorItem,
                              subImg: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="w-1/2">
                        <label className="block">
                          Sub Image 1 (URL/Upload):
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (event) => {
                                  setNewIndoorItem({
                                    ...newIndoorItem,
                                    moreDetail: {
                                      ...newIndoorItem.moreDetail,
                                      img1: event.target.result,
                                    },
                                  });
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                          <input
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                            type="text"
                            value={newIndoorItem.moreDetail.img1}
                            onChange={(e) =>
                              setNewIndoorItem({
                                ...newIndoorItem,
                                moreDetail: {
                                  ...newIndoorItem.moreDetail,
                                  img1: e.target.value,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>

                    <label className="block mb-2">
                      Light:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newIndoorItem.moreDetail.light}
                        onChange={(e) =>
                          setNewIndoorItem({
                            ...newIndoorItem,
                            moreDetail: {
                              ...newIndoorItem.moreDetail,
                              light: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Soil:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newIndoorItem.moreDetail.soil}
                        onChange={(e) =>
                          setNewIndoorItem({
                            ...newIndoorItem,
                            moreDetail: {
                              ...newIndoorItem.moreDetail,
                              soil: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Water:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newIndoorItem.moreDetail.water}
                        onChange={(e) =>
                          setNewIndoorItem({
                            ...newIndoorItem,
                            moreDetail: {
                              ...newIndoorItem.moreDetail,
                              water: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Temperature:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newIndoorItem.moreDetail.temp}
                        onChange={(e) =>
                          setNewIndoorItem({
                            ...newIndoorItem,
                            moreDetail: {
                              ...newIndoorItem.moreDetail,
                              temp: e.target.value,
                            },
                          })
                        }
                      />
                    </label>
                    <label className="block mb-2">
                      Fertilizer:{" "}
                      <textarea
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300"
                        value={newIndoorItem.moreDetail.fertilizer}
                        onChange={(e) =>
                          setNewIndoorItem({
                            ...newIndoorItem,
                            moreDetail: {
                              ...newIndoorItem.moreDetail,
                              fertilizer: e.target.value,
                            },
                          })
                        }
                      />
                    </label>

                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Create
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center items-center mt-5">
                  {isClickIndoor &&
                    indoorCurrentPosts.map((item, index) => {
                      return (
                        <button
                          onClick={() => handleClickIndoor(item)}
                          key={index}
                          className="px-5 py-5 relative"
                        >
                          <img
                            src={item.subImg}
                            className="w-72 h-72 object-cover rounded shadow-black shadow-md"
                            alt=""
                          />
                          <div className="bg-black w-72 h-72 bg-opacity-30 mt-5 ml-5 absolute inset-0 rounded opacity-0 hover:opacity-100 flex justify-center items-center"></div>
                          <button
                          onClick={(e) => {e.stopPropagation(); handleDeleteIndoor(item)}}
                         className="w-10 h-10 absolute top-5 left-5 rounded-full flex shadow-black shadow-sm bg-green-300 justify-center items-center transition-transform ease-in duration-200 hover:transform hover:scale-110"
                       >
                         <Delete />
                       </button>
                          <div className="text-center mt-2">
                            <p className="text-md font-semibold font-body">
                              <span className="text-gray-600">Name - </span>
                              {item.name}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              )}
            </div>
            {isClickFlower && (
              <div
                className={`flex justify-center mt-8 ${
                  showInputForm && "opacity-0"
                }`}
              >
                <FlowerPagination
                  totalLength={flower.length}
                  itemPerPage={itemPerPage}
                  setCurrentPage={setFlowerCurrentPage}
                  currentPage={flowerCurrentPage}
                />
              </div>
            )}
            {isClickFruit && (
              <div
                className={`flex justify-center mt-8 ${
                  showFruitInputForm && "opacity-0"
                }`}
              >
                <FruitePagination
                  totalLength={fruit.length}
                  itemPerPage={itemPerPage}
                  setCurrentPage={setFruitCurrentPage}
                  currentPage={fruitCurrentPage}
                />
              </div>
            )}
            {isClickRaw && (
              <div
                className={`flex justify-center mt-8 ${
                  showRawMatInputForm && "opacity-0"
                }`}
              >
                <RawPagination
                  totalLength={raw.length}
                  itemPerPage={itemPerPage}
                  setCurrentPage={setRawCurrentPage}
                  currentPage={rawCurrentPage}
                />
              </div>
            )}
            {isClickIndoor && (
              <div
                className={`flex justify-center mt-8 ${
                  showIndoorInputForm && "opacity-0"
                }`}
              >
                <IndoorPagination
                  totalLength={indoor.length}
                  itemPerPage={itemPerPage}
                  setCurrentPage={setIndoorCurrentPage}
                  currentPage={indoorCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </div>
  );
};
export default AdminDashboard;
