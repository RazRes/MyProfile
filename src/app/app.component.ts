import {ChangeDetectorRef, Component, OnInit, TemplateRef} from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {HomeServiceService} from "./home-service.service";
import {User} from "./models/user.model";
import {LoginComponent} from "./login/login.component";
import * as d3 from 'd3-shape/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NzModalService]
})
export class AppComponent implements OnInit {
  title = 'MyProfile';
  time = ''
  timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  user: User = {
    id: 1,
    name: 'test',
    biography: 'test',
    followers: 0,
    likes: 0
  }
  showExperience = false
  myProfile = {
    linkedinUrl: 'https://www.linkedin.com/in/razvan-resmerita-16221814a/',
    youtubeUrl: 'https://www.youtube.com/channel/UCpDCyq42SQ5zL1D_e6QnDoA',
    instagramUrl: 'https://www.instagram.com/razres/',
    facebookUrl: 'https://www.facebook.com/razvan.resmerita.35',
    githubUrl: 'https://github.com/RazRes'
  }

  technologiesLink = {
    angular: 'https://angular.io/',
    html: 'https://html.com/',
    css: 'https://www.w3schools.com/css/',
    nodeJs: 'https://nodejs.org/en/',
    mongoDb: 'https://www.mongodb.com/en-us',
    javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    java: 'https://docs.oracle.com/en/java/',
    scss: 'https://sass-lang.com/',
    gitLab: 'https://about.gitlab.com/',
    jira: 'https://www.atlassian.com/software/jira'


  }
  single1 = [
    {
      "name": "Instagram followers",
      "value": 32132
    }
  ]
  single2 = [
    {
      "name": "Facebook followers",
      "value": 53223
    }
  ]
  single3 = [
    {
      "name": "Youtube followers",
      "value": 64323
    }
  ]

  view: number [] = [700, 400];
  colorScheme = {
    domain: ['transparent']
  };
  cardColorInsta = '#f19e37'
  cardColorFacebook = '#3b5998'
  cardColorYoutube = '#FF0000'

  constructor(private cd: ChangeDetectorRef, private modal: NzModalService, private service: HomeServiceService
  ) {
  }

  async ngOnInit() {
    this.showExperience = true
    await this.getInstaFollowers()

  }

  navigateTo(url: string) {
    window.open(url)
  }

  async getInstaFollowers() {
    await this.service.getInstagramFollowers().then((response) => {
      console.log(response)
    })
  }

  showTime() {
    const formatter = new Intl.DateTimeFormat([], {
      timeZone: this.timeZone,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    })
    this.time = formatter.format(new Date())
    this.cd.detectChanges()
  }

  async getData() {
    this.user = await this.service.getData()
    console.log('Data', this.user)
  }

  openLoginModal() {
    this.modal.create({
      nzTitle: 'Login',
      nzContent: LoginComponent,
      nzClosable: true,
      nzFooter: null,
      nzOnOk: async (modal: LoginComponent) => {
        await modal.login(modal.formLogin)
      }
    })
  }

  showExperienceMethod() {
    this.showExperience = !this.showExperience
  }


}
