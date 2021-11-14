import { connect } from 'react-redux';

// import component
import PlantsList from 'src/components/PlantsList';

// import actions creators
import { getPlantsList } from 'src/actions/plantsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  plants: state.plants.plants,
  loading: state.plants.loading,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(PlantsList);
