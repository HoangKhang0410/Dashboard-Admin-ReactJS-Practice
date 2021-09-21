import React from 'react'
import './home.css'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'


export default function Home() {
    return (
        <div className="home">
            <FeatureInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"  />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg /> 
            </div>
        </div>
    )
}
