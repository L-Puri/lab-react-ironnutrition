import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchFood, onSearch}) {
    const handleChange = (e) => {
        onSearch(e.target.value)
    }
return (
    <div>
    <Divider>Search</Divider>

    <label>Search</label>
    <Input value={searchFood} type="text" onChange={handleChange} />
    </div>
);
}

export default Search;