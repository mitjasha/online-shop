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
          // eslint-disable-next-line no-restricted-syntax
          for (const product of products) {
            if (filters.has(product.type && product.title)) {
              products = products.filter((elem) => {
                return filters.has(elem.type && elem.title);
              });
            } else if (filters.has(product.type)) {
              products = products.filter((elem) => {
                return filters.has(elem.type);
              });
            } else if (filters.has(product.title)) {
              products = products.filter((elem) => {
                return filters.has(elem.title);
              });
            }
          }
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
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let products = [...data.goods];

        if (event.target.checked) {
          filters.add(event.target.id);
        } else {
          filters.delete(event.target.id);
        }

        if (filters.size) {
          // eslint-disable-next-line no-restricted-syntax
          for (const product of products) {
            if (filters.has(product.type && product.title)) {
              products = products.filter((elem) => {
                return filters.has(elem.type && elem.title);
              });
            } else if (filters.has(product.type)) {
              products = products.filter((elem) => {
                return filters.has(elem.type);
              });
            } else if (filters.has(product.title)) {
              products = products.filter((elem) => {
                return filters.has(elem.title);
              });
            }
          }
        }
        return {
          filters,
          products,
        };
      });
    },
    [setSortData],
  );

  const getMaxMinValues = ({ min, max }: { min: number; max: number }) => {
    const MinMaxObj = { min, max };
    console.log(MinMaxObj);
    return MinMaxObj;
  };

  const filterRange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let products = [...data.goods];
        if (event.target.id === "price" && event.target.name === "a") {
          products = products.filter((elem) => {
            return Number(event.target.value) <= Number(elem.price.slice(1));
          });
        } else if (event.target.id === "price" && event.target.name === "b") {
          products = products.filter((elem) => {
            return Number(event.target.value) >= Number(elem.price.slice(1));
          });
        } else if (
          event.target.id === "quantity" &&
          event.target.name === "a"
        ) {
          products = products.filter((elem) => {
            return Number(event.target.value) <= elem.quantity;
          });
        } else if (
          event.target.id === "quantity" &&
          event.target.name === "b"
        ) {
          products = products.filter((elem) => {
            return Number(event.target.value) >= elem.quantity;
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
          <CatalogueFilters
            filterFunction={filterCheckbox}
            rangeFilterFn={filterRange}
            receiveValues={getMaxMinValues}
          />
          <CatalogueGoods data={sortData.products} />
          <div
            className="not-found"
            style={{
              display: sortData.products.length === 0 ? "block" : "none",
            }}
          >
            <p>No products found</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CataloguePage;
