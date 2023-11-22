import { useRef } from "react";
import MainContainer from "../../Layout/MainContainer";
import { IconButton } from "@mui/material";

const itemIImageArr = [
  "https://majesticjourney.in/wp-content/uploads/2022/05/goa-featured.jpg",
  "https://wallpaperaccess.com/full/267434.jpg",
  "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/beach-destinations-sri-lanka/01.jpg",
  "https://wallpapers.com/images/featured/2ygv7ssy2k0lxlzu.jpg",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);

  return (
    <MainContainer>
      <h1 className="text-lg font-bold mb-7">Item title</h1>
      <img
        src={itemIImageArr[0]}
        alt="item"
        className="w-full h-[400px] rounded-md object-cover"
        ref={mainImageRef}
      />
      <div className=" w-full mt-3 grid grid-cols-4 text-center grid-rows-1 gap-3">
        {itemIImageArr.map((e, i) => (
          <IconButton
            key={i}
            sx={{ padding: "0", borderRadius: "2px" }}
            onClick={() => {
              subImageRef.current[i].style.border = "2px solid #c82196";
              mainImageRef.current.src = subImageRef.current[i].src;
              for(let x =0 ; x<subImageRef.current.length ; x++){
                if(x!==i){
                  subImageRef.current[x].style.border = "none";
                }
              }
            }}
          >
            <img
              src={e}
              alt="item"
              className="w-full"
              ref={(el) => (subImageRef.current[i] = el)}
              name={`item image ref : ${i}`}
            />
          </IconButton>
        ))}
      </div>
    </MainContainer>
  );
};

export default ItemPage;
