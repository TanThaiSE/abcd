import React, { Component } from "react";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer class="text-center text-lg-start bg-light text-muted">
        <div
          class="text-center p-4"
          //   style="background-color: rgba(0, 0, 0, 0.05);"
        >
          Trần Ngọc Hiếu
          <a class="text-reset fw-bold">ReactJS 03</a>
        </div>
      </footer>
    );
  }
}

export default index;
