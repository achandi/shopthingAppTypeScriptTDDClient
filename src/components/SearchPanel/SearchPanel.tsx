import React from 'react';

type ChildProps = {
  userInput: string;
  onUserInput: React.FormEventHandler<HTMLInputElement>;
  onSearch: () => void;
  message: string | boolean;
};

const SearchPanel: React.FunctionComponent<ChildProps> = (props) => (
  <div className="card">
    <div className="card-header">
      <span>
        <p className="title">
          Welcome to the Sieve of Eratosthenes! Enter a number below!
        </p>
      </span>
      <span></span>
    </div>
    <div className="card-content">
      <p className="title"></p>
      <p className="subtitle display-message">
        {props.message
          ? `Youre primes are: ${props.message}`
          : `I will not only find you all the prime numbers, but also the Median
        Prime Number(s) based on your input!`}
      </p>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <input
          className="input"
          type="number"
          //extra checks above
          placeholder="Search"
          value={props.userInput}
          onChange={(event) => props.onUserInput(event)}
        />
        <button className="button on-search" onClick={() => props.onSearch()}>
          Search
        </button>
      </p>
    </footer>
  </div>
);

export default SearchPanel;
