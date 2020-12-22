import React, { Component } from 'react';
import Header from '../comps/Header';

export default {
    title: 'Example/Header',
    component: Header
};

export const BasicHeader = () => <Header />;
export const ColorHeader = () => <Header color="#3f3" highlight={true} />;