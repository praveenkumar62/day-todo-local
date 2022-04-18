import React, {Component} from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
    margin-bottom: 9px;
`;
const TextInput = styled.input`
    width: 70%;
    height: 33px;
    padding: 0;
    border: 1px solid #EAEAEA;
    display: block;
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    &:focus {
        outline: 0;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        text-align: center;
    }
    &::-moz-placeholder { /* Firefox 19+ */
        text-align: center;
    }
    &:-ms-input-placeholder { /* IE 10+ */
        text-align: center;
    }
    &:-moz-placeholder { /* Firefox 18- */
        text-align: center;
    }
`;
const Button = styled.button`
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    color: #fff;
    background-color: orange;
    border-radius: 0;
    width: 16%;
    margin: 0;
    border: 1px solid orange;
    display: block;
    margin: 0 auto;
    border-radius: 4px;
    &:hover {
        border: 1px solid orange;
        color: orange;
        background-color: #fff;
    }
    &:focus {
        outline: 0;
    }
    @media (max-width: 600px) {
        width: 90px;
    }
`;

class AddTodo extends Component {
    state ={
        desc: '',
        author: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.receiveData(this.state);
        this.setState({
            desc: '',
            author: ''
        })
    }

    render() {
        
        return(
            <div>
                <form>
                    <FormGroup>
                        <TextInput type="text" name="desc" id="add-desc" placeholder="What you want to achieve today..." onChange={this.handleChange} value={this.state.desc} />
                    </FormGroup>
                    <FormGroup>
                        <TextInput type="text" name="author" id="add-author" placeholder="Who believes in you ?"  onChange={this.handleChange}value={this.state.author} />
                    </FormGroup>
                    <Button type="submit" onClick={this.handleSubmit}>Add</Button>
                </form>
            </div>
        )
    }
}

export default AddTodo
