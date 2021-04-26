
import React from 'react';

export default props => (
    <table className="table" style={{color: "white"}}>
        <thead >
            <tr >
                <th style={{ cursor: "pointer" }} onClick={props.onSort.bind(null, 'number') }>Номер изделия</th>
                <th style={{ cursor: "pointer" }} onClick={props.onSort.bind(null, 'name')}>Наименование изделия</th>
                <th style={{ cursor: "pointer" }} onClick={props.onSort.bind(null, 'norma')}>Норма за квартал</th>
                <th style={{ cursor: "pointer" }} onClick={props.onSort.bind(null, 'have')}>Изготовленно</th>
                <th style={{ cursor: "pointer" }} onClick={props.onSort.bind(null, 'need')}>Осталось</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.number}>
                    <td>{item.number}</td>
                    <td>{item.name}</td>
                    <td>{item.norma}</td>
                    <td>{item.have}</td>
                    <td>{item.need}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
