import { Component } from "react";
import shortid from 'shortid';
import styles from './ContactForm.module.css'


class ContactForm extends Component{
    state = {
        name: '',
        number: '',
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  }

    handleSubmit = e => {
    e.preventDefault();
        this.props.onSubmit(this.state)
        this.reset();
        }

    reset = () => {
        this.setState({name: '', number: ''})
    }
    
    render() {
        return (
            <>
            <form className={styles.form} onSubmit={this.handleSubmit}>
                    <label htmlFor={ this.nameInputId}>name
           <input
                            type='text'
                            name='name'
                            id={this.nameInputId}
                            value={this.state.name}
                            onChange={this.handleChange} />
          </label>
          <label htmlFor={ this.numberInputId}>number
           <input
                            type='number'
                            name='number'
                            id={this.numberInputId}
                            value={this.state.number}
                            onChange={this.handleChange} />
          </label>
          <button type='submit'>Add contact</button>
        </form>
            </>
        )
    }
}

export default ContactForm


