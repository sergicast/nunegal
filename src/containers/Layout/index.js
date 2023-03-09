import './styles.scss';
import { Header } from '../../components';

/**
 * @component Distribution page.
 * @param {Component} children 
 * @returns {React.ReactElement}
 */
export const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header /> 
            <main>{children}</main> 
        </div>
    );
};
