import { Component } from '@angular/core';

export interface Server {
  instanceType: string, 
  name: string, 
  status: string, 
  started: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterServerStatus: string = '';
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2011, 2, 20, 4, 42, 34)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(2017, 10, 4, 13, 38, 7)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(2014, 8, 22, 7, 18, 26)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(2012, 3, 19, 21, 45, 18)
    }
  ];
  addServer(){
    this.servers.push({
      instanceType : 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(2023, 10, 140)
    })
  }
  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
