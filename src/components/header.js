import React from 'react'
import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';

const SnipContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Header = ({ siteTitle }) => (
  <div style={{ background: 'maroon', marginBottom: '1.45rem', }}>
    <div style={{ margin: '0 auto', maxWidth: 960, padding: '1.45rem 1.0875rem', }}>
      <h1 className="whiteText" style={{ margin: 0 }}>
        {siteTitle}
      </h1>
      <SnipContainer>
        <ThemeProvider>
          <Button href="#" className="snipcart-checkout">Click here to checkout</Button>
        </ThemeProvider>
        <div className="whiteText snipcart-summary">
          <p>Number of items: <span className="snipcart-total-items"></span></p>
          <p>Total price: <span className="snipcart-total-price"></span></p>
        </div>
      </SnipContainer>
    </div>
  </div>
)

export default Header
