import React, { useState } from 'react'
import { Divider, Input } from 'antd';


const Search = (props) => {
    const[keyword, setKeyword] = useState('')


    return (
        <>
          <Divider>Search</Divider>
    
          <label htmlFor="filter">Search</label>
          <Input value={keyword} type="text" onChange={(e) => setKeyword(e.target.value)} />
        </>
      );
}

export default Search
