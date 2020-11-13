import React, { Fragment, useState } from "react";

import Backdrop from "../Backdrop";

import cx from "classnames";
import formStyles from "./Form.module.css";
import modalStyles from "./Modal.module.css";

const PlanetForm = ({ closeForm }) => {
  const [formState, setFormState] = useState({
    name: "",
    rotation_period: null,
    orbital_period: null,
    diameter: null,
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: null,
  });
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    /* gravity, */
    terrain,
    surface_water,
  } = formState;

  const onChange = (e) => {
    let nextFormState = { ...formState, [e.target.name]: e.target.value };
    setFormState(nextFormState);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("summited");
  };

  let content = (
    <form className={formStyles.form} onSubmit={(e) => onSubmit(e)}>
      <label className={formStyles.label}>Name</label>
      <div>
        <input
          type="text"
          placeholder="Enter planet's name"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <label className={formStyles.label}>Rotation Period</label>
      <div>
        <input
          type="number"
          name="rotation_period"
          value={rotation_period}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <label className={formStyles.label}>Orbital Period</label>
      <div>
        <input
          type="number"
          name="orbital_period"
          value={orbital_period}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <label className={formStyles.label}>Diameter</label>
      <div>
        <input
          type="number"
          name="diameter"
          value={diameter}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <label className={formStyles.label}>Climate</label>
      <div>
        <input
          type="text"
          name="climate"
          value={climate}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      {/* <label className={formStyles.label}>Gravity</label>
      <div>
        <input
          type="text"
          name="gravity"
          value={gravity}
          onChange={(e) => onChange(e)}
          required
        />
      </div> */}

      <label className={formStyles.label}>Terrain</label>
      <select name="terrain" value={terrain} onChange={(e) => onChange(e)}>
        <option value="">Select Terrain</option>
        <option value="desert">Desert</option>
        <option value="grasslands">Grasslands</option>
        <option value="mountains">Mountains</option>
        <option value="jungle">Jungle</option>
      </select>
      <label className={formStyles.label}>Surface Water</label>
      <div>
        <input
          type="number"
          name="surface_water"
          value={surface_water}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className={modalStyles["mt-point5"]}>
        <input type="submit" className={modalStyles.btn} value="Submit" />
      </div>
    </form>
  );
  return (
    <Fragment>
      <Backdrop onclick={closeForm} />

      <div className={modalStyles.prompt}>
        <section className={formStyles.formContainer}>
          <h1 className={cx(modalStyles.heading)}>Add Planet</h1>
          {content}
        </section>
      </div>
    </Fragment>
  );
};

export default PlanetForm;
