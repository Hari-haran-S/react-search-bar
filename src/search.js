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
        try {
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
            }
        } catch (error) {
            console.log(error);
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
                {/* <input
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    id="header-search"
                    placeholder="Search"
                    name="s"
                    className="form-control"
                />

                <button type="submit" className="btn btn-primary">
                    Search
                </button> */}
                <div class="input-group mb-3">
                    <input
                        value={searchQuery}
                        onInput={(e) =>
                            setSearchQuery(e.target.value)
                        }
                        type="text"
                        id="header-search"
                        placeholder="Search your queries"
                        name="s"
                        className="form-control"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                            <i
                                class="fa fa-search"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </div>
                </div>
            </form>
            <>{response ? <p>{response}</p> : <></>}</>
            <>{loading ? <p>Please wait....</p> : <></>}</>
        </>
    );
};

export default SearchBar;
