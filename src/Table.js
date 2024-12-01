import React from 'react';
import './App.css';

const Table = ({ projects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Math.round(project["percentage.funded"])}</td>
            <td>{Math.round(project["amt.pledged"])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
