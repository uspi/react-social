import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import Sidebar from "./Sidebar";

const mapStateToProps = (state: AppStateType) => ({
    friends: state.sidebar.friends
});

export default connect(mapStateToProps)(Sidebar);