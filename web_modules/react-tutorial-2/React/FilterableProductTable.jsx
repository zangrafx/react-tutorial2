"use strict";

import React from "react";
import SearchBar from "react-tutorial-2/React/SearchBar";
import ProductTable from "react-tutorial-2/React/ProductTable";

export default React.createClass({
    render: function () {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});
