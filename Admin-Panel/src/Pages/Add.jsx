import React, { useRef, useState } from "react";
import imagee from "../assets/upload.webp";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });
  //http://localhost:4000/api/food/add
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const fileInputRef = useRef(null);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    if (image) formData.append("image", image);
    if (imageFile) formData.append("image", imageFile);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: { "content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          category: "Salad",
          price: "",
        });
        setImage(false);
        setImagePreview(null);
        setImageFile(null)
        toast.success("Food Item Added Successfully");
      }
    } catch (error) {
      toast.error("Error while Adding Food Item");
    }
  };

  return (
    <div className="">
      <form onSubmit={onSubmitHandler}>
        <div>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={imagePreview || imagee}
              alt=""
              onClick={() =>
                fileInputRef.current && fileInputRef.current.click()
              }
              className="w-20 h-20"
            />
          </label>
          <input
            ref={fileInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              setImageFile(file);
              setImagePreview(URL.createObjectURL(file));
            }}
            type="file"
            hidden
            required
          />
        </div>
        <div>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type name"
          />
        </div>
        <div>
          <p>Product Decsription</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div>
          <div>
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure-Veg">Pure-Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div>
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default Add;
