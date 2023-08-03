import Button from './Button';
const ErrorModal  = (props) => {

    return(
        <div className="errorModal">
            <h3>Invalid Input</h3>
            <div className='errorText'>
            {props.errorType == "empty" && "All Inputs Have To Be Filled."}
            {props.errorType == "negativeAge" && "Age Can Not Be a Negative Number."}
            </div>
        </div>
    );
}
export default ErrorModal;