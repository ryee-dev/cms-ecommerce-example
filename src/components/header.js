import React from 'react'
import styled from 'styled-components';
import { Menu, Item } from '@zendeskgarden/react-menus';
import '@zendeskgarden/react-menus/dist/styles.css';
import { Button } from '@zendeskgarden/react-buttons';
import '@zendeskgarden/react-buttons/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';

const SnipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Header = ({ siteTitle }) => (
  <div style={{ background: 'maroon', marginBottom: '1.45rem', }}>
    <HeaderContainer>
      <h1 className="whiteText" style={{ margin: 0 }}>
        {siteTitle}
      </h1>
      <SnipContainer>
        <Button
          primary
          style={{ margin: "1rem" }}
          className="snipcart-checkout"
        >
          View Cart
        </Button>
        <ThemeProvider>
          <div className="whiteText snipcart-summary">
            <p>Cart: (<span className="snipcart-total-items"></span>)</p>
            <p>Total: <span className="snipcart-total-price"></span></p>
          </div>
        </ThemeProvider>
        
      </SnipContainer>
    </HeaderContainer>
  </div>
)

export default Header
