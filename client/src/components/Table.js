import React, { useState, useEffect, Fragment } from 'react';
import SimpleModal from './SimpleModal';
import '../App.css';
import '../css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Search from './Search';
import IconBreadcrumbs from './Breadcrumb';
import axios from 'axios';
import Link from "@material-ui/core/Link";

const Table = (props) => {

    const [rows, setRows] = useState([]);
    const [path, setPath] = useState(props.location.pathname);
    const [modal, setModal] = useState({
        src: '',
        open: false
    });

    var [sortOrderName, setSortOrderName] = useState(true);

    const bytesToSize = (bytes) => {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     };

    useEffect(() => {
        console.log('see useEffect?');
        if(!path.includes('.')){
            console.log('why this useEffect?');
            axios.get("/api/customer",{
                params: {
                    path: '.'+path
                }
              })
            .then(x=> x.data)
                .then(files => setRows(files));
        }
        }, []);
        

    const handleModal = (event, path) => {
        console.log('Open Modal')
        setModal({
            src: path,
            open: true
        })
    }

    const renderRow = (row) => {
        const href_to_file = encodeURIComponent((path+row.Name).trim());
        if(row.IsDirectory){
            return ( 
                <td data-title="Name" className="text-xs-left col-sm-8" >
                <i className={row.style} />&nbsp;
                <Link href={path+row.Name}>
                    {row.Name}
                </Link>
                </td>
                );
        }else if(row.ext == 'mp4'){
            return (
                <td data-title="Name" className="text-xs-left col-sm-8" >
            <i className={row.style} />&nbsp;
            <a className="video-modal" path={href_to_file} onClick={(e) => handleModal(e,path+row.Name)}>
                {row.Name}
            </a>
            </td>
);
        }else{
            return (
            <td data-title="Name" className="text-xs-left col-sm-8" >
            <i className={row.style} />&nbsp;
            <a path={href_to_file} onClick={(e) => handleModal(e,path+row.Name)}>
                {row.Name}
            </a>
            </td>);
        }
        
    }
    const renderRows = () => {
        if(rows && rows.length){
            return rows.map((row, index) => {
                return (
                    <tr data-title="Size" key={index} style={{ backgroundColor: 'inherit' }}>
                        {renderRow(row)}
                        <td className="text-xs-right col-sm-4">{bytesToSize(row.Size)}</td>
                    </tr>
                );
            });
        }else{
            return(<Fragment/>);
            
        }
    }

    const onSort = (event, sortKey) =>{
        let data = [];
        if(sortOrderName){
        data = data.concat(rows)
        .sort((a,b) => a[sortKey].localeCompare(b[sortKey]));}
        else{
        data = data.concat(rows)
            .reverse((a,b) => a[sortKey].localeCompare(b[sortKey]));
        }
        setRows(data);
        sortOrderName = setSortOrderName(!sortOrderName);
      }

    return (
        <div className="container">
            <Search setRows={setRows} path={path}/>
           <IconBreadcrumbs path={path}/>
            <div className="table-responsive container">
                <table id="listr-table" className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-xs-left col-sm-8" onClick={e => onSort(e, 'Name')}>Name</th>
                            <th className="text-xs-right col-sm-4" /** onClick={e => onSort(e, "Size")}*/>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            <SimpleModal src={modal.src} openModal={modal.open} setModal={setModal}/>
        </div>
    );
}
export default Table;