import Input from "../../components/Input";

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

  <Input
        handleChange={handleChange}
        value="black"
        title= "Black"
        name= "test1"
        color="black"
        />

  <Input
        handleChange={handleChange}
        value={100}
        title= "$50 - $100"
        name= "test2"
        />


<Input
        handleChange={handleChange}
        value={150}
        title= "$100 - $150"
        name= "test2"
        />

<Input
        handleChange={handleChange}
        value={200}
        title= "$150 - $200"
        name= "test2"
        />
    </div>
  );
}
export default Colors;
