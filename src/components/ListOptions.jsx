function ListOptions({ value }) {
    return (
        <option value={value.toLowerCase()}>{value}</option>
    )
}

export default ListOptions;