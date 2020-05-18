import React from 'react';
import './App.css';

let listItems = [
  { name: 'Google', link: 'http://google.com' },
  { name: 'Microsoft', link: 'http://microsoft.com' },
  { name: 'Mozilla', link: 'https://developer.mozilla.org/en-US/' },
  { name: 'Brave', link: 'https://brave.com' },
  { name: 'Facebook', link: 'https://facebook.com' },
  { name: 'Instagram', link: 'https://instagram.com' },
  { name: 'Apple', link: 'https://apple.com' },
  { name: 'Amazon', link: 'https://amazon.com' },
  { name: 'Flipkart', link: 'https://flipkart.com' },
  { name: 'Paytm', link: 'https://paytm.com' },
  { name: 'Phonepe', link: 'https://phonepe.com' },
  { name: 'Youtube', link: 'https://youtube.com' },
  { name: 'Netflix', link: 'https://netflix.com' },
  { name: 'Prime Video', link: 'https://primevideo.com' },
  { name: 'MX Player', link: 'https://mxplayer.in' },
  { name: 'Medium', link: 'https://medium.com' },
  { name: 'W3 Schools', link: 'https://w3schools.com' },
  { name: 'Udemy', link: 'https://udemy.com' },
];

function App() {
  const [state, setState] = React.useState({
    listItems: listItems,
    filteredItems: [],
    query: '',
    cursor: 0,
  });

  const linkRefs = [];
  function searchHandler(e) {
    let filteredItems = state.listItems.filter(
      (item) =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );
    setState({
      ...state,
      query: e.target.value,
      filteredItems: filteredItems,
    });
    if (!state.query) return;

    if (e.keyCode === 40 && state.cursor < state.filteredItems.length - 1) {
      console.log('hello');
      setState((prevState) => {
        return {
          ...state,
          cursor: prevState.cursor + 1,
        };
      });
    }
    if (e.keyCode === 38 && state.cursor > 0) {
      console.log('hello');
      setState((prevState) => {
        return {
          ...state,
          cursor: prevState.cursor - 1,
        };
      });
    }
    if (e.keyCode === 8) {
      setState((prevState) => {
        return {
          ...prevState,
          cursor: 0,
        };
      });
    }
    if (e.keyCode === 13) {
      linkRefs[state.cursor].click();
    }
  }

  function getHighlightedText(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span className='highlight'>{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return (
    <>
      <div className='container'>
        <input
          placeholder='Search Here....'
          type='text'
          onKeyUp={searchHandler}
          autoFocus
        />
        {state.query && state.filteredItems.length !== 0 ? (
          <div className='menu_container'>
            {state.filteredItems.map((item, index) => (
              <p
                key={index}
                className={state.cursor === index ? 'active' : null}>
                <a
                  key={index}
                  href={item.link}
                  ref={(ref) => (linkRefs[index] = ref)}
                  rel='noopener noreferrer'
                  target='_blank'>
                  {getHighlightedText(item.name, state.query)}
                </a>
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
