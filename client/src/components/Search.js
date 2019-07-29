import React, { useState, useEffect } from 'react';
import './Search.css';
import '../css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import { Toolbar } from '@material-ui/core/Toolbar';

const Search = ({ setRows, path }) => {
    useEffect(() => {
        axios.get("/subcategory", {
            params: {
                path: '.'+path
            }
          })
        .then(x=> x.data)
        .then(files => console.log(files));
    }, []);

    const [searchBox, setSearchBox] = useState('');
    const [type, setType] = useState(0);
    const [category, setCategory] = useState(0);

    const handleClick = () => {
        axios.get("/search", {
            params: {
                path: '.' + path,
                searchBox: searchBox,
                type: type,
                category: category
            }
        }).then(x => x.data)
            .then(files => setRows(files));
    }

    const handleChange = (event) => {
        if (event.target.name === 'query') {
            setSearchBox(event.target.value);
        } else if (event.target.name === 'type') {
            setType(event.target.value);
        } else if (event.target.name === 'category') {
            setCategory(event.target.value)
        }
    }

    return (
        <div className="search-div container">
            <div className="form-inline md-form mr-auto mb-4">
                <Tooltip title="Enter text to search in this section." aria-label="add">
                    <input name='query' onChange={handleChange} className="search-field form-control mr-sm-2" type="text" placeholder="  Search" aria-label="Search" />
                </Tooltip>
                <Tooltip title="Select the sub-category for current section." aria-label="add">
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
                </Tooltip>
                <Tooltip title="Select the type of files" aria-label="add">
                    <select name='type' onChange={handleChange} className="search-field mdb-select" searchable="Search here..">
                        <option value="0" disabled selected>File Type</option>
                        <option defaultValue value="1" className="rounded-circle">
                            All</option>
                        <option value="2" className="rounded-circle">
                            document</option>
                        <option value="3" className="rounded-circle">
                            audio</option>
                        <option value="4" className="rounded-circle">
                            video</option>

                    </select>
                </Tooltip>
                <Tooltip title="Search" aria-label="add">
                    <button onClick={handleClick} className="btn btn-elegant btn-rounded btn-sm my-0" type="submit"><i className="fa fa-search"></i></button>
                </Tooltip>
            </div>
        </div>
    );
}
export default Search;