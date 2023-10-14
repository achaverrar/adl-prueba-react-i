import { useEffect, useState } from "react";
import Header from "./Header/Header";
import SearchResults from "./SearchResults/SearchResults";
import { Container } from "../UI";
import { useDebouce } from "../hooks";
import { searchMovie } from "../service";
import "./MiApi.css";

const MiApi = () => {
  const [searchResults, setSearchResults] = useState({
    page: 1,
    results: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const debounceChange = useDebouce(async (query) => {
    const queryToSearch = query.trim();
    if (queryToSearch) {
      setSearchResults(await searchMovie(queryToSearch));
    }
  }, 1000);
  const onQueryChange = ({ target: { value } }) => {
    setLoading(true);
    setSearchQuery(value);
    debounceChange(value);
  };

  useEffect(() => {
    if (loading) setLoading(false);
  }, [searchResults]);
  const clearSearchQuery = () => setSearchQuery("");
  return (
    <>
      <Header
        searchQuery={searchQuery}
        onQueryChange={onQueryChange}
        clearSearchQuery={clearSearchQuery}
      />
      {!searchQuery.trim() ? (
        <Container>
          <p className="search-results__instructions">
            What movie are you looking for?
          </p>
        </Container>
      ) : (
        <SearchResults
          searchQuery={searchQuery}
          loading={loading}
          page={searchResults.page}
          movies={searchResults.results}
        />
      )}
    </>
  );
};

export default MiApi;
