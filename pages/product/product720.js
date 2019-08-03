import React, { Component } from 'react';
import {
    WebView,
    View,
} from 'react-native';
import BaseComponent from '../../components/BaseComponent.js';
import PropTypes from "prop-types";
import CustomHeader from '../../components/CustomHeader.js';

export default class Product720 extends BaseComponent {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        menu: PropTypes.any
    };
    componentDidMount() {

    }
    render() {
        let linkPath = "";
        let menu = null;
        if (this.props.menu) {
            menu = this.props.menu;
        }
        else {
            const { state } = this.props.navigation;
            menu = state.params.menu;
        }
        if (menu != null && menu.PathParams != null) {
            let mparmars = JSON.parse(menu.PathParams);
            linkPath = mparmars.LinkPath.toString();
        }
        return (
            <View style={{ flex: 1 }}>
                <CustomHeader moreButton={true} navigation={this.props.navigation}
                    leftButtonImageSource={this.props.leftButtonImageSource}
                    leftButtonOnPress={this.props.leftButtonOnPress} />
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: linkPath }} />
            </View>
        );
    }
} 