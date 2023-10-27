import React, { useState, useEffect } from 'react';

const Graph_05 = () => {
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/graph_05')
            .then(response => response.text())
            .then(data => setGraphData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    if (!graphData) return <div>Loading...</div>;

    return (
        <div>
            <iframe
                title="Graph_05"
                srcDoc={graphData}
                style={{ border: 'none', width: '100%', height: '500px' }}
            />
        </div>
    );
};
export default Graph_05;
