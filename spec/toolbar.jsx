import React from 'react/addons';
import Toolbar from '../lib/components/Toolbar.jsx';

describe('Toolbar', function() {
  let component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Toolbar/>
    );
  });
});
