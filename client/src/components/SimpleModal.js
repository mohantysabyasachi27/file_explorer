import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from "prop-types";
import Iframe from 'react-iframe';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 1100,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

const SimpleModal = ({ src, openModal, setModal }) => {
  useEffect(() => {
    if (openModal) {
      setOpen(true);
    }
  });

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setModal({
      src: '',
      open: false
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="modal-title">Filename</h2>
          <p id="simple-modal-description">
            Description: Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <Iframe url={src}
            allowFullScreen
            width="1000px"
            height="600px"
            id="myId"
            display="initial"
            position="relative"
            type="" />
          {/* <Iframe src={src} height="400px" width="725px" /> */}
        </div>
      </Modal>
    </div>
  );
}

// const Iframe = (props) => {     
//   return(         
//     <div>   
//       <iframe src={props.src} height={props.height} width={props.width}/>         
//     </div>
//   )
// };

SimpleModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
}

export default SimpleModal;
