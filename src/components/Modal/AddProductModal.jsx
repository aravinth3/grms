const AddProductModal = () => {
  return (
    <div className="p-3">
      <form>
        <label className="app_label">Product Code</label>
        <input type="name" className="app_input" required />
        <label className="app_label mt-3">Product Name</label>
        <input type="text" className="app_input " required />

        <div className="row mt-3">
          <div className="col-md-6 col-lg-4 col-12 pe-1">
            <div>
              <label className="app_label ">Width</label>
              <input type="text" className="app_input" required />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <div>
              <label className="app_label">Height</label>
              <input type="text" className="app_input" required />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ps-1">
            <div>
              <label className="app_label">Unit</label>
              <select className="app_input" required>
                <option>MM</option>
                <option>CM</option>
                <option>Inch</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 col-lg-6 col-12">
            <div>
              <label className="app_label">Price</label>
              <input type="number" className="app_input" required />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-12">
            <div>
              <label className="app_label">Quantity</label>
              <input type="text" className="app_input " required />
            </div>
          </div>
        </div>
        <button className="app_btn success ms-3">Save</button>
      </form>
    </div>
  );
};

export default AddProductModal;
