import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    if (document.body.getBoundingClientRect().top > scrollPos) {
      console.log(scrollPos);
      console.log(Math.abs(document.body.getBoundingClientRect().top));
      console.log(window.innerHeight);

      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: true
      });
      if (
        Math.abs(document.body.getBoundingClientRect().top) < window.innerHeight
      ) {
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: false
        });
      }
    } else {
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: false
      });
    }
  }

  render() {
    return (
      <>
        <header className={this.state.show ? 'active' : 'hidden'}></header>
        <style jsx>
          {`
            header {
              position: fixed;
              top: -100px;
              left: 0;
              width: 100%;
              height: 50px;
              background: cornflowerblue;
              transition: 1s;
              z-index: 10;
            }
            .active {
              top: 0px;
            }
            .hidden {
              top: -100px;
            }
          `}
        </style>
      </>
    );
  }
}
