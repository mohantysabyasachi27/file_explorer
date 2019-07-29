import React, { useState, useEffect } from 'react';
import './Search.css';
import '../css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
const Search = ({setRows, path}) => {
    const [searchBox, setSearchBox] = useState('');
    const [type, setType] = useState(0);
    const [category, setCategory] = useState(0);

    const handleClick = () => {
         axios.get("/search", {
            params: {
                path: '.'+path,
                searchBox: searchBox,
                type: type,
                category: category
            }
          }).then(x=> x.data)
          .then(files => setRows(files));
    }

    const handleChange = (event) => {
        if(event.target.name==='query'){
            setSearchBox(event.target.value);
        }else if(event.target.name==='type'){
            setType(event.target.value);
        }else if(event.target.name==='category'){
            setCategory(event.target.value)
        }        
    }

    return (
        <div className="container">
            <div className="form-inline md-form mr-auto mb-4">
                <input name='query' onChange={handleChange} className="search-field form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <select name='category' onChange={handleChange} className="search-field mdb-select" searchable="Search here..">
                    <option value="1" disabled selected>Sub-Category</option>
                    <option value="2" className="rounded-circle">
                        Agriculture</option>
                    <option value="3" className="rounded-circle">
                        Climate Change</option>
                    <option value="4" className="rounded-circle">
                        Energy</option>
                    <option value="4" className="rounded-circle">
                        Geography</option>
                </select>
                <select name='type' onChange={handleChange} className="search-field mdb-select" searchable="Search here..">
                    <option value="0" disabled selected>File Type</option>
                    <option value="1" className="rounded-circle">
                        All</option>
                    <option value="2" className="rounded-circle">
                        document</option>
                    <option value="3" className="rounded-circle">
                        audio</option>
                    <option value="4" className="rounded-circle">
                        video</option>
                    
                </select>
                    <button onClick={handleClick} className="btn btn-elegant btn-rounded btn-sm my-0" type="submit"><i className="fa fa-search"></i></button>
                </div>
        </div>
    );
}
export default Search;