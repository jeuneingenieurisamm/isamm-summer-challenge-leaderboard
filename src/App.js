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
import { database ,dbstore } from './firebase';


const data =[
  {
    'equipe':"Equipe 20",
    'encadrant':"Test",
    'encadrant_username' :'',
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
      teams :[],
      sortedteams :[],
      users :[],
      selectedOption: '',
      selectedTrack: 'Filter By Track',
      selectedLocation: '',
      selectedFilterScore :{ value: 'random', label: 'Aléatoire' },
      selectedEncadrant : { value: 'all', label: 'Tous les encadrants' },
      selectedSubject : { value: 'all', label: 'Tous les sujets' },
     };
   }




   componentDidMount() {
       //*** read the data firebase**********//  
      /* var data =[]  
     dbstore.collection("teams").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          data.push( doc.data())  
          this.setState({teams:data})   
         });//end ofr each doc  
  }).catch(function(err){
    console.log(err)
  })*/
  this.loadTeams()

    
  }


  loadTeams()
  {
    var data =[]  
    dbstore.collection("teams").get().then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
         doc.data().score_totale += doc.data().score_avancement + 
         doc.data().score_communication_encadrant + doc.data().score_realisation_tache
         data.push( doc.data()) 
         this.setState({teams:data}) 
         this.setState({sortedteams:data})  
        });//***end ofr each doc  */
 }).catch(function(err){
   console.log(err)
 })


  }


    



     //**** sort teams by score (high-low or low-->high) */
     filterByScore = (selectedFilterScore) => {
       
        this.setState({ selectedFilterScore });
        if(selectedFilterScore.value=='random')
        {
          console.log('are us here')
             this.loadTeams()
        }else{
          console.log('slect score' + selectedFilterScore.value)
          var teams = this.state.teams
          var sortedTeams = _.orderBy(teams, ['score_totale'],[selectedFilterScore.value]);
          console.log('sroted teams' + JSON.stringify(sortedTeams))
          this.setState({sortedteams:sortedTeams})
        }
        
      }


    //**** sort teams by Superviser */
     filterByEncadrant = (selectedEncadrant) => {
      this.setState({ selectedEncadrant });
      if(selectedEncadrant !=null)
      {
        if(selectedEncadrant.value=="all")
        {  
        
          this.loadTeams()
        }else{
          var teams = this.state.teams
          var sortedTeams= _.filter(teams, item => item.encadrant_username === selectedEncadrant.value);
          this.setState({sortedteams:sortedTeams})
        }
      }
     
    }


     //**** sort teams by Superviser */
     filterBySujet = (selectedSubject) => {
      this.setState({ selectedSubject });
      if(selectedSubject.value=="all")
      {  
        this.loadTeams()
      }else{
        var teams = this.state.teams
        var sortedTeams= _.filter(teams, item => item.sujet === selectedSubject.value);
        this.setState({sortedteams:sortedTeams})
      }
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
    const { users,teams,sortedteams } = this.state;
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
         { value: 'asc', label: 'Min-Max' },
         { value: 'desc', label: 'Max-Min' },
         { value: 'random', label: 'Aléatoire' },
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
        { value: 'all', label: 'Tous les encadrants' },
         { value: 'mehrez_essafi', label: 'Mr Mehrez Essafi' },
         { value: 'youssef_ben_hlima', label: 'Mr Youssef ben hlima' },

         { value: 'chawki_ben_fredj', label: 'Mr Chaouki Ben Fredj' },
         { value: 'ahmed_fougahli', label: 'Mr Ahmed Foughali' },
         { value: 'nader_debbabi', label: 'Mr Nader DEBBABI' },
         { value: 'amine_maaroufi', label: 'Mr Maaroufi Mohamed Amine ' },
         { value: 'firas_composs', label: 'Mr Mohamed Firas Zribi ' },

         { value: 'imen_bouziri', label: 'Madame Imen Bouziri' },
         { value: 'sana_ben', label: 'Madame Sana ben Abdallah' },
         { value: 'ahmed_rebai', label: 'Mr Rebai Ahmed' },


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
        { value: 'all', label: 'Tous les sujets' },
         { value: 'Sujet1', label: 'Sujet1' },
         { value: 'Sujet3', label: 'Sujet3' },
         { value: 'Sujet4', label: 'Sujet4' },
         { value: 'Sujet5', label: 'Sujet5' },
         { value: 'Sujet6', label: 'Sujet6' },
         { value: 'Sujet8', label: 'Sujet8' },
         { value: 'Sujet9', label: 'Sujet9' },
         { value: 'Sujet10', label: 'Sujet10' },
         { value: 'Sujet11', label: 'Sujet11' },



       ]}
     />
        </Col>

      </Row>


<hr />
    <div className="text-center">
   <Table responsive>
     <UsersCategoryRow />
     <UsersRow teams ={sortedteams} />
   </Table>

    </div>

    <Footer />
      </div>
      </div>
    );
  }
}

export default App;
