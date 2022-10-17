Spinners: https://www.davidhu.io/react-spinners/

Passing parameters to the `useQuery` hook from react-query:

```tsx
  const { isLoading, isError, data } = useQuery(['Persons', 'people'], () => fetchPeople('people'))

```

The first parameter is the key, the second is the function to fetch the data. This took a little while to figure out but after finding the [correct documentation](https://tanstack.com/query/v4/docs/guides/migrating-to-react-query-3?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/migrating-to-react-query-3#query-key-partspieces-are-no-longer-automatically-spread-to-the-query-function) it was easy to implement.