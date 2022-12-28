import React, { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./ImageSlider";
import "./ProductImageSlider.scss";

export interface ProductImageSliderProps {
  imagesData: string[];
  className?: string;
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({
  imagesData,
  className,
}) => {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(imagesData.length).keys()).map((id) => ({
        id,
        url: imagesData[id],
      })),
    );
  }, []);

  return <ImageCarousel images={images} className={className} />;
};

export default ProductImageSlider;
