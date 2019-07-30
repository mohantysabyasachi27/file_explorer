var express = require('express');
var router = express.Router();
const _ = require('lodash');
var path = require('path');
const { promisify } = require('util')
const fs = require('fs');
const readdir = promisify(require('fs').readdir)
const stat = promisify(require('fs').stat);

var fileType=  [] ;
fileType[2] = new Set(['pdf', 'txt', 'doc', 'docx']);
fileType[3] = new Set(['mp3', 'aac']);
fileType[4] = new Set(['mp4', 'mov']);
fileType[5] = new Set(['.DS_Store','.', '..'])

const getListAsync =  (dir, filelist) => {
    console.log(dir+":::"+filelist);
    var path = path || require('path');
    var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach( (file) => {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        filelist = getListAsync(path.join(dir, file), filelist);
      }
      else {
        filelist.push({"name": file, "currentDir": dir});
      }
    });
    return filelist;
  };
  
  async function getPathContent(newPath, filters) {
    const pathContent = [];
    let files = await readdir(newPath)
    let pathName = newPath;
    const absPath = path.resolve(pathName);
    for (let file of files) {
      if(fileType[5].has(file))continue;
        try {
          if(filters && filters.searchBox && !file.includes(filters.searchBox)){
            continue;
          }
          let stats = await stat(absPath + '/' + file)
          if (stats.isFile()) {
            let ext = file.substring(file.lastIndexOf('.') + 1);
            var style;
            if(ext === 'mp4'){
              style = "fa fa-fw fa-film ";
            }else if(ext === 'pdf'){
              style ="fa fa-fw fa-file-text ";
            }else if(ext === 'mp3'){
              style ="fa fa-fw fa-file-audio-o ";
            }
            if( filters && filters.type){
              if (filters.type !== '0' && filters.type !== '1' && !fileType[filters.type].has(ext)){
                continue;
              }
            }
            pathContent.push({
              Name: file,
              Ext: ext,
              style: style,
              IsDirectory: false,
              Size: stats.size,
              Path: pathName
            });
          } else if (stats.isDirectory()) {
            pathContent.push({
              Path: pathName,
              Name: file,
              IsDirectory: true,
              Size: stats.size,
              style: "fa fa-fw fa-folder"
            });
          }
      } catch (err) {
          console.log(`${err}`);
        }
    }
    return pathContent;
  }

  async function searchContents(newPath, filters) {
    const pathContent = [];
    let files = await getListAsync(newPath);
    let pathName = newPath;
   
    for (let file of files) {
      if(fileType[5].has(file))continue;
      const absPath = path.resolve(file.currentDir);
        try {
          if(filters && filters.searchBox && !(file.name).includes(filters.searchBox)){
            continue;
          }
          let stats = await stat(absPath + '/' + file.name)
          if (stats.isFile()) {
            let ext = file.name.substring(file.name.lastIndexOf('.') + 1);
            var style;
            if(ext === 'mp4'){
              style = "fa fa-fw fa-film ";
            }else if(ext === 'pdf'){
              style ="fa fa-fw fa-file-text ";
            }
            if( filters && filters.type){
              if (filters.type !== '0' && filters.type !== '1' && !fileType[filters.type].has(ext)){
                continue;
              }
            }
            pathContent.push({
              Name: file.name,
              Ext: ext,
              style: style,
              IsDirectory: false,
              Size: stats.size,
              Path: pathName
            });
          } else if (stats.isDirectory()) {
            pathContent.push({
              Path: pathName,
              Name: file.name,
              IsDirectory: true,
              Size: stats.size,
              style: "fa fa-fw fa-folder"
            });
          }
      } catch (err) {
          console.log(`${err}`);
        }
    }
    return pathContent;
  }

  router.get('/api/customer', (req, res) => {
    var path = req.query.path;
    console.log('New Path:: ' + path);
    getPathContent(path, null).then((pathContent) => {
      res.json(pathContent);
    }, (err) => {
      res.status(422).json({
        message: `${err}`
      });
    })
  });
  
  router.get('/search', (req, res) => {
    const newPath = req.query.path ;
    searchContents(newPath, req.query).then((pathContent) => {
      res.json(pathContent);
    }, (err) => {
      res.status(422).json({
        message: `${err}`
      });
    })
  });

  router.get('/subcategory', (req, res) => {
    var path = req.query.path;
    console.log('subcategory:::'+path);
    res.json([]);
  })

  module.exports = router;