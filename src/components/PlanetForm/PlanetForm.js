import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

import PropTypes from "prop-types";

import getRandomInt from "../../util/getRandomInt";

import Backdrop from "../Backdrop";

import cx from "classnames";
import formStyles from "./Form.module.css";
import modalStyles from "./Modal.module.css";

const PlanetForm = ({ closeForm, setAlert }) => {
  const [formState, setFormState] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
  });
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
  } = formState;

  const onChange = (e) => {
    let nextFormState = { ...formState, [e.target.name]: e.target.value };
    setFormState(nextFormState);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (getRandomInt(0, 1)) setAlert("Planet data Updated!", "success");
    else setAlert("Planet data failed to Updated.", "fail");

    closeForm();
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
      <div style={{ display: "flex" }}>
        <div>
          <label className={formStyles.label}>Rotation Period</label>
          <div style={{ marginRight: "5px" }}>
            <input
              type="number"
              name="rotation_period"
              value={rotation_period}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <div>
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
        </div>
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
      <label className={formStyles.label}>Gravity</label>
      <div>
        <input
          type="text"
          name="gravity"
          value={gravity}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <label className={formStyles.label}>Terrain</label>
      <select
        name="terrain"
        value={terrain}
        onChange={(e) => onChange(e)}
        required
      >
        <option value="" disabled>
          Select Terrain
        </option>
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
          <h1 className={cx(modalStyles.heading)}>Update Planet</h1>
          {content}
        </section>
      </div>
    </Fragment>
  );
};
PlanetForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetForm);
