import React, { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./ImageSlider";
import "./ProductImageSlider.scss";

const ProductImageSlider: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(10).keys()).map((id) => ({
        id,
        url: `https://raw.githubusercontent.com/mitjasha/data-storage/main/goods/red/${id}.jpg`,
      })),
    );
  }, []);

  return (
    <div className="product_slider">
      <ImageCarousel images={images} />
    </div>
  );
};

export default ProductImageSlider;
