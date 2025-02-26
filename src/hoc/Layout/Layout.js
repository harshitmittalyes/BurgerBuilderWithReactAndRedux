import React, {Component} from 'react';
import { connect } from 'react-redux';
import Auxillary from '../Auxillary/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    };

    render () {
        return(
            <Auxillary>
                <Toolbar 
                    isAuth = {this.props.isAuthenticated}
                    drawerToggledClick={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    isAuth = {this.props.isAuthenticated} 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}> 
                    {this.props.children}
                </main>
            </Auxillary>
            )
    };
    
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null 
    }
}

export default connect(mapStateToProps)(Layout);