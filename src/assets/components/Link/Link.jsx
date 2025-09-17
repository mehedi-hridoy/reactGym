import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="list-none mr-10">
            <a 
                href={route.path}
                className="px-3 py-2 rounded transition-colors duration-300 hover:bg-[#B7410E] hover:text-[#F0EDCC]"
            >
                {route.name}
            </a>
        </li>
    );
};


Link.PropTypes = {
    route: PropTypes.object
}
export default Link;