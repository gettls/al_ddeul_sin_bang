import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    editbtn: {
        position: 'fixed',
        bottom: '25px',
        right: '70px',
    },
    deletebtn: {
        position: 'fixed',
        bottom: '25px',
        right: '30px',
    },
    cheifdelete: {
        position: 'fixed',
        top: '300px', left: '355px'
    },
    closebtn: {
        position: 'fixed',
        top: '300px', left: '389px'
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
    weather: {
        
    }
}));