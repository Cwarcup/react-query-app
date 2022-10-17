## Schwifty Facts - Learning React-Query

<div align="center">
  <img src="https://media4.giphy.com/media/zwSIuk7PkyMjsFBvxO/giphy.gif?cid=790b7611ff6aa6c411c2801fe931c4028429b25c84515746&rid=giphy.gif&ct=g">
</div>

This was a little project to learn more about React-Query. It's a simple app that displays random facts about Rick and Morty characters. It uses the [Rick and Morty API](https://rickandmortyapi.com/).

Passing parameters to the `useQuery` hook from react-query:

```tsx
  const { isLoading, isError, data } = useQuery(['Persons', 'people'], () => fetchPeople('people'))

```

The first parameter is the key, the second is the function to fetch the data. This took a little while to figure out but after finding the [correct documentation](https://tanstack.com/query/v4/docs/guides/migrating-to-react-query-3?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/migrating-to-react-query-3#query-key-partspieces-are-no-longer-automatically-spread-to-the-query-function) it was easy to implement.

Wanted to make the `fetchPeople` function more generic so I could use it to also fetch planets. I did this by renaning the function to `fetchData` and passing an object containing the search parameter and the page number. This is the function:

```tsx
// state to keep track of the page number
const [page, setPage] = React.useState(1)

// parameters to pass to the FetchData function
const fetchDataParams = {
  term: 'people', // the search term
  page: page, // the page number
}

// FetchData is the async function that fetches the data
  const { isLoading, isError, data } = useQuery(['location', fetchDataParams],
    () => FetchData(fetchDataParams))
```

I also added some new buttons to the component to allow the user to navigate between pages, updating the `page` state variable. The cool thing about this is that the `useQuery` hook will automatically refetch the data when the page number changes. However, after each page completes its initial load, the data is stored in cache. This makes subsequent page loads much faster.

However, there is a better way to do this. React-query has a built in option to handle pagination, the `keepPreviousData` option. I will implement this in the next iteration.

```tsx
const { isLoading, isError, data } = useQuery(
  ['Persons', fetchDataParams],
  () => FetchData(fetchDataParams), { keepPreviousData: true, },
)
```

Using the `keepPreviousData` option will keep the previous data in cache, but it will also keep the previous data in the DOM. This is not ideal. I will need to figure out how to clear the previous data from the DOM.

Learn more about pagination with react-query [here](https://tanstack.com/query/v4/docs/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata).

In order to update the page number, we can add the following buttons:

```jsx
<button
  onClick={() => setPage((old) => Math.max(old - 1, 1))}
  disabled={page === 1}
>
  Previous Page
</button>

<span>{page}</span>

<button
  onClick={() => setPage((old) => (!data || !data.info.next ? old : old + 1))}
  disabled={!data || !data.info.next}
>
  Next Page
</button>
```

By only setting the page number to the next page if there is data and the data has a next page, we can prevent the page number from going past the last page.

## Final Thoughts

This introduced me to the concept of caching data in React. I think this is a great way to improve the performance of an app. I will definitely be using this in future projects.

## Resources

- [React Query](https://react-query.tanstack.com/)
- [Rick and Morty API](https://rickandmortyapi.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)