import React from 'react';
import '../Styles/home.scss';


const Home = () => {
    return (
        <div className="app__home" id="home">
            <div className="home__text">
                <h1>Netflix Content Analysis</h1>
                <h4>This project aims to analyse and visualize Netflix's content released over the years to understand the statistics and trends in the data.</h4>
                <h4>The project will use specialized data visualization libraries such as Plotly to create interactive and informative visualizations.</h4>

            </div>
        </div>
    );
}
export default Home;