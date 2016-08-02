var DashboardApp = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="main-title">Acme Inc. Revenue Analysis for 2015</h1>
                <div id="interactive-dashbaord"></div>
                <div className="chart-row">
                    <div id="country-revenue">
                        // country revenue chart here
                    </div>
                </div>
                <div className="chart-row">
                    <div id="monthly-revenue" className="inline-chart">
                        // chart 2 here - spline
                    </div>
                    <div id="product-revenue" className="inline-chart">
                        // chart 3 here - donut
                    </div>
                </div>
            </div>
        );
    }
});
// Read more at http : //tutorials.pluralsight.com/front-end-javascript/building-a-dashboard-in-react#preparing-data-for-the-chart#hH5JGdCm16pJLk5K.99
React.render(
            <DashboardApp />,
            document.getElementById("dashboard")
);
