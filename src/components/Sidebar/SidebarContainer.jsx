import { connect } from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => ({
    friends: state.sidebar.friends
});

export default connect(mapStateToProps)(Sidebar);