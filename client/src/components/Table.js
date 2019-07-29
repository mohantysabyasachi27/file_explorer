import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        console.log('fetch in useEffect'+String(path))
        axios.get("/api/customer",{
            params: {
                path: '.'+path
            }
          })
        .then(x=> x.data)
            .then(files => setRows(files));
    }, []);

    const handleModal = (event, path) => {
        console.log('handleModal'+path);
        setModal({
            src: path,
            open: true
        })
    }

    const renderRow = (row) => {
        console.log(row);
        if(row.IsDirectory){
            console.log('href for dir: '+ row.path);
            return ( 
                <td className="text-xs-left col-sm-8" >
                <i className={row.style} />&nbsp;
                <Link href={path+row.Name}>
                    {row.Name}
                </Link>
                </td>
                );
        }else{
            return (
            <td className="text-xs-left col-sm-8" >
            <i className={row.style} />&nbsp;
            <a path={path+row.Name} onClick={(e) => handleModal(e,path+row.Name)}>
                {row.Name}
            </a>
            </td>);
        }
        
    }
    const renderRows = () => {
        if(rows && rows.length){
            return rows.map((row, index) => {
                return (
                    <tr key={index} style={{ backgroundColor: 'inherit' }}>
                        {renderRow(row)}
                        <td className="text-xs-right col-sm-4">{row.Size}</td>
                    </tr>
                );
            });
        }else{
            return(
                <div>
            </div>);
            
        }
    }

    return (
        <div className="container">
            <Search setRows={setRows} path={path}/>
           <IconBreadcrumbs path={path}/>
            <div className="table-responsive container">
                <table id="listr-table" className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-xs-left col-sm-8" data-sort="string">Name</th>
                            <th className="text-xs-right col-sm-4" data-sort="int">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </div>
            {
                console.log('SimpleModal')
            }
            <SimpleModal src={modal.src} openModal={modal.open} setModal={setModal}/>
        </div>
    );
}
export default Table;