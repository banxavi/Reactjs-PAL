import React, { useState } from "react";
import {Button } from "react-bootstrap";

export default function ModalSearch(props) {
  const [search, setSearch] = useState("");
    props.info_search(search)

  return (
      <div>
      <input style={{height: '35px', margin: '10px'}} type='search'  onChange={(text) => setSearch(text.target.value)}></input>

      <Button  className="searchbtn" variant="outline-info" onClick={props.onSearch}>
        Search
      </Button>
      </div>

  );
}
