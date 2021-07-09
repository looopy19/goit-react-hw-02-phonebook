import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { FaRegAddressBook } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc'


const trash = {
  // backgroundColor: 'black',
  // width: '30px',
  // height: '30px',
  // border: '0px solid black',
  // borderRadius: '50%',
  // width: 'fit-content',
  // blockSize: 'fit-content',
};

const Contacts = ({ contacts, onDeleteBtnClick }) => (
  <div className={s.list}>
    <ul className={s.list__ul}>
      {contacts.map(person => (
        <li key={person.id} className={s.search__contact}>
          
            <FaRegAddressBook onClick={() => onDeleteBtnClick(person.id)} />
        
          {person.name} : {person.number}
          <div className={s.trash}>
            
              <VscTrash onClick={() => onDeleteBtnClick(person.id)} />
            
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default Contacts;