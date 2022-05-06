import { makeStyles } from '@material-ui/core/styles';
import { color } from '@mui/system';

export default makeStyles({
    mainContainer: {
        marginTop: "40px",
        color:'white', 
    },
    contentBox: {
        padding:31, 
        height:'auto',
        width:'84%', 
        margin:'20px auto',
        textAlign:'left', 
        backgroundColor: '#232527',
    },
    examBox: {
        width: 'auto',
        height: '60px',
        backgroundColor: '#484C50',
        marginTop: '30px',
        paddingLeft: '20px',
    },
    expense: {
        textAlign:'right',
        paddingRight: '15px',
        paddingTop: '10px'
    },
});