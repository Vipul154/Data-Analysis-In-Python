import React, { useState, useEffect } from 'react';
import './Graph_01.css';

const Graph_01 = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/graph_01')
            .then(response => response.text())
            .then(data => setGraphData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    if (!graphData) return <div>Loading...</div>;

    return (
        <div className="graph_01">
            <iframe className='iframe_of_graph_01'
                title="Graph_01"
                srcDoc={graphData}
                style={{ border: 'none', width: '100%', height: '500px' }}
            />
        </div>
    );
};
export default Graph_01;
