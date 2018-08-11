import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button ,Grid , Row , Col ,Navbar ,PageHeader , Table} from 'react-bootstrap';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import UsersCategoryRow from './components/UsersCategoryRow'
import UsersRow from './components/UsersRow'
import Footer  from './components/Footer'
import Header from './components/Header'
import  _  from 'lodash' ;
import axios from 'axios';


const data =[
  {
    'equipe':"Test",
    'encadrant':"Test",
    'sujet':"Test",
    'score_communication_encadrant':0,
    'score_avancement':0,
    'score_realisation_tache':0,
    'score_totale':0,
    'membres' :[]

    
  }
]

class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
      users :data,
      selectedOption: '',
      selectedTrack: 'Filter By Track',
      selectedLocation: '',
      selectedFilterScore :'',
      selectedEncadrant :'',
      selectedSubject :''
     };
   }




componentDidMount = () => {

}


    filterBylocation = (selectedLocation) => {
       this.setState({ selectedLocation});
       if(selectedLocation.value =='all')
       {
         console.log('all no filter')
         this.setState({users:data})
       }else{
       const result= _.filter(this.state.users, item => item.location === selectedLocation.value);
       console.log('resuls of filer list' + JSON.stringify(result))
       this.setState({users: result})

          }

     }



     //**** sort teams by score (high-low or low-->high) */
     filterByScore = (selectedFilterScore) => {
        this.setState({ selectedFilterScore });
      }


    //**** sort teams by Superviser */
     filterByEncadrant = (selectedEncadrant) => {
      this.setState({ selectedEncadrant });
    }


     //**** sort teams by Superviser */
     filterBySujet = (selectedSubject) => {
      this.setState({ selectedSubject });
    }


      filter = (selectedFilter) => {
        console.log('filter value' + JSON.stringify(selectedFilter))
        if(selectedFilter.value =='all')
        {
          console.log('all no filter')
          this.setState({users:data})
        }else{
        const result= _.filter(this.state.users, item => item.track === selectedFilter.value || item.location === selectedFilter.value  );
        console.log('resuls of filer list' + JSON.stringify(result))
        this.setState({users: result})
         }
      }



  render() {
    const { selectedLocation } = this.state;
    const { selectedTrack } = this.state;
    const { users } = this.state;
    const { selectedEncadrant, selectedSubject ,selectedFilterScore } = this.state ;

    return (
      <div>

       <Header />

       <div className="container">
      <Row className="show-grid">

        <Col md={3}>
          <Select
       name="form-field-name"
        title={''}
        placeholder="Trier par Score"
       value={selectedFilterScore}
       onChange={this.filterByScore}
       options={[
         { value: 'Min-Max', label: 'Min-Max' },
         { value: 'Max-Min', label: 'Max-Min' },
       ]}
     />
        </Col>

        <Col md={3}>
          <Select
       name="form-field-name"
       placeholder="Trier par Encadrant "
       value={selectedEncadrant}
       onChange={this.filterByEncadrant}
       options={[
         { value: 'mehrez_essafi', label: 'Mr Mehrez Essafi' },
         { value: 'youssef_ben_hlima', label: 'Mr Youssef ben hlima' },
         { value: 'youssef_ben_hlima', label: 'Madame Imen Bouziri' },


       ]}
     />
        </Col>


          <Col md={3}>
          <Select
       name="form-field-name"
       placeholder="Trier par Sujet "
       value={selectedSubject}
       onChange={this.filterBySujet}
       options={[
         { value: 'mehrez_essafi', label: 'Sujet1' },
         { value: 'mehrez_essafi', label: 'Sujet2' },



       ]}
     />
        </Col>

      </Row>


<hr />
    <div className="text-center">
   <Table responsive>
     <UsersCategoryRow />
     <UsersRow users ={users} />
   </Table>

    </div>

    <Footer />
      </div>
      </div>
    );
  }
}

export default App;
