import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    // const history = useHistory();
    const [response, setresponse] = useState(null);
    const [loading, setloading] = useState(false);
    const onSubmit = async (e) => {
        // history.push(`?s=${searchQuery}`);
        e.preventDefault();
        setloading(true);
        setresponse(null);
        const queryURL = new URL(
            'https://chatbot-dffu.onrender.com/policyQuery',
        );
        // queryURL.searchParams.append('text', query);

        const response = await fetch(queryURL, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({ query: searchQuery }),
        });

        // if (!response.ok) {
        //   return { result:[] };
        // }

        const queryResponse = await response.json();
        console.log(queryResponse);
        if (queryResponse) {
            setresponse(queryResponse?.result);
            setloading(false);
        } else {
            setresponse('Something went wrong');
            setloading(false);
        }
    };

    return (
        <>
            <form
                action="/"
                method="get"
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <label htmlFor="header-search">
                    <span className="visually-hidden">
                        Search blog posts
                    </span>
                </label>
                <input
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
            <>{response ? <p>{response}</p> : <></>}</>
            <>{loading ? <p>Please wait....</p> : <></>}</>
        </>
    );
};

export default SearchBar;
