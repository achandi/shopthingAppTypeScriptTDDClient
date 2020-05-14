import React from 'react';
import './app.sass';
import Layout from './components/UI/Layout';
import SearchPanel from './components/SearchPanel/SearchPanel';
import axios from 'axios';

type AppProps = {};

type AppState = {
  userInput: string; // like this
  error: boolean;
  message: string | boolean;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    userInput: '',
    error: false,
    message: '',
  };

  onUserInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const currentValue = event.currentTarget.value;
    const valueCheck = Number(currentValue) >= 0 ? currentValue : '1';
    this.setState({ userInput: valueCheck });
  };

  async onSearch(): Promise<void> {
    try {
      const getInput = await axios.get(
        `/calculation?input=${this.state.userInput}`
      );
      //intended to also give user an option to show full Prime list, but time crunch
      this.setState({ message: getInput.data[1] });
      console.log(getInput);
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    return (
      <Layout>
        <SearchPanel
          message={this.state.error ? this.state.error : this.state.message}
          userInput={this.state.userInput}
          onUserInput={this.onUserInput}
          onSearch={this.onSearch}
        />
      </Layout>
    );
  }
}

export default App;
