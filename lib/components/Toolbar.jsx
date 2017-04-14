import React from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends React.Component {
    constructor(props) {
      super(props);

      this.state = { show: false };
    }

    handle(event) {
      event.preventDefault();

      this.setState({ show: !this.state.show });
    }

    close(event) {
      this.setState({ show: false });
    }

    render() {
      return (
        <div className="Toolbar" onMouseLeave={(event) => this.close(event)}>
          <a href="#" className="Toolbar__Icon" onClick={(event) => this.handle(event)}></a>
          <a href="#" className="Toolbar__Brand">Brand</a>
          {
            this.state.show && (
              <div className='Toolbar__Menu'>
                {this.props.children}
              </div>
            )
          }
        </div>
      );
    }
}
