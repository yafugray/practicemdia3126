import React, {useState} from 'react';
import Menu from '../comps/Menu';

export default {
    title: 'Example/Menu',
    component: Menu
};

export const BasicMenu = () => <Menu />;
export const DefaultExpandedMenu = () => <Menu expand={true} />;

export const ExpandWithAnotherButton = () => {

    return <div>
            <Menu expand={true} />
            <button>Expand Menu</button>
        </div>
    ;}

// export const ColorHeader = () => <Header color="#3f3" highlight={true} />;

