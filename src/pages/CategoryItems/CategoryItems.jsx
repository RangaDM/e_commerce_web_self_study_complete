import React, { useEffect, useState } from "react";
import MainContainer from "../../Layout/MainContainer";
import { useSelector } from "react-redux";
import { categorySelector } from "../../Store/Slices/CategorySlice";
import { useParams } from "react-router-dom";
import { Rating, ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";
import getDataFromSubCollection from "../../Utils/DataFetch/getDataFromSubCollection";
import Loading from "../../components/Loading/Loading";

// const categoryArr = [
//   {
//     imageURL:
//       "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
//     title: "Item name 1",
//     val: 2,
//   },
//   {
//     imageURL:
//       "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
//     title: "Item name 2",
//     val: 2.5,
//   },
//   {
//     imageURL:
//       "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
//     title: "Item name 3",
//     val: 4.5,
//   },
//   {
//     imageURL:
//       "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
//     title: "Item name 4",
//     val: 3,
//   },
// ];

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  // console.log(category);

  const { categoryID } = useParams();
  const [categoryTitle] = category.filter((e) => e.id === categoryID);

  const [categoryItemsData , setcategoryItemsData] = useState([])

  useEffect(() => {
    getDataFromSubCollection('category',categoryID, categoryID , setcategoryItemsData);
  },[categoryID]
  )
console.log('categoryItemsData : ' , categoryItemsData);

if(categoryItemsData.length===0) return (<Loading/>)

  return (
    <MainContainer>
      <h1 className=" text-lg font-bold mt-2 ml-2 mb-7">
        {categoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-3 grid-rows[auto] gap-5">
        {categoryItemsData?.map(({img , rating , title} , index) => (
          <CategoryItemUnit
            key={index}
            title={title}
            val={rating}
            imageURL={img}
          />
        ))}
      </div>
    </MainContainer>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({ imageURL, title, val }) => {
  return (
    <Link to={`item`}>
      <ListItemButton
        sx={{
          padding: 0,
          margin: 0,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div
          style={{ color: "#26c6da", backgroundColor: "#e91e63" }}
          className="w-full object-contain rounded-lg"
        >
          <img src={imageURL} alt={title} />
          <div className=" w-full mx-2 mb-2">
            <h3 className=" text-left text-sm font-bold">{title}</h3>
            <Rating
              name={imageURL}
              value={val}
              precision={0.1}
              size="small"
              readOnly
            />
          </div>
        </div>
      </ListItemButton>
    </Link>
  );
};
