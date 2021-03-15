import styles from './Filter.module.css'

const Filter = ({ filter, onChange }) => {
    return (
        <div className={styles.label}>
            <label>
        Find contacts by name
        <input type="filter" value={filter} onChange={onChange}/>
    </label >
        </div>
        
    )
}

export default Filter



    