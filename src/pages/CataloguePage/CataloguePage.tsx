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
        const filtered = previousState.products;
        let products = [...data.goods];
        if (filters.size) {
          // eslint-disable-next-line no-restricted-syntax
          for (const product of filtered) {
            if (filters.has(product.type && product.title)) {
              products = filtered.filter((elem) => {
                return filters.has(elem.type && elem.title);
              });
            } else if (filters.has(product.type)) {
              products = filtered.filter((elem) => {
                return filters.has(elem.type);
              });
            } else if (filters.has(product.title)) {
              products = filtered.filter((elem) => {
                return filters.has(elem.title);
              });
            }
          }
        }
        if (event.target.value === "priceDown") {
          products = filtered.sort((a, b) => {
            return Number(b.price.slice(1)) - Number(a.price.slice(1));
          });
        } else if (event.target.value === "priceUp") {
          products = filtered.sort((a, b) => {
            return Number(a.price.slice(1)) - Number(b.price.slice(1));
          });
        } else if (event.target.value === "ratingDown") {
          products = filtered.sort((a, b) => {
            return b.rating - a.rating;
          });
        } else if (event.target.value === "ratingUp") {
          products = filtered.sort((a, b) => {
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
        // const filtered = previousState.products;

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

  const filterRangePrice = useCallback(
    ({ min, max }: { min: number; max: number }) => {
      setSortData((previousState) => {
        const MinMaxObj = { min, max };
        console.log(MinMaxObj);
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

        products = products.filter((elem) => {
          return (
            Number(elem.price.slice(1)) >= MinMaxObj.min &&
            Number(elem.price.slice(1)) <= MinMaxObj.max
          );
        });
        return {
          filters,
          products,
        };
      });
    },
    [setSortData],
  );

  const filterRangeQuant = useCallback(
    ({ min, max }: { min: number; max: number }) => {
      setSortData((previousState) => {
        const MinMaxObj = { min, max };
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

        products = products.filter((elem) => {
          return (
            elem.quantity >= MinMaxObj.min && elem.quantity <= MinMaxObj.max
          );
        });
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
            rangeFilterPrice={filterRangePrice}
            rangeFilterQuant={filterRangeQuant}
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
