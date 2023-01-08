import React, { useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import CatalogueSettings from "../../components/CatalogueSettings/CatalogueSettings";
import CatalogueFilters from "../../components/CatalogueFilters/CatalogueFilters";
import CatalogueGoods from "../../containers/CatalogueGoods/CatalogueGoods";
import "./CataloguePage.scss";
import { WineInfo, CardsState } from "../../utils/helpers/interfaces";

interface CataloguePageProps {
  state: CardsState;
}

interface SortActionTypes {
  products: WineInfo[];
  filters: Set<unknown>;
  sort: string;
}

const CataloguePage: React.FC<CataloguePageProps> = ({ state }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortData, setSortData] = useState<SortActionTypes>({
    products: data.goods as WineInfo[],
    filters: new Set(),
    sort: "default",
  });

  const postQuery = searchParams.get("post") || "";

  const sortAction = (sortType: string, products: WineInfo[]) => {
    if (sortType === "priceDown") {
      products.sort((a, b) => {
        return Number(b.price.slice(1)) - Number(a.price.slice(1));
      });
    } else if (sortType === "priceUp") {
      products.sort((a, b) => {
        return Number(a.price.slice(1)) - Number(b.price.slice(1));
      });
    } else if (sortType === "ratingDown") {
      products.sort((a, b) => {
        return (b.rating as number) - (a.rating as number);
      });
    } else if (sortType === "ratingUp") {
      products.sort((a, b) => {
        return (a.rating as number) - (b.rating as number);
      });
    }
    return products;
  };

  const sortItems = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let { products } = previousState;
        const sort = event.target.value;
        setSearchParams({ post: sort });
        if (postQuery) {
          products = sortAction(postQuery, products);
        }
        products = sortAction(sort, products);
        return {
          filters,
          products,
          sort,
        };
      });
    },
    [setSortData],
  );

  const filterCheckboxAction = (
    filters: Set<unknown>,
    products: WineInfo[],
  ) => {
    let newProducts = products;
    if (filters.size) {
      // eslint-disable-next-line no-restricted-syntax
      for (const product of products) {
        if (filters.has(product.type && product.title)) {
          newProducts = newProducts.filter((elem) => {
            return filters.has(elem.type && elem.title);
          });
        } else if (filters.has(product.type)) {
          newProducts = newProducts.filter((elem) => {
            return filters.has(elem.type);
          });
        } else if (filters.has(product.title)) {
          newProducts = newProducts.filter((elem) => {
            return filters.has(elem.title);
          });
        }
      }
    }
    return newProducts;
  };

  const filterCheckbox = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSortData((previousState) => {
        const filters = new Set(previousState.filters);
        let products = [...data.goods] as WineInfo[];
        if (event.target.checked) {
          filters.add(event.target.id);
        } else {
          filters.delete(event.target.id);
        }

        products = filterCheckboxAction(filters, products);
        const { sort } = previousState;
        products = sortAction(sort as string, products);
        return {
          filters,
          products,
          sort,
        };
      });
    },
    [setSortData],
  );

  const filterRange = (
    { min, max }: { min: number; max: number },
    type: string,
  ) => {
    setSortData((previousState) => {
      const MinMaxObj = { min, max };
      const filters = new Set(previousState.filters);
      let products = [...data.goods] as WineInfo[];
      products = filterCheckboxAction(filters, products);
      if (type === "price") {
        products = products.filter((elem) => {
          return (
            Number(elem.price.slice(1)) >= MinMaxObj.min &&
            Number(elem.price.slice(1)) <= MinMaxObj.max
          );
        });
      }
      if (type === "quantity") {
        products = products.filter((elem) => {
          return (
            (elem.quantity as number) >= MinMaxObj.min &&
            (elem.quantity as number) <= MinMaxObj.max
          );
        });
      }

      const { sort } = previousState;
      products = sortAction(sort as string, products);
      return {
        filters,
        products,
        sort,
      };
    });
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // eslint-disable-next-line no-alert
    alert("the link was copied!");
  };

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
            rangeFilterPrice={filterRange}
            rangeFilterQuant={filterRange}
            copyLinkFn={copyLink}
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
