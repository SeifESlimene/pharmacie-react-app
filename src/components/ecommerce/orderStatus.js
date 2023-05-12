import { useGetOrderStatusesQuery } from "../api/orderApi";

const OrderStatusPage = () => {
  const { data: orderStatuses, isSuccess } = useGetOrderStatusesQuery();

  return (
    <>
      {isSuccess &&
        orderStatuses.map((status) => (
          <div key={status.id}>
            <h2>{status.name}</h2>
            <p>{status.description}</p>
          </div>
        ))}
    </>
  );
};

export default OrderStatusPage;