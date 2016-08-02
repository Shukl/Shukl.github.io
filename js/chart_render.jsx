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
                "caption": "Culumative Weight (Month on Month)",
                "xAxisName": "Month",
                "yAxisName": "Weight(lbs)",
                "theme": "carbon"
            },
            data: [
                {
                    "label": "Jan",
                    "value": "14100.1"
                }, {
                    "label": "Feb",
                    "value": "12000.45"
                }, {
                    "label": "Mar",
                    "value": "13345.23"
                }, {
                    "label": "Apr",
                    "value": "11100"
                }, {
                    "label": "May",
                    "value": "43800"
                }, {
                    "label": "Jun",
                    "value": "29200"
                }, {
                    "label": "Jul",
                    "value": "36500"
                }, {
                    "label": "Aug",
                    "value": "64900"
                }, {
                    "label": "Sep",
                    "value": "74600"
                }, {
                    "label": "Oct",
                    "value": "80300"
                }, {
                    "label": "Nov",
                    "value": "87600"
                }, {
                    "label": "Dec",
                    "value": "73000"
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
                "caption": "Split of Type of Refuse (Past 12 Months)",
                "theme": "carbon"
            },
            data: [
                {
                    "label": "Trash",
                    "value": "1460000"
                }, {
                    "label": "Compost",
                    "value": "2190000"
                }, {
                    "label": "Recycling",
                    "value": "1095000"
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
                    <div id="monthly-weight" className="inline-chart">
                        <react_fc.FusionCharts {...monthlyChartConfigs}/>
                    </div>
                </div>
                <div className="chart-row">
                    <div id="weekly-weight">
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
