import React from "react";

interface BreadcrumbsProps {
  data?: {
    title: string;
    type: string;
  };
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data, className }) => {
  return (
    <div className={className}>
      Main / Catalogue / {data?.type} / {data?.title}
    </div>
  );
};

export default Breadcrumbs;
