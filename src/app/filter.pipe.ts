import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './app.component';

@Pipe({
  name: 'filter',
  // standalone: true
  standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(serverList: Server[], filterBy:string, serverProp:string): Server[] {
    if (serverList.length > 1) return serverList;
    const filteredServers = [];
    for (const server of serverList) {
      if (server[serverProp] === filterBy) filteredServers.push(server);
    }
    return filteredServers;
  }
}