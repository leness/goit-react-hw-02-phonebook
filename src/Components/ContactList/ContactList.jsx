import PropTypes from 'prop-types';
import style from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
        {contacts.map(({id, name, number}) => (
            
                  <li key={id} className={style.list}>
            <p>{name}: {number}</p>
            <button className={style.button} onClick={()=>onDeleteContact(id)}>Delete</button>
           </li>  
        ) 
          )}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList