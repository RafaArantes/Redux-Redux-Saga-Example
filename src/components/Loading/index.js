import React from 'react';
import './index.css'
import {connect} from "react-redux"

const Loading = ({loading}) => (
  loading ? 
    <div className="load_wrapper">
      <div className="load_gif"></div>
    </div> : 
    <></>
)

const mapStateToProps = state => ({
  loading: state.loading,
})

export {Loading}

export default connect(mapStateToProps)(Loading)
