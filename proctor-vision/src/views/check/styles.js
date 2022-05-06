import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    mainContainer: {
        marginTop: "23px",
        color:'white', 
    },
    middleBox: {
        marginTop: "50px", 
    },
    btnstyle: {
        marginTop:'12px', 
        display: "flex",
        width: '178px',
        alignItems: "left",
    },
    progress: {
        display: 'flex', 
    },
    done: {
        color: '#A7F93F', 
        fontSize: '30px', 
        marginRight: '20px'
    },
    fail: {
        color: '#FF5757', 
        fontSize: '30px', 
        marginRight: '20px'
    },
    reload: {
        color: 'rgba(255, 255, 255, 0.523)', 
        fontSize: '30px', 
        marginRight: '20px'
    },
    expense: {
        textAlign:'right',
        paddingRight: '10px',
        paddingTop: '10px'
    },
    clock: {
        textAlign:'right',
        marginRight: '100px'
    },
    date: {
        fontSize: '25px', 
        fontWeight: 'bold'
    }
});