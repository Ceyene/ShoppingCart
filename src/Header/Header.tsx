//dependencies
import * as React from 'react';
//styled components
import { StyledHeader } from "./Header.styles";
 
const Header: React.FC = () => {
    return (
        <StyledHeader>
            <h1>My Store</h1>
        </StyledHeader>
     );
}
 
export default Header;