import { useGetProductsQuery } from '../api/productApi';

function Test() {
  const { data = [], isLoading, isFetching, isError } = useGetProductsQuery();

  if (isError) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  console.log({ data, isLoading, isFetching, isError })

  return (
    <div className={isFetching ? 'posts--disabled' : ''}>
      {/* {data.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          disabled={isFetching}
        />
      ))} */}
    </div>
  );
}

export default Test