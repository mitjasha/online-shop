import React, { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./ImageSlider";
import "./ProductImageSlider.scss";

export interface ProductImageSliderProps {
  //   images?: ImageType[];
  className?: string;
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({
  className,
}) => {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from({ length: 3 }, (_, i) => i + 1).map((id) => ({
        id,
        url: `https://raw.githubusercontent.com/mitjasha/data-storage/main/goods/red/${id}.0.jpg`,
      })),
    );
  }, []);

  return <ImageCarousel images={images} className={className} />;
};

export default ProductImageSlider;
