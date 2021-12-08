# Lecture Notes

## getting Data and API's

### Data

- useEffect to request info from API -> async and await
- use fetch() which is a built in function, which is used everytime you are trying to get data
  - put url of the website you are trying to get info from
  - create a const resp and a const data, both with "awaits"
    - for ex const data = await resp.json() -> this makes it an actual javascript object here

* use useState to create variable and function to set data
* set the data.results into the function you created in useState
* const [loading, setLoading] = useState(true);
  {loading && <h1>LOADING!</h1>}
  {!loading && pokemon.map(poke => <p key={poke.id}>{poke.pokemon}</p>)}
* go back to useEffect and setLoading(false) -> this means that when the results are called, loading will be false.
* you can use setTimeout as well to load on a given time for ex setTimeout(() => {
  setLoading(false);
  }, 2000)
* if (loading) {
  fetchData();
  }
  }, [loading]); -> that means that if loading is true, then data will be fetched. setLoading is set false initially, but set true in user search when the button is clicked.

## Deliverable Plan

- [x] useEffect to access data
  - for good practice, put into services folder
- [x] useState to mount and setState for rendering
- [x] create loading state so that state only loads when results have been fetched
- [ ] ascending, descending, type
- [ ] add URL search params to your services component
  - [ ] pass the query through as a param, then make a const params = new URLSearchParams(); - [ ] set it using the const name (in this case you can say params) params.set('pokemon', query)
  - [ ] using template literal, append to the URL with ${params.toString()} so that whatever you get from search query -> params -> stringified to match URL search params

* build out components
  - [x] PokeList
  - [ ] UserInput

- [ ] set a button onClick event to setLoading
