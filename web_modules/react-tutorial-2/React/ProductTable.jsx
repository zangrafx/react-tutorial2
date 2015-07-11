"use strict";

import React from "react";
import ProductCategoryRow from "react-tutorial-2/React/ProductCategoryRow";
import ProductRow from "react-tutorial-2/React/ProductRow";

export default React.createClass({
render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});
