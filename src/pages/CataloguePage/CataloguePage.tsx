import React, { useState, useCallback } from "react";
import data from "../../assets/data/data.json";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../containers/CatalogueGoods/CatalogueGoods";
import "./CataloguePage.scss";
import { CardsState } from "../../utils/helpers/interfaces";

interface CataloguePageProps {
  state: CardsState;
}

const CataloguePage: React.FC<CataloguePageProps> = ({ state }) => {
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

  // const filterRange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSortData((previousState) => {
  //       const filters = new Set(previousState.filters);
  //       const products = [...data.goods];
  //       console.log(event.target);
  //       console.log(products);
  //       return {
  //         filters,
  //         products,
  //       };
  //     });
  //   },
  //   [setSortData],
  // );

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
            // filterRangeFn={filterRange}
          />
          <CatalogueGoods data={sortData.products} state={state} />
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
