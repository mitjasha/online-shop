import React, { useState, useCallback } from "react";
import data from "../../assets/data/data.json";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../containers/CatalogueGoods/CatalogueGoods";
import "./CataloguePage.scss";

const CataloguePage: React.FC = () => {
  const [sortData, setSortData] = useState({
    products: data.goods,
    filters: new Set(),
  });

  const sortItems = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let products = [...data.goods];
        if (filters.size) {
          products = [...data.goods].filter((product) => {
            if (filters.has(product.type)) {
              return filters.has(product.type);
            }
            return filters.has(product.title);
          });
        }
        if (event.target.value === "priceDown") {
          products.sort((a, b) => {
            return Number(b.price.slice(1)) - Number(a.price.slice(1));
          });
        } else if (event.target.value === "priceUp") {
          products.sort((a, b) => {
            return Number(a.price.slice(1)) - Number(b.price.slice(1));
          });
        } else if (event.target.value === "ratingDown") {
          products.sort((a, b) => {
            return b.rating - a.rating;
          });
        } else if (event.target.value === "ratingUp") {
          products.sort((a, b) => {
            return a.rating - b.rating;
          });
        }
        return {
          filters,
          products,
        };
      });
    },
    [setSortData],
  );

  const filterCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const typesArr = [
        "Red wine",
        "White wine",
        "Rosé wine",
        "Sparkling wine",
      ];
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let products = [...data.goods];

        if (event.target.checked) {
          filters.add(event.target.id);
        } else {
          filters.delete(event.target.id);
        }

        if (filters.size && typesArr.includes(event.target.id)) {
          products = products.filter((product) => {
            return filters.has(product.type);
          });
        } else if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.title);
          });
        }
        return {
          filters,
          products,
        };
      });
    },
    [setSortData],
  );

  return (
    <div className="catalogue">
      <div className="container">
        <CatalogueSettings
          sortFunction={sortItems}
          itemsFound={sortData.products.length}
        />
        <div className="filters-goods-wrapper">
          <CatalogueFilters filterFunction={filterCheckbox} />
          <CatalogueGoods data={sortData.products} />
          <div className="not-found">
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
