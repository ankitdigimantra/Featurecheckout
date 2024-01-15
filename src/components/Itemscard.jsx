import { useEffect } from "react";
import { useFetch } from "use-fetch-react-vc";
import { apiUrl, fetchOptions } from "../app/constant";

const ItemsCard = ({ setSubtotal }) => {
  const { data, error, loading } = useFetch(apiUrl, fetchOptions);
  const myIndex = 1;

  useEffect(() => {
    if (!error && !loading && data) {
      let total = 0;
      data.products.forEach((item) => {
        if (item.id <= myIndex + 1) total += item.price;
      });
      setSubtotal(total);
    }
  }, [error, loading, data, setSubtotal]);

  return (
    <div className="overflow-y-auto" >
      {!loading && !error && data && (
        <div className="grid grid-rows-1">
          {data?.products.map((item, index) => {
            if (index > myIndex) return;
            return (
                <div className="grid grid-cols-2" key={item.id}>
                <div>
                  <img
                    src={item.thumbnail}
                    width={400}
                    height={400}
                    alt={item.title}
                    style={{ width: "50%", height: "90%" }}
                    className="h-1 cursor-pointer top-3 bottom-3"
                  />
                </div>
                <div className="text-smm">
                  <p>{item.title}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default ItemsCard;