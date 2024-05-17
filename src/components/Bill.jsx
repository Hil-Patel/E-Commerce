import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../routes/App";
import { toast } from "react-toastify";

const Bill = () => {
  const [item] = useContext(userContext);
  const [total, setTotal] = useState(0);

  const purchased = () => {
    toast.success("Purchased successfully");
  };

  const rerender = () => {
    setInterval(() => {
      let temp = 0;
      for (let index = 0; index < item.length; index++) {
        temp += item[index].price * item[index].count;
      }
      setTotal(temp.toFixed(2));
    }, 10);
  };

  useEffect(() => {
    rerender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div className="bill">
      <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4">
        <div className="sm:grid sm:grid-cols-5">
          <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
            Item
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase">
            Qty
          </div>
          <div className="text-start text-xs font-medium text-gray-500 uppercase">
            Rate
          </div>
          <div className="text-end text-xs font-medium text-gray-500 uppercase">
            Amount
          </div>
        </div>

        {item.map((data) => (
          <div key={data.id}>
            <div className="hidden sm:block border-b border-gray-200"></div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              <div className="col-span-full sm:col-span-2">
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                  Item
                </h5>
                <p className="title-product font-medium text-gray-800">
                  {data.title}
                </p>
              </div>
              <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                  Qty
                </h5>
                <p className="text-gray-800">{data.count}</p>
              </div>
              <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                  Rate
                </h5>
                <p className="text-gray-800">{data.price}</p>
              </div>
              <div>
                <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                  Amount
                </h5>
                <p className="sm:text-end text-gray-800">
                  ${data.price * data.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <dl className="grid sm:grid-cols-5 gap-x-1 text-lg">
          <dt className="col-span-3 text-4xl font-medium text-gray-900">
            Total:
          </dt>
          <dd className="col-span-2 text-4xl font-medium text-gray-800">
            ${total}
          </dd>
        </dl>
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={purchased}
          className="h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Bill;
