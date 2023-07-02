import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './cholamandalam-logo.png';
import './App.css';
import Search from './search';
// import Announcer from './announcer';

// const posts = [
//     { id: '1', name: 'This first post is about React' },
//     { id: '2', name: 'This next post is about Preact' },
//     { id: '3', name: 'We have yet another React post!' },
//     { id: '4', name: 'This is the fourth and final post' },
// ];

// const filterPosts = (posts, query) => {
//     if (!query) {
//         return posts;
//     }

//     return posts.filter((post) => {
//         const postName = post.name.toLowerCase();
//         return postName.includes(query);
//     });
// };
// const queryIndex = async (query) => {
//     const queryURL = new URL(
//         'https://21b1-2401-4900-2324-8bf3-cd12-2556-97cc-fe93.ngrok-free.app/policyQuery',
//     );
//     // queryURL.searchParams.append('text', query);

//     const response = await fetch(queryURL, {
//         method: 'POST',
//         mode: 'cors',
//         body: JSON.stringify({ query: query }),
//     });
//     // if (!response.ok) {
//     //   return { result:[] };
//     // }

//     const queryResponse = await response.json();

//     return queryResponse;
// };

const App = () => {
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState('');
    // const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <Router>
            <div className="App">
                {/* <Announcer
                    message={`${filteredPosts.length} posts`}
                /> */}
                <img src={logo} className="App-logo" alt="logo" />
                <h2>CholaONE Chatbot</h2>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                {/* <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul> */}
            </div>
        </Router>
    );
};

export default App;
