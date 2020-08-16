import React from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import { loadPassports ,loadRelations} from '../../actions/passports';
import styles from './Compare.module.css';
import CompareTable from './CompareTable/CompareTable.js'


export class Compare extends React.Component{

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(countryCode){
    this.props.loadRelations(countryCode);
  }
  componentDidMount(){
    if(this.props.passport.passportList.length === 0){
      this.props.loadPassports();
    }
  }

  render(){

    return(
      <>
      <div className={styles.header2}>
        <h1 className={styles.header2}>Compare Your Passport</h1>
        <h5 className={styles.header2}>Select passports and compare them side by side.</h5>
        <CompareTable data={this.props.passport.passportList} relationList = {this.props.passport.relationList}  onChange = {this.onChange}/>
      </div>
      </>
    ) 
  }
 
};

const getPassports = createSelector(
    state => state.passportReducer,
    (passportReducer) => passportReducer.toJS()
)


const mapStateToProps = (state) => ({
    passport: getPassports(state),
})

const mapDispatchToProps = (dispatch) => {
	return {
		loadPassports: (passportList) => {
      dispatch(loadPassports(passportList))
    },
    loadRelations: (relationList) =>{
      dispatch(loadRelations(relationList))
    }

	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compare);
