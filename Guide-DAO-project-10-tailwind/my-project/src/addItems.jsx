export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit} className="flex flex-col items-center">
      <div className="flex items-center">
        <label htmlFor="item-name" className="text-3xl font-bold text-pink-500">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="textfield text-1xl font-bold text-pink-400 mx-1 mt-2  border-2 border-pink-500 focus:border-pink-700 focus:outline-none rounded-lg"
        />
      </div>
      <div className="flex items-center mt-3">
        <label htmlFor="item-description" className="text-3xl font-bold text-pink-500 ">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="textfield text-1xl font-bold text-pink-400 mx-1 mt-2 border-2 border-pink-500  focus:border-pink-700 focus:outline-none rounded-lg"
        />
      </div>
      <div className="mt-5 form-footer flex flex-col items-center border-2  bg-pink-500 border-pink-500 hover:bg-purple-100 p-1.5 rounded-lg transition-colors duration-400">
        <div className="validation text-1xl font-bold text-pink-900">{props.valid}</div>
        <input type="submit" className="btn btn-basic text-3xl font-bold text-white transition-colors duration-400 hover:text-pink-500" value="Добавить" />
      </div>
    </form>
  );
}
