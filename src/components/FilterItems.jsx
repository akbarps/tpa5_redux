import React, { useState } from "react";
import { Alert, Button, Container, Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { init_filter } from "../FilterVariable";
import { setFilter } from "../redux/action/Action";


function FilterItems() {
  const dispatch = useDispatch()
  return (
    <Container
      style={{maxWidth: "400px", marginTop: "20px", display:'flex',justifyContent:'space-evenly' }}
    >
       {Object.keys(init_filter).map((item) => {
            const currentFilter = init_filter[item];
          return(
            <Button onClick={()=> dispatch(setFilter(currentFilter))} key={currentFilter}>{currentFilter}</Button>
          )
        })}
    </Container>
  );
}

export default FilterItems;
