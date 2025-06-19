function ChartTable(props) {

    let chartData = props.chartData;
    let tableColumns = props.tableColumns;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{chartData.datasets[0].label}</h2>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid #e0e0e0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
                <thead>
                    <tr style={{ background: '#f5f5f5' }}>
                        <th className='tableHeaderStyle'>{ tableColumns.thead }</th>
                        {chartData.labels.map(label => (
                            <th key={ label } className='tableHeaderStyle'>
                                { label }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='tableCellStyle'>{ tableColumns.tbody }</td>
                        {chartData.datasets[0].data.map((value, index) => (
                            <td key={ index } className='tableCellStyle'>
                                { value }
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ChartTable;