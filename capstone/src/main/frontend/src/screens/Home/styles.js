import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    addtown: {
        position: 'fixed',
        bottom: '20px',
        right: '30px',
    },
    closebtn: {
        position: 'fixed',
        top: '488px', left: '310px'
    },
    title: {
        fontWeight: '800'
    },
    input: {
        margin: '4px',
        border: 'none',
        height: '27px',
        width: '250px',
        borderRadius: '10px',

    },
    inputbtn: {
        margin: '7px',
        fontWeight: "800"
    },
}));