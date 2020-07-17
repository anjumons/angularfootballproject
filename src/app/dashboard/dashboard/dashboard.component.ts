import { Component, OnInit, ViewChild, TemplateRef, Inject } from '@angular/core';
import { FetchGameDetailsService } from '../../fetch-game-details.service'
import { DOCUMENT } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isWait = false;
  slides = [];
  countries = [];
  flip = false;
  clubSummary: Array<any>;
  scoreTableDetails: Array<any>;
  constructor(private fetchGameDetailsService: FetchGameDetailsService, public dialog: MatDialog, @Inject(DOCUMENT) private document: Document) { }
  @ViewChild('clubDescription', { static: false }) clubDescription: TemplateRef<any>;
  ngOnInit() {
    this.slides = ['assets/images/wall1.jpg',
      'assets/images/wall2.jpg',
      'assets/images/wall3.jpg',
      'assets/images/wall4.jpg',
      'assets/images/wall5.jpg']
      ;
    this.countries = [
      'England',
      'France',
      'Spain',
      'Brazil',
      'Italy',
      'Portugal',
      'Germany',
      'Argentina',
      'Denmark',
      'Sweden',
      'Australia',
      'Netherlands',
      'Norway'];

  }
  private flipped: boolean[];
  clubDetails = {};
  selectedDesc = '';
  league = '';
  selectedTitle = '';
  openDialog(desc, title): void {
    const dialogRef = this.dialog.open(this.clubDescription, {
      width: '500px',
    });
    this.selectedDesc = desc;
    this.selectedTitle = title;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    // event.stopPropagation();
  }
  getCountryClubs(event) {
    this.isWait = true;
    switch (event.value) {
      case 'England': this.league = 'English Premier League';
        break;
      default: this.league = '';
    }
    if (this.league !== '') {
      this.fetchGameDetailsService.getleagueDetails(this.league).subscribe(res => {
        this.clubSummary = res['teams'];
        console.log(res);
        this.fetchGameDetailsService.getlookupTable().subscribe(lookuptableres => {
          this.scoreTableDetails = lookuptableres['table'];
          this.isWait = false;
        })
      });
    } else {
      this.clubSummary = [];
      this.isWait = false;
    }
  }
  getClubInfo(teamid, item) {
    for (let i = 0; i < this.scoreTableDetails.length; i++) {
      if (this.scoreTableDetails[i].teamid === teamid) {
        this.clubSummary[item].name = this.scoreTableDetails[i].name;
        this.clubSummary[item].goalsfor = this.scoreTableDetails[i].goalsfor;
        this.clubSummary[item].played = this.scoreTableDetails[i].played;
        this.clubSummary[item].goalsagainst = this.scoreTableDetails[i].goalsagainst;
        this.clubSummary[item].goalsdifference = this.scoreTableDetails[i].goalsdifference;
        this.clubSummary[item].win = this.scoreTableDetails[i].win;
        this.clubSummary[item].draw = this.scoreTableDetails[i].draw;
        this.clubSummary[item].loss = this.scoreTableDetails[i].loss;
        this.clubSummary[item].total = this.scoreTableDetails[i].total;
        console.log(this.clubSummary);

      }

    }

  }
  goTourl(url) {
    window.open('http://'+url, "_blank");
    // this.document.location.href = url;
  }
  // flipcard(index: number) {
  //   this.flipped[index] = !this.flipped[index];
  //   this.getClubInfo();
  // }

  // switch (event.value) {
  //   case 'Spain': this.clubSummary = [{
  //     'clubName': 'Barcelona',
  //     'clubDescription': 'Futbol Club Barcelona has won a record 74 trophies; 26 La Liga, 30 Copa del Rey, 13 Supercopa de España, 3 Copa Eva Duarte, and 2 Copa de la Liga trophies',
  //     'clubPosterurl': 'assets/images/clubposters/Barcelona.jpg',
  //     'facebookurl': '',
  //     'isflipped': false
  //   },
  //   {
  //     'clubName': 'Atlético Madrid',
  //     'clubDescription': 'Club Atlético de Madrid are the third most successful club in Spanish football',
  //     'clubPosterurl': 'assets/images/clubposters/AtléticoMadrid.jpg',
  //     'facebookurl': '',
  //     'isflipped': false
  //   },
  //   {
  //     'clubName': 'Real Madrid',
  //     'clubDescription': 'Real Madrid,  a Spanish professional football club based in Madrid.Real Madrid is one of three founding members of La Liga ',
  //     'clubPosterurl': 'assets/images/clubposters/RealMadridCF.jpg',
  //     'facebookurl': '',
  //     'isflipped': false
  //   },
  //   {
  //     'clubName': 'Valencia',
  //     'clubDescription': 'Valencia have won six La Liga titles, eight Copa del Rey titles, one Supercopa de España and one Copa Eva Duarte. In European competitions.',
  //     'clubPosterurl': 'assets/images/clubposters/Valencia Club de Fútbol.jpg',
  //     'facebookurl': 'https://www.facebook.com/fcbarcelona/',
  //     'isflipped': false
  //   },
  //   {
  //     'clubName': 'Getafe',
  //     'clubDescription': 'The team competes in La Liga, the highest tier of the Spanish football system',
  //     'clubPosterurl': 'assets/images/clubposters/Getafe CF.jpg',
  //     'facebookurl': '',
  //     'isflipped': false
  //   }]
  //     break;
  //   case 'France':
  //     this.clubSummary = []; break;
  //   case 'Brazil':
  //     this.clubSummary = [];
  //     break;
  //   default: this.clubSummary = [];
  //     break;
  // }

}
