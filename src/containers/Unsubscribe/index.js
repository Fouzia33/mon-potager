import { connect } from 'react-redux';
import { deleteSubmit } from 'src/actions/auth';
import Unsubscribe from 'src/components/Unsubscribe';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  manageDeleteSubmit: () => {
    dispatch(deleteSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Unsubscribe);
