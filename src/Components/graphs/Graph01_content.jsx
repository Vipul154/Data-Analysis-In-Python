import Graph_01 from "./Graph_01.jsx";
import './Graph01_content.css'
const Graph01_content = () => {
    return (
        <>
            <div className="container_for_01">
                <div className="content">
                    <h2>Distribution of Content Ratings on Netflix</h2>
                    <p>This pie chart indicates that majority of content on Netflix is of the rating TV-MA which means it is intended to be be viewed by mature, adult audiences and may be unsuitable for children under 17</p>
                </div>
                <div className="image">
                    <Graph_01/>
                </div>

            </div>
        </>
    );
}
export default Graph01_content;