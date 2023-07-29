import React from 'react';
import "./App.css";
import Table from "./components/tablelist/Table";
import TableNotesActive from "./components/tablelist/tablenotes/TableNotesActive";

function App() {
  return (
    <div className="container">
      <Table/>
      <TableNotesActive/>
    </div>
  );
}

export default App;
