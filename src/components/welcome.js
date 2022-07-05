import React from "react";

class Welcome extends React.Component {
  render() {
    if (this.props.currentPage !== 1) {
      return null;
    }
    return (
      <>
        <h1>Welcome to our Survey.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          laoreet efficitur dui, et blandit velit iaculis eu. Mauris feugiat
          viverra eros eget laoreet. Donec faucibus, risus nec rutrum
          vestibulum, lacus odio mattis dolor, ac aliquam orci nibh nec lacus.
          Duis ac consectetur tellus. Sed ac ligula id ipsum efficitur efficitur
          eu quis nunc. Nam sem massa, congue a faucibus vitae, placerat in
          ante. Proin sollicitudin sit amet purus at ultrices. Morbi pharetra
          lorem et fringilla tempus. Sed sed porttitor lacus. Sed fermentum
          cursus ex, nec tempor quam consectetur nec.{" "}
        </p>
      </>
    );
  }
}

export default Welcome;
