import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    API_KEY: '34819242-61fdcfe42d1461d5acd80d71b',
    images: [],
    per_page: 12,
    currentPage: 1,
    query: '',
    loading: false,
  };

  fetchImages = async () => {
    try {
      const API_KEY = this.state.API_KEY;
      const perPage = this.state.per_page;
      const currentPage = this.state.currentPage;
      const query = this.state.query;

      this.setState({ loading: true });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      );
      this.setState({ images: response.data.hits });
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  onSubmit = ev => {
    ev.preventDefault();

    const inputValue = ev.currentTarget.elements.search.value;

    this.setState({ query: inputValue }, () => {
      this.fetchImages();
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />;
        {this.state.loading && <Loader />}
        {!this.state.loading && <ImageGallery images={this.state.images} />}
      </>
    );
  }
}
