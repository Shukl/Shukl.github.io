var MyApp = React.createClass({
    render: function() {
        var that = this,
            rows = [];

        var typeWeeklySource = {
            "chart": {
                // caption options
                "caption": "Cumulative Weight (7 Day / Type Distribution)",
                "xAxisName": "Refuse Type",
                "yAxisName": "Weight(lbs)",
                "theme": "carbon"
            },

            "data": [
                {
                    "label": "Compost",
                    "value": "80"
                }, {
                    "label": "Recycling",
                    "value": "30"
                }, {
                    "label": "Trash",
                    "value": "112.5"
                }
            ]
        };

        var typeWeeklyConfigs = {
            type: "column2d",
            renderAt: "weekly-weight",
            width: '100%',
            height: 400,
            dataFormat: "json",
            dataSource: typeWeeklySource
        };

        var monthlyDataSource = {
            chart: {
                // caption options
                "caption": "Monthly Weights",
                "xAxisName": "Month",
                "yAxisName": "Weight(lbs)",
                "theme": "carbon"
            },
            data: [
                {
                    "label": "Jan",
                    "value": "1410.1"
                }, {
                    "label": "Feb",
                    "value": "1200.45"
                }, {
                    "label": "Mar",
                    "value": "1334.23"
                }, {
                    "label": "Apr",
                    "value": "1110"
                }, {
                    "label": "May",
                    "value": "4380"
                }, {
                    "label": "Jun",
                    "value": "2920"
                }, {
                    "label": "Jul",
                    "value": "3650"
                }, {
                    "label": "Aug",
                    "value": "6490"
                }, {
                    "label": "Sep",
                    "value": "7460"
                }, {
                    "label": "Oct",
                    "value": "8030"
                }, {
                    "label": "Nov",
                    "value": "8760"
                }, {
                    "label": "Dec",
                    "value": "7300"
                }
            ]
        };

        var monthlyChartConfigs = {
            type: "spline",
            renderAt: "monthly-weight",
            width: '100%',
            height: 350,
            dataFormat: "json",
            dataSource: monthlyDataSource
        };

        var refuseTypeSource = {
            chart: {
                // caption options
                "caption": "Split of Type of Refuse (Past 12 Months / lbs)",
                "theme": "carbon"
            },
            data: [
                {
                    "label": "Trash",
                    "value": "14600"
                }, {
                    "label": "Compost",
                    "value": "21900"
                }, {
                    "label": "Recycling",
                    "value": "10950"
                }
            ]
        };

        var typeChartConfigs = {
            type: "doughnut2d",
            renderAt: "refuse-type",
            width: '100%',
            height: 350,
            dataFormat: "json",
            dataSource: refuseTypeSource
        };

        return (
            <div>
                <h1 className="main-title">Good Riddance Refuse Analysis for 2015</h1>
                <div id="interactive-dashbaord"></div>
                <div className="chart-row">
                    <div id="monthly-weight">
                        <react_fc.FusionCharts {...monthlyChartConfigs}/>
                    </div>
                </div>
                <div className="chart-row">
                    <div id="weekly-weight" className="inline-chart">
                        <react_fc.FusionCharts {...typeWeeklyConfigs}/>
                    </div>
                    <div id="refuse-type" className="inline-chart">
                        <react_fc.FusionCharts {...typeChartConfigs}/>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(<MyApp/>, document.getElementById("dashboard"));
